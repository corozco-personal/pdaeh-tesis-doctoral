const { createSession, setSessionCookie } = require("./_security");

module.exports = function securityConfig(req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");
  if (req.method !== "GET") { res.statusCode = 405; return res.end(JSON.stringify({ error: "Método no permitido." })); }
  if (!process.env.SESSION_SECRET || !process.env.TURNSTILE_SITE_KEY || !process.env.TURNSTILE_SECRET_KEY) {
    res.statusCode = 503;
    return res.end(JSON.stringify({ error: "La protección anti-bot aún no está configurada." }));
  }
  setSessionCookie(res, createSession(process.env.SESSION_SECRET));
  res.statusCode = 200;
  return res.end(JSON.stringify({ turnstileSiteKey: process.env.TURNSTILE_SITE_KEY }));
};
