(() => {
  const profileForm = document.querySelector("#profileForm");
  const chatForm = document.querySelector("#chatForm");
  const chatInput = document.querySelector("#chatInput");
  const sendButton = document.querySelector("#sendMessage");
  const messages = document.querySelector("#messages");
  const errorMessage = document.querySelector("#errorMessage");
  const newConversation = document.querySelector("#newConversation");
  const securityStatus = document.querySelector("#securityStatus");
  let previousResponseId = null;
  let started = false;
  let turnstileToken = "active";
  let turnstileWidgetId = null;
  let securityReady = true;

  let mermaidInitialized = false;
  function ensureMermaid() {
    if (!mermaidInitialized && window.mermaid) {
      window.mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: "neutral",
        flowchart: { htmlLabels: true, useMaxWidth: true },
      });
      mermaidInitialized = true;
    }
  }

  async function initializeSecurity() {
    try {
      securityStatus.textContent = "Inicializando conexión segura…";
      const response = await fetch("/api/security-config", {
        credentials: "same-origin",
        cache: "no-store",
        signal: AbortSignal.timeout ? AbortSignal.timeout(12000) : undefined,
      });
      const config = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(config.error || "No fue posible conectar con el servicio de seguridad.");

      if (config.mode === "rust-native" || !config.turnstileSiteKey) {
        // En backend Rust nativo, la conexión es directa y protegida por el servidor
        turnstileToken = "rust-session-valid";
        securityReady = true;
        const container = document.querySelector("#turnstileWidget");
        if (container) container.style.display = "none";
        securityStatus.style.display = "none";
        return;
      }

      for (let attempt = 0; attempt < 80 && !window.turnstile; attempt += 1) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      if (!window.turnstile) throw new Error("El componente de verificación no pudo cargarse. Compruebe su conexión.");

      const container = document.querySelector("#turnstileWidget");
      if (container) container.innerHTML = "";

      turnstileWidgetId = window.turnstile.render("#turnstileWidget", {
        sitekey: config.turnstileSiteKey,
        action: "advisor",
        theme: "light",
        callback(token) {
          turnstileToken = token;
          securityReady = true;
          securityStatus.textContent = "Verificación anti-bot completada.";
        },
        "expired-callback"() {
          turnstileToken = "";
          securityReady = false;
          securityStatus.textContent = "La verificación expiró. Complétela nuevamente.";
        },
        "error-callback"() {
          turnstileToken = "";
          securityReady = false;
          securityStatus.textContent = "No fue posible completar la verificación anti-bot.";
        },
      });
      securityStatus.textContent = "Complete la verificación anti-bot para continuar.";
    } catch (error) {
      securityStatus.innerHTML = `${error.message} <button type="button" class="text-button" id="retrySecurityBtn" style="margin-left:8px;font-size:0.85em;text-decoration:underline;cursor:pointer">Reintentar</button>`;
      document.querySelector("#retrySecurityBtn")?.addEventListener("click", initializeSecurity);
    }
  }

  function createMessage(role) {
    const article = document.createElement("article");
    article.className = `message ${role}`;
    article.innerHTML = `<div class="avatar" aria-hidden="true">${role === "assistant" ? "P" : "U"}</div><div class="bubble"></div>`;
    messages.append(article);
    article.scrollIntoView({ behavior: "smooth", block: "end" });
    return article;
  }

  function addUserMessage(text) {
    const article = createMessage("user");
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    article.querySelector(".bubble").append(paragraph);
  }

  function createStreamingMessage() {
    const article = createMessage("assistant");
    article.classList.add("streaming");
    const output = document.createElement("div");
    output.className = "stream-output";
    output.setAttribute("role", "status");
    output.setAttribute("aria-label", "El Advisor está generando la respuesta");
    article.querySelector(".bubble").append(output);
    return { article, output };
  }

  function normalizeMermaid(source) {
    const quote = (value) => `"${value.trim().replace(/"/g, "'")}"`;
    return source
      .replace(/(\b[A-Za-z_][\w-]*)\[([^\[\]\n]+)\]/g, (match, id, label) => `${id}[${/^\s*"/.test(label) ? label : quote(label)}]`)
      .replace(/(\b[A-Za-z_][\w-]*)\{([^{}\n]+)\}/g, (match, id, label) => `${id}{${/^\s*"/.test(label) ? label : quote(label)}}`);
  }

  async function renderRichResponse(container, text) {
    const negativeDiagnosis = /^#\s+DIAGNÓSTICO ARQUITECTÓNICO NEGATIVO\s*$/im.test(text);
    container.closest(".message")?.classList.toggle("negative-diagnosis", negativeDiagnosis);
    if (!window.marked || !window.DOMPurify) { container.textContent = text; return; }
    const html = window.marked.parse(text, { gfm: true, breaks: true });
    container.innerHTML = window.DOMPurify.sanitize(html, {
      USE_PROFILES: { html: true },
      FORBID_TAGS: ["style", "form", "input", "button", "iframe", "object", "embed"],
      FORBID_ATTR: ["style", "srcset"],
    });
    const diagramCodes = [...container.querySelectorAll("pre > code.language-mermaid")];
    if (diagramCodes.length) ensureMermaid();
    for (const code of diagramCodes) {
      const source = code.textContent.trim();
      const shell = document.createElement("figure");
      shell.className = "diagram-shell";
      const diagram = document.createElement("div");
      diagram.className = "mermaid";
      diagram.textContent = normalizeMermaid(source);
      const caption = document.createElement("figcaption");
      caption.textContent = "Diagrama generado por PDAEH Advisor";
      shell.append(diagram, caption);
      code.parentElement.replaceWith(shell);
      try {
        const renderPromise = window.mermaid.run({ nodes: [diagram], suppressErrors: false });
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout renderizando diagrama")), 3000));
        await Promise.race([renderPromise, timeoutPromise]);
        const svg = diagram.querySelector("svg");
        if (svg) { svg.removeAttribute("height"); svg.setAttribute("role", "img"); svg.setAttribute("aria-label", caption.textContent); }
      } catch (error) {
        shell.classList.add("diagram-error");
        diagram.replaceChildren();
        const notice = document.createElement("p");
        notice.textContent = "No fue posible representar este diagrama; se conserva su definición técnica.";
        const fallback = document.createElement("pre");
        fallback.textContent = source;
        diagram.append(notice, fallback);
        console.warn("Mermaid render failed", error?.message || error);
      }
    }
    container.querySelectorAll("a").forEach((link) => { link.target = "_blank"; link.rel = "noopener noreferrer"; });
  }

  function setBusy(busy) {
    messages.setAttribute("aria-busy", String(busy));
    chatInput.disabled = busy || !started;
    sendButton.disabled = busy || !started;
    checkFormValidity();
  }

  function parseEventBlock(block) {
    let event = "message";
    const data = [];
    for (const line of block.split(/\r?\n/)) {
      if (line.startsWith("event:")) event = line.slice(6).trim();
      else if (line.startsWith("data:")) data.push(line.slice(5).trimStart());
    }
    if (!data.length) return null;
    try { return { event, data: JSON.parse(data.join("\n")) }; } catch { return null; }
  }

  async function consumeAdvisorStream(response, onEvent) {
    if (!response.body) throw new Error("El navegador no pudo abrir el flujo de respuesta.");
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    while (true) {
      const { value, done } = await reader.read();
      buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
      const blocks = buffer.split(/\r?\n\r?\n/);
      buffer = blocks.pop() || "";
      for (const block of blocks) {
        const parsed = parseEventBlock(block);
        if (parsed) onEvent(parsed);
      }
      if (done) break;
    }
    if (buffer.trim()) { const parsed = parseEventBlock(buffer); if (parsed) onEvent(parsed); }
  }

  async function askAdvisor(content, displayText = null) {
    if (!securityReady || !turnstileToken) { errorMessage.textContent = "Complete la verificación anti-bot antes de consultar el Advisor."; return; }
    errorMessage.textContent = "";
    addUserMessage(displayText || content);
    setBusy(true);
    const streamMessage = createStreamingMessage();
    let text = "";
    let streamError = "";
    let lastScrollTime = 0;
    try {
      const response = await fetch("/api/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-PDAEH-Client": "web-v1", Accept: "text/event-stream" },
        credentials: "same-origin",
        body: JSON.stringify({ messages: [{ role: "user", content }], previousResponseId, turnstileToken }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "No fue posible consultar el agente.");
      }
      await consumeAdvisorStream(response, ({ event, data }) => {
        if (event === "delta") {
          text += data.delta || "";
          streamMessage.output.textContent = text;
          const now = Date.now();
          if (now - lastScrollTime > 80) {
            messages.scrollTop = messages.scrollHeight;
            lastScrollTime = now;
          }
        } else if (event === "done") previousResponseId = data.id || previousResponseId;
        else if (event === "error") streamError = data.error || "El agente no pudo completar la respuesta.";
      });
      messages.scrollTop = messages.scrollHeight;
      if (streamError) throw new Error(streamError);
      if (!text.trim()) throw new Error("El agente no produjo contenido textual.");
      streamMessage.article.classList.remove("streaming");
      streamMessage.output.removeAttribute("role");
      streamMessage.output.removeAttribute("aria-label");
      await renderRichResponse(streamMessage.output, text);
    } catch (error) {
      if (streamMessage && !text.trim()) streamMessage.article.remove();
      else streamMessage?.article.classList.remove("streaming");
      errorMessage.textContent = error.message;
    } finally {
      turnstileToken = "";
      securityReady = false;
      if (window.turnstile && turnstileWidgetId !== null) window.turnstile.reset(turnstileWidgetId);
      securityStatus.textContent = "Complete una nueva verificación anti-bot para realizar otra consulta.";
      setBusy(false);
      chatInput.focus();
    }
  }

  const startDiagnosisBtn = document.querySelector("#startDiagnosisBtn") || profileForm.querySelector("button");
  const orgSizeEl = document.querySelector("#orgSize");
  const coreProblemEl = document.querySelector("#coreProblem");
  const asIsEl = document.querySelector("#asIs");
  const maturityEl = document.querySelector("#maturity");

  function checkFormValidity() {
    const isComplete = Boolean(
      orgSizeEl.value.trim() &&
      coreProblemEl.value.trim() &&
      asIsEl.value.trim() &&
      maturityEl.value.trim()
    );
    startDiagnosisBtn.disabled = busy || !isComplete;
  }

  [orgSizeEl, coreProblemEl, asIsEl, maturityEl].forEach((el) => {
    el.addEventListener("input", checkFormValidity);
    el.addEventListener("change", checkFormValidity);
  });
  checkFormValidity();

  profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    started = true;
    chatInput.disabled = false;
    sendButton.disabled = false;
    const orgSize = document.querySelector("#orgSize").value;
    const coreProblem = document.querySelector("#coreProblem").value.trim();
    const asIs = document.querySelector("#asIs").value.trim();
    const maturity = document.querySelector("#maturity").value;

    const profile = [
      "Solicito iniciar un diagnóstico PDAEH con el siguiente contexto confirmado:",
      `ORG_SIZE: ${orgSize}`,
      `CORE_PROBLEM: ${coreProblem}`,
      `AS_IS_TECH_STACK: ${asIs}`,
      `QUANTUM_MATURITY: ${maturity}`,
      "Emite el diagnóstico definitivo con estas cuatro variables. No solicites campos ni información adicionales; declara como supuestos los vacíos que condicionen el dictamen.",
    ].join("\n\n");

    const userFacingSummary = [
      `Solicitud de diagnóstico PDAEH para organización de tamaño ${orgSize}.`,
      `Problema o caso de negocio: ${coreProblem}`,
      `Arquitectura y stack tecnológico actual: ${asIs}`,
      `Nivel de madurez cuántica: ${maturity}.`
    ].join("\n\n");

    askAdvisor(profile, userFacingSummary);
  });

  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const content = chatInput.value.trim();
    if (!content) return;
    chatInput.value = "";
    askAdvisor(content);
  });

  newConversation.addEventListener("click", () => {
    previousResponseId = null;
    started = false;
    profileForm.reset();
    chatInput.value = "";
    chatInput.disabled = true;
    sendButton.disabled = true;
    errorMessage.textContent = "";
    messages.innerHTML = '<article class="message assistant"><div class="avatar" aria-hidden="true">P</div><div class="bubble"><p>Complete el perfil organizacional para iniciar un nuevo diagnóstico.</p></div></article>';
  });

  initializeSecurity();
})();
