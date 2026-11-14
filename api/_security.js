const crypto = require("node:crypto");

const SESSION_COOKIE = "__Host-pdaeh_session";
const SESSION_TTL_SECONDS = 30 * 60;
const MAX_BODY_BYTES = 20_000;
const MAX_MESSAGE_LENGTH = 8_000;
const RATE_WINDOWS = [
  { name: "minute", duration: 60_000, limit: 5 },
  { name: "hour", duration: 60 * 60_000, limit: 20 },
];
const buckets = new Map();
const activeSessions = new Map();

const INJECTION_PATTERNS = [
  /ignore\s+(all\s+)?(previous|prior|above)\s+(instructions|rules)/i,
  /(reveal|show|print|repeat|extract)\s+(the\s+)?(system|developer|hidden)\s+(prompt|instructions)/i,
  /(act|behave|respond)\s+as\s+(dan|unrestricted|unfiltered)/i,
  /(bypass|disable|override|remove)\s+(security|guardrails?|restrictions?|instructions?)/i,
  /<\/?(system|assistant|developer|tool)>/i,
];
const SECRET_PATTERNS = [
  /\bsk-[A-Za-z0-9_-]{16,}\b/,
  /\b(?:api[_ -]?key|token|password|contrase(?:ñ|n)a|secret)\s*[:=]\s*\S{8,}/i,
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
];

function base64url(value) { return Buffer.from(value).toString("base64url"); }
function sign(value, secret) { return crypto.createHmac("sha256", secret).update(value).digest("base64url"); }

function createSession(secret, now = Date.now()) {
  const payload = base64url(JSON.stringify({ id: crypto.randomUUID(), exp: now + SESSION_TTL_SECONDS * 1000 }));
  return `${payload}.${sign(payload, secret)}`;
}

function verifySession(token, secret, now = Date.now()) {
  if (!token || !secret || token.length > 512) return null;
  const [payload, signature, extra] = token.split(".");
  if (!payload || !signature || extra) return null;
  const expected = sign(payload, secret);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (typeof data.id !== "string" || typeof data.exp !== "number" || data.exp <= now) return null;
    return data;
  } catch { return null; }
}

function parseCookies(req) {
  return Object.fromEntries(String(req.headers?.cookie || "").split(";").map((part) => part.trim()).filter(Boolean).map((part) => {
    const index = part.indexOf("=");
    return index < 0 ? [part, ""] : [part.slice(0, index), decodeURIComponent(part.slice(index + 1))];
  }));
}

function setSessionCookie(res, token) {
  res.setHeader("Set-Cookie", `${SESSION_COOKIE}=${encodeURIComponent(token)}; Path=/; Max-Age=${SESSION_TTL_SECONDS}; HttpOnly; Secure; SameSite=Strict`);
}

function clientIp(req) {
  const value = req.headers?.["x-real-ip"] || req.headers?.["x-vercel-forwarded-for"] || req.headers?.["x-forwarded-for"] || "unknown";
  return String(value).split(",")[0].trim().slice(0, 64);
}

function sameOrigin(req) {
  const origin = req.headers?.origin;
  if (!origin) return process.env.VERCEL_ENV !== "production";
  try {
    const host = req.headers["x-forwarded-host"] || req.headers.host;
    return new URL(origin).host === host;
  } catch { return false; }
}

function contentRequestIsValid(req) {
  const type = String(req.headers?.["content-type"] || "").toLowerCase();
  const length = Number(req.headers?.["content-length"] || 0);
  return type.startsWith("application/json") && Number.isFinite(length) && length > 0 && length <= MAX_BODY_BYTES;
}

function suspiciousInput(text) {
  const normalized = String(text).normalize("NFKC").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
  if (INJECTION_PATTERNS.some((pattern) => pattern.test(normalized))) return "prompt_injection";
  if (SECRET_PATTERNS.some((pattern) => pattern.test(normalized))) return "secret";
  return null;
}

function validateBody(body) {
  if (!body || !Array.isArray(body.messages) || body.messages.length !== 1) return "Se admite exactamente un mensaje por solicitud.";
  const message = body.messages[0];
  if (!message || message.role !== "user" || typeof message.content !== "string") return "La solicitud contiene un mensaje inválido.";
  const content = message.content.trim();
  if (content.length < 1 || content.length > MAX_MESSAGE_LENGTH) return `El mensaje debe contener entre 1 y ${MAX_MESSAGE_LENGTH} caracteres.`;
  const threat = suspiciousInput(content);
  if (threat === "prompt_injection") return "La solicitud contiene instrucciones incompatibles con las reglas de seguridad del Advisor.";
  if (threat === "secret") return "No envíe claves, contraseñas, tokens ni secretos de infraestructura.";
  if (body.previousResponseId && !/^(?:resp|gen)_[A-Za-z0-9_-]{8,128}$/.test(body.previousResponseId)) return "El identificador de conversación no es válido.";
  if (typeof body.turnstileToken !== "string" || body.turnstileToken.length < 20 || body.turnstileToken.length > 4096) return "La verificación anti-bot es obligatoria.";
  return null;
}

function rateLimit(key, now = Date.now()) {
  for (const window of RATE_WINDOWS) {
    const bucketKey = `${window.name}:${key}`;
    let bucket = buckets.get(bucketKey);
    if (!bucket || now - bucket.startedAt >= window.duration) {
      bucket = { startedAt: now, count: 0 };
      buckets.set(bucketKey, bucket);
    }
    bucket.count += 1;
    if (bucket.count > window.limit) return Math.ceil((window.duration - (now - bucket.startedAt)) / 1000);
  }
  if (buckets.size > 10_000) for (const [bucketKey, bucket] of buckets) if (now - bucket.startedAt > 60 * 60_000) buckets.delete(bucketKey);
  return 0;
}

function acquire(sessionId) {
  const now = Date.now();
  const last = activeSessions.get(sessionId);
  if (last && (now - last) < 25_000) return false;
  activeSessions.set(sessionId, now);
  return true;
}
function release(sessionId) { activeSessions.delete(sessionId); }

async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return { success: false, reason: "not_configured" };
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
      signal: AbortSignal.timeout(8_000),
    });
    const result = await response.json();
    const allowedHosts = new Set(["pdaeh-advisor.vercel.app", ...(process.env.TURNSTILE_ALLOWED_HOSTS || "").split(",").map((v) => v.trim()).filter(Boolean)]);
    return { success: result.success === true && result.action === "advisor" && allowedHosts.has(result.hostname), reason: result["error-codes"]?.[0] || null };
  } catch { return { success: false, reason: "verification_failed" }; }
}

module.exports = { SESSION_COOKIE, createSession, verifySession, parseCookies, setSessionCookie, clientIp, sameOrigin, contentRequestIsValid, suspiciousInput, validateBody, rateLimit, acquire, release, verifyTurnstile };
