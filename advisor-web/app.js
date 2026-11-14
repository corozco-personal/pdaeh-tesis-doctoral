(() => {
  const profileForm = document.querySelector("#profileForm");
  const chatForm = document.querySelector("#chatForm");
  const chatInput = document.querySelector("#chatInput");
  const sendButton = document.querySelector("#sendMessage");
  const messages = document.querySelector("#messages");
  const errorMessage = document.querySelector("#errorMessage");
  const newConversation = document.querySelector("#newConversation");
  let previousResponseId = null;
  let started = false;

  const escapeHtml = (value) => value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;",
  })[char]);

  function renderMarkdown(text) {
    const escaped = escapeHtml(text);
    return escaped
      .replace(/^### (.+)$/gm, "<h4>$1</h4>")
      .replace(/^## (.+)$/gm, "<h3>$1</h3>")
      .replace(/^# (.+)$/gm, "<h2>$1</h2>")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/^(?:- |\* )(.+)$/gm, "<div class=\"list-item\">• $1</div>")
      .replace(/^\d+\. (.+)$/gm, "<div class=\"list-item\">$1</div>")
      .replace(/\n{2,}/g, "</p><p>")
      .replace(/\n/g, "<br>");
  }

  function addMessage(role, text) {
    const article = document.createElement("article");
    article.className = `message ${role}`;
    article.innerHTML = `<div class="avatar" aria-hidden="true">${role === "assistant" ? "P" : "U"}</div><div class="bubble"><p>${role === "assistant" ? renderMarkdown(text) : escapeHtml(text)}</p></div>`;
    messages.append(article);
    article.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  function setBusy(busy) {
    messages.setAttribute("aria-busy", String(busy));
    chatInput.disabled = busy || !started;
    sendButton.disabled = busy || !started;
    profileForm.querySelector("button").disabled = busy;
    const pending = messages.querySelector(".pending");
    if (busy && !pending) {
      const article = document.createElement("article");
      article.className = "message assistant pending";
      article.innerHTML = '<div class="avatar" aria-hidden="true">P</div><div class="bubble"><span></span><span></span><span></span><em>Analizando el contexto…</em></div>';
      messages.append(article);
      article.scrollIntoView({ behavior: "smooth", block: "end" });
    } else if (!busy && pending) pending.remove();
  }

  async function askAdvisor(content) {
    errorMessage.textContent = "";
    addMessage("user", content);
    setBusy(true);
    try {
      const response = await fetch("/api/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [{ role: "user", content }], previousResponseId }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "No fue posible consultar el agente.");
      previousResponseId = data.id;
      addMessage("assistant", data.text);
    } catch (error) {
      errorMessage.textContent = error.message;
    } finally {
      setBusy(false);
      chatInput.focus();
    }
  }

  profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    started = true;
    chatInput.disabled = false;
    sendButton.disabled = false;
    const profile = [
      "Solicito iniciar un diagnóstico PDAEH con el siguiente contexto confirmado:",
      `ORG_SIZE: ${document.querySelector("#orgSize").value}`,
      `CORE_PROBLEM: ${document.querySelector("#coreProblem").value.trim()}`,
      `AS_IS_TECH_STACK: ${document.querySelector("#asIs").value.trim()}`,
      `QUANTUM_MATURITY: ${document.querySelector("#maturity").value}`,
      "Evalúa si la información es suficiente. Si falta contexto material, formula preguntas antes del diagnóstico definitivo.",
    ].join("\n\n");
    askAdvisor(profile);
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
})();
