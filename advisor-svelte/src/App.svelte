<script>
  import { onMount, tick } from 'svelte';
  import { marked } from 'marked';
  import DOMPurify from 'dompurify';
  import mermaid from 'mermaid';

  // --- Estado del formulario ---
  let orgSize = "PYME";
  let coreProblem = "Empresa de referencia FinNova: Empresa mediana de servicios financieros (PYME) especializada en gestión de inversiones y análisis de carteras para clientes institucionales y profesionales. La firma busca incorporar capacidad de optimización cuántica asistida para problemas complejos de rebalanceo dinámico de portafolio y optimización combinatoria multiobjetivo bajo restricciones de riesgo (CVaR), preservando el control clásico integral sobre datos financieros, reglas de negocio, cumplimiento normativo y cálculo de riesgo fáctico.";
  let asIs = "Plataforma analítica clásica establecida (As-Is): Servicios de datos de mercado (Market Data Services), servicios de gestión de portafolios (Portfolio Services), motor de análisis y riesgo financiero (Risk & Analytics Services), servicios de cumplimiento normativo (Compliance Services) y generación de reportes (Reporting Services), desplegados en arquitectura de microservicios sobre clúster en la nube privada con bases de datos relacionales (PostgreSQL), series temporales (TimescaleDB) y Redis en memoria con colas Apache Kafka.";
  let maturity = "Nivel 1 — Exploratorio";

  let activePreset = "finnova";
  let chatInput = "";
  let isBusy = false;
  let started = false;
  let errorMessage = "";
  let previousResponseId = null;
  let messagesContainer;

  // Lista reactiva de mensajes: { role: 'assistant' | 'user', content: string, streaming: boolean }
  let messagesList = [
    {
      role: 'assistant',
      content: 'Complete el perfil organizacional o seleccione uno de los escenarios de referencia para iniciar la evaluación metodológica PDAEH.',
      streaming: false
    }
  ];

  const SCENARIO_PRESETS = {
    finnova: {
      orgSize: "PYME",
      maturity: "Nivel 1 — Exploratorio",
      coreProblem: "Empresa de referencia FinNova: Empresa mediana de servicios financieros (PYME) especializada en gestión de inversiones y análisis de carteras para clientes institucionales y profesionales. La firma busca incorporar capacidad de optimización cuántica asistida para problemas complejos de rebalanceo dinámico de portafolio y optimización combinatoria multiobjetivo bajo restricciones de riesgo (CVaR), preservando el control clásico integral sobre datos financieros, reglas de negocio, cumplimiento normativo y cálculo de riesgo fáctico.",
      asIs: "Plataforma analítica clásica establecida (As-Is): Servicios de datos de mercado (Market Data Services), servicios de gestión de portafolios (Portfolio Services), motor de análisis y riesgo financiero (Risk & Analytics Services), servicios de cumplimiento normativo (Compliance Services) y generación de reportes (Reporting Services), desplegados en arquitectura de microservicios sobre clúster en la nube privada con bases de datos relacionales (PostgreSQL), series temporales (TimescaleDB) y Redis en memoria con colas Apache Kafka."
    },
    logistech: {
      orgSize: "Gran Empresa",
      maturity: "Nivel 2 — Pilotos NISQ",
      coreProblem: "Optimización de rutas de distribución de última milla y asignación de flota (CVRPTW) con más de 2.000 nodos y ventanas horarias estrictas. Crecimiento factorial del espacio de combinaciones que satura los solvers de optimización lineal clásicos en horas pico.",
      asIs: "Arquitectura de microservicios en Java Spring Boot, Apache Spark para analítica geoespacial, PostgreSQL y colas RabbitMQ desplegadas en clúster Kubernetes multirregión."
    },
    crud: {
      orgSize: "PYME",
      maturity: "Nivel 0 — Nulo",
      coreProblem: "Sistema de gestión comercial y facturación electrónica (CRUD) con emisión de reportes contables mensuales y catálogo web para 150 usuarios concurrentes.",
      asIs: "Stack LAMP tradicional con PHP 8.2, base de datos MySQL relacional y servidor Apache en máquina virtual en la nube."
    },
    pqc: {
      orgSize: "Gran Empresa",
      maturity: "Nivel 1 — Exploratorio",
      coreProblem: "Plan de contingencia y transición hacia Criptografía Post-Cuántica (PQC) para proteger la pasarela de pagos interbancarios contra la amenaza Harvest Now, Decrypt Later.",
      asIs: "Infraestructura PKI corporativa con certificados X.509 basados en RSA 2048 y curvas elípticas ECDSA, expuestos mediante API Gateways Envoy."
    }
  };

  onMount(() => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
      theme: 'neutral',
      flowchart: { htmlLabels: true, useMaxWidth: true }
    });
  });

  function selectPreset(key) {
    activePreset = key;
    const p = SCENARIO_PRESETS[key];
    if (p) {
      orgSize = p.orgSize;
      coreProblem = p.coreProblem;
      asIs = p.asIs;
      maturity = p.maturity;
    }
  }

  const calloutMap = {
    note: { label: "NOTA", cls: "callout-note" },
    tip: { label: "CONSEJO", cls: "callout-note" },
    important: { label: "IMPORTANTE", cls: "callout-important" },
    importante: { label: "IMPORTANTE", cls: "callout-important" },
    warning: { label: "ADVERTENCIA", cls: "callout-warning" },
    advertencia: { label: "ADVERTENCIA", cls: "callout-warning" },
    caution: { label: "PRECAUCIÓN", cls: "callout-warning" },
    precaución: { label: "PRECAUCIÓN", cls: "callout-warning" },
    precaucion: { label: "PRECAUCIÓN", cls: "callout-warning" }
  };

  function renderMarkdownSafe(rawText) {
    if (!rawText) return "";
    let sanitized = rawText
      .replace(/\s*\((?:ORG_SIZE|CORE_PROBLEM|AS_IS_TECH_STACK|QUANTUM_MATURITY)\)/gi, "")
      .replace(/\b(?:ORG_SIZE|CORE_PROBLEM|AS_IS_TECH_STACK|QUANTUM_MATURITY):\s*/gi, "")
      .replace(/\n{3,}/g, "\n\n");

    let html = marked.parse(sanitized, { gfm: true, breaks: false });

    html = html.replace(/<blockquote>\s*<p>\[!(NOTE|TIP|IMPORTANT|IMPORTANTE|WARNING|ADVERTENCIA|CAUTION|PRECAUCI[ÓO]N)\]\s*(?:<br>|\n)?/gi, (m, type) => {
      const info = calloutMap[type.toLowerCase()] || { label: "IMPORTANTE", cls: "callout-important" };
      return `<blockquote class="callout ${info.cls}"><p><strong>${info.label}:</strong> `;
    });

    html = html.replace(/<blockquote>\s*<p>(?:<strong>)?(IMPORTANT|IMPORTANTE|WARNING|ADVERTENCIA|NOTE|NOTA|CAUTION|PRECAUCI[ÓO]N):?(?:<\/strong>)?:?\s*(?:<br>|\n)?/gi, (m, type) => {
      const info = calloutMap[type.toLowerCase()] || { label: "IMPORTANTE", cls: "callout-important" };
      return `<blockquote class="callout ${info.cls}"><p><strong>${info.label}:</strong> `;
    });

    return DOMPurify.sanitize(html, {
      USE_PROFILES: { html: true },
      FORBID_TAGS: ["style", "form", "input", "button", "iframe", "object", "embed"],
      FORBID_ATTR: ["style", "srcset"]
    });
  }

  async function postRenderMermaid() {
    await tick();
    const codes = messagesContainer?.querySelectorAll('pre > code.language-mermaid') || [];
    for (const code of codes) {
      const src = code.textContent.trim();
      const figure = document.createElement('figure');
      figure.className = 'diagram-shell';
      const div = document.createElement('div');
      div.className = 'mermaid';
      div.textContent = src;
      const caption = document.createElement('figcaption');
      caption.textContent = 'Diagrama generado por PDAEH Advisor';
      figure.append(div, caption);
      code.parentElement.replaceWith(figure);
      try {
        await mermaid.run({ nodes: [div] });
      } catch (e) {
        console.warn('Mermaid render warning:', e);
      }
    }
  }

  async function askAdvisor(content, displayText = null) {
    errorMessage = "";
    isBusy = true;
    started = true;

    // Agregar mensaje del usuario
    messagesList = [...messagesList, { role: 'user', content: displayText || content, streaming: false }];

    // Crear slot para respuesta del asistente
    const assistantIndex = messagesList.length;
    messagesList = [...messagesList, { role: 'assistant', content: '', streaming: true }];

    await tick();
    scrollToBottom();

    let textBuffer = "";
    let lastRender = 0;

    try {
      const response = await fetch("/api/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-PDAEH-Client": "svelte-v1", "Accept": "text/event-stream" },
        body: JSON.stringify({ messages: [{ role: "user", content }], previousResponseId, turnstileToken: "active" })
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || "No fue posible conectar con el agente.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let streamBuf = "";

      while (true) {
        const { value, done } = await reader.read();
        streamBuf += decoder.decode(value || new Uint8Array(), { stream: !done });
        const blocks = streamBuf.split(/\r?\n\r?\n/);
        streamBuf = blocks.pop() || "";

        for (const block of blocks) {
          let event = "message";
          const dataLines = [];
          for (const line of block.split(/\r?\n/)) {
            if (line.startsWith("event:")) event = line.slice(6).trim();
            else if (line.startsWith("data:")) dataLines.push(line.slice(5).trimStart());
          }
          if (!dataLines.length) continue;
          try {
            const data = JSON.parse(dataLines.join("\n"));
            if (event === "delta") {
              textBuffer += data.delta || "";
              const now = Date.now();
              if (now - lastRender > 100) {
                lastRender = now;
                messagesList[assistantIndex].content = textBuffer;
                messagesList = messagesList;
                scrollToBottom();
              }
            } else if (event === "done") {
              previousResponseId = data.id || previousResponseId;
            } else if (event === "error") {
              throw new Error(data.error || "Error en el flujo");
            }
          } catch (e) {
            if (e.message !== "Unexpected end of JSON input") console.warn(e);
          }
        }
        if (done) break;
      }

      messagesList[assistantIndex].content = textBuffer;
      messagesList[assistantIndex].streaming = false;
      messagesList = messagesList;
      await postRenderMermaid();
      scrollToBottom();
    } catch (err) {
      errorMessage = err.message || "Error al procesar la solicitud.";
      if (!textBuffer) {
        messagesList = messagesList.filter((_, i) => i !== assistantIndex);
      } else {
        messagesList[assistantIndex].streaming = false;
      }
    } finally {
      isBusy = false;
    }
  }

  function handleProfileSubmit() {
    const profile = [
      "Solicito iniciar un diagnóstico PDAEH con el siguiente contexto confirmado:",
      `ORG_SIZE: ${orgSize}`,
      `CORE_PROBLEM: ${coreProblem.trim()}`,
      `AS_IS_TECH_STACK: ${asIs.trim()}`,
      `QUANTUM_MATURITY: ${maturity}`,
      "Emite el diagnóstico definitivo con estas cuatro variables. No solicites campos ni información adicionales; declara como supuestos los vacíos que condicionen el dictamen.",
    ].join("\n\n");

    const userFacingSummary = [
      `Solicitud de diagnóstico PDAEH para organización de tamaño ${orgSize}.`,
      `Problema o caso de negocio: ${coreProblem.trim()}`,
      `Arquitectura y stack tecnológico actual: ${asIs.trim()}`,
      `Nivel de madurez cuántica: ${maturity}.`
    ].join("\n\n");

    askAdvisor(profile, userFacingSummary);
  }

  function handleChatSubmit() {
    const q = chatInput.trim();
    if (!q || isBusy) return;
    chatInput = "";
    askAdvisor(q);
  }

  function handleFollowUp(query) {
    if (!isBusy) askAdvisor(query);
  }

  function resetConversation() {
    previousResponseId = null;
    started = false;
    errorMessage = "";
    chatInput = "";
    messagesList = [
      {
        role: 'assistant',
        content: 'Complete el perfil organizacional o seleccione uno de los escenarios de referencia para iniciar la evaluación metodológica PDAEH.',
        streaming: false
      }
    ];
  }

  function exportMarkdown() {
    const last = messagesList.filter(m => m.role === 'assistant').pop();
    if (!last || !last.content || last.content.length < 50) {
      alert("Aún no se ha generado un dictamen para exportar.");
      return;
    }
    const blob = new Blob([last.content], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `dictamen-pdaeh-${Date.now()}.md`;
    document.body.append(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function scrollToBottom() {
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }
</script>

<header class="topbar">
  <a class="brand" href="./index.html">
    <span>P</span>
    <strong>PDAEH</strong>
    <small>Advisor v2.0 (Svelte Core)</small>
  </a>
  <a class="portal-link" href="https://corozco-personal.github.io/pdaeh-tesis-doctoral/" target="_blank" rel="noopener noreferrer">
    Ir al marco metodológico completo ↗
  </a>
</header>

<main>
  <!-- Panel Izquierdo: Configuración del Perfil -->
  <aside class="context-panel" aria-labelledby="contextTitle">
    <p class="eyebrow">Agente metodológico de alta velocidad</p>
    <h1 id="contextTitle">Diagnóstico PDAEH reactivo y ultra-fluido</h1>
    <p class="lead">
      El motor del Advisor corre sobre Svelte compilado sin sobrecarga de Virtual DOM, eliminando por completo trabas, congelamientos y latencias de renderizado.
    </p>

    <!-- Escenarios 1-Clic -->
    <div class="preset-selector-box">
      <label><strong>Escenarios de referencia (1-Clic):</strong></label>
      <div class="preset-chips" role="group">
        <button type="button" class="preset-chip" class:active={activePreset === 'finnova'} on:click={() => selectPreset('finnova')}>
          <strong>FinNova (PYME)</strong>
          <span>Portafolios & QAOA (Viable)</span>
        </button>
        <button type="button" class="preset-chip" class:active={activePreset === 'logistech'} on:click={() => selectPreset('logistech')}>
          <strong>LogisTech (Grande)</strong>
          <span>Ruteo CVRP & Recocido (Viable)</span>
        </button>
        <button type="button" class="preset-chip" class:active={activePreset === 'crud'} on:click={() => selectPreset('crud')}>
          <strong>Tienda CRUD (PYME)</strong>
          <span>Transaccional (Rechazo OGA-1)</span>
        </button>
        <button type="button" class="preset-chip" class:active={activePreset === 'pqc'} on:click={() => selectPreset('pqc')}>
          <strong>SecurNet (Ciberseguridad)</strong>
          <span>Migración PQC NIST (Viable)</span>
        </button>
      </div>
    </div>

    <form on:submit|preventDefault={handleProfileSubmit}>
      <label for="orgSize">Tamaño de la organización <span class="req">*</span></label>
      <select id="orgSize" bind:value={orgSize} required>
        <option>Startup</option>
        <option>PYME</option>
        <option>Gran Empresa</option>
      </select>

      <label for="coreProblem">Problema o caso de uso <span class="req">*</span></label>
      <textarea id="coreProblem" bind:value={coreProblem} rows="5" required></textarea>

      <label for="asIs">Arquitectura actual (As-Is) <span class="req">*</span></label>
      <textarea id="asIs" bind:value={asIs} rows="5" required></textarea>

      <label for="maturity">Madurez cuántica <span class="req">*</span></label>
      <select id="maturity" bind:value={maturity} required>
        <option value="Nivel 0 — Nulo">Nivel 0 — Nulo</option>
        <option value="Nivel 1 — Exploratorio">Nivel 1 — Exploratorio</option>
        <option value="Nivel 2 — Pilotos NISQ">Nivel 2 — Pilotos NISQ</option>
        <option value="Nivel 3 — Producción híbrida">Nivel 3 — Producción híbrida</option>
      </select>

      <button class="primary action-with-icon" type="submit" disabled={isBusy}>
        <svg viewBox="0 0 24 24" aria-hidden="true" style="width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;"><path d="M12 3a9 9 0 1 0 9 9M12 7v5l3 2M17 3h4v4M21 3l-5 5"/></svg>
        <span>{isBusy ? 'Evaluando caso...' : 'Iniciar diagnóstico'}</span>
      </button>
    </form>

    <div class="method-note">
      <strong>Contrato metodológico:</strong> 5 fases, 10 elementos, 15 artefactos y 5 compuertas OGA. Svelte Core garantiza actualización de 60 FPS sin reflows pesados.
    </div>
  </aside>

  <!-- Panel Derecho: Conversación y Dictamen -->
  <section class="chat-panel" aria-labelledby="chatTitle">
    <header class="chat-header">
      <div>
        <span class="status-dot" aria-hidden="true"></span>
        <div>
          <h2 id="chatTitle">Conversación con PDAEH Advisor</h2>
          <p>Motor reactivo de alto rendimiento (Svelte)</p>
        </div>
      </div>
      <div class="chat-actions-group">
        <button class="text-button action-with-icon" type="button" on:click={exportMarkdown} title="Descargar dictamen en Markdown">
          <svg viewBox="0 0 24 24" aria-hidden="true" style="width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          <span>Descargar Dictamen (.MD)</span>
        </button>
        <button class="text-button action-with-icon" type="button" on:click={resetConversation}>
          <svg viewBox="0 0 24 24" aria-hidden="true" style="width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;"><path d="M20 11a8 8 0 1 1-2.3-5.7L20 8M20 3v5h-5"/></svg>
          <span>Nueva conversación</span>
        </button>
      </div>
    </header>

    <div class="messages" bind:this={messagesContainer}>
      {#each messagesList as msg, i}
        <article class="message {msg.role}" class:streaming={msg.streaming}>
          <div class="avatar" aria-hidden="true">{msg.role === 'assistant' ? 'P' : 'U'}</div>
          <div class="bubble">
            {#if msg.role === 'user'}
              <p>{msg.content}</p>
            {:else}
              {@html renderMarkdownSafe(msg.content)}
              {#if msg.streaming}
                <span class="streaming-cursor">▊</span>
              {/if}

              <!-- Follow-up prompts en el último mensaje del asistente terminado -->
              {#if !msg.streaming && i === messagesList.length - 1 && started}
                <div class="follow-up-container">
                  <div class="follow-up-title">Preguntas recomendadas para profundizar:</div>
                  <div class="follow-up-chips">
                    <button type="button" class="follow-up-btn" on:click={() => handleFollowUp('¿Cómo redactar formalmente el artefacto DOE para este caso bajo el marco PDAEH?')}>
                      ¿Cómo redactar el artefacto DOE?
                    </button>
                    <button type="button" class="follow-up-btn" on:click={() => handleFollowUp('¿Qué criterios y métricas de error de lectura (ZNE/M3) deben evaluarse en la Fase 4 (BER)?')}>
                      Métricas de error en Fase 4 (BER)
                    </button>
                    <button type="button" class="follow-up-btn" on:click={() => handleFollowUp('¿Cómo estructurar el patrón Broker/Mediador con fallback clásico para la compuerta OGA-2?')}>
                      Patrón Broker y Fallback (OGA-2)
                    </button>
                    <button type="button" class="follow-up-btn" on:click={() => handleFollowUp('¿Cuáles son las fuentes y librerías oficiales (Qiskit Runtime / PennyLane) sugeridas para iniciar la experimentación?')}>
                      Librerías recomendadas (Qiskit/PennyLane)
                    </button>
                  </div>
                </div>
              {/if}
            {/if}
          </div>
        </article>
      {/each}
    </div>

    <form class="composer" on:submit|preventDefault={handleChatSubmit}>
      <label class="sr-only" for="chatInput">Mensaje para el Advisor</label>
      <textarea
        id="chatInput"
        bind:value={chatInput}
        rows="2"
        maxlength="12000"
        placeholder={started ? "Solicite profundizar en el diagnóstico o en una recomendación…" : "Inicie el diagnóstico completando el formulario de la izquierda"}
        disabled={!started || isBusy}
      ></textarea>
      <button class="action-with-icon" type="submit" disabled={!started || isBusy || !chatInput.trim()}>
        <svg viewBox="0 0 24 24" aria-hidden="true" style="width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;"><path d="m3 11 18-8-8 18-2-8-8-2Z M11 13l4-4"/></svg>
        <span>Enviar</span>
      </button>
    </form>

    {#if errorMessage}
      <p class="error" role="alert">{errorMessage}</p>
    {/if}
    <p class="privacy">
      No incluya contraseñas, claves de API ni secretos de infraestructura. Las respuestas son orientación metodológica y deben validarse mediante los puntos OGA.
    </p>
  </section>
</main>


<style>
  :global(#app) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: 'DM Sans', sans-serif;
  }

  .topbar {
    height: 72px;
    padding: 0 clamp(1rem, 4vw, 4rem);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--navy, #152b43);
    color: #fff;
    flex-shrink: 0;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    color: #fff;
    text-decoration: none;
  }

  .brand span {
    display: grid;
    place-items: center;
    width: 35px;
    height: 35px;
    border-radius: 4px;
    background: var(--green, #18796e);
    font-family: 'Newsreader', serif;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .brand small {
    color: rgba(255,255,255,0.7);
    font-size: 0.78rem;
    margin-left: 0.2rem;
  }

  .portal-link {
    color: #fff;
    text-underline-offset: 4px;
    font-size: 0.92rem;
    text-decoration: none;
    opacity: 0.9;
    transition: opacity 0.2s;
  }

  .portal-link:hover {
    opacity: 1;
    text-decoration: underline;
  }

  main {
    flex: 1 1 0;
    min-height: 0;
    display: grid;
    grid-template-columns: minmax(340px, 42%) minmax(0, 58%);
    overflow: hidden;
  }

  .context-panel {
    height: 100%;
    overflow-y: auto;
    padding: 1.5rem clamp(1.2rem, 2.5vw, 2.5rem);
    background: #f8faf9;
    border-right: 1px solid var(--line, #d8e1dd);
  }

  .eyebrow {
    margin: 0;
    color: var(--green, #18796e);
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .context-panel h1 {
    margin: 0.55rem 0 1rem;
    font: 600 clamp(1.8rem, 2.6vw, 2.8rem)/1.15 'Newsreader', serif;
    color: var(--navy, #152b43);
  }

  .lead {
    color: var(--muted, #66756f);
    line-height: 1.6;
    font-size: 0.92rem;
    margin-bottom: 1.5rem;
  }

  .preset-selector-box {
    margin-bottom: 1.4rem;
  }

  .preset-selector-box label {
    font-size: 0.82rem;
    color: var(--navy, #152b43);
    margin-bottom: 0.45rem;
    display: block;
  }

  .preset-chips {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  .preset-chip {
    text-align: left;
    padding: 0.55rem 0.75rem;
    border: 1px solid var(--line, #d8e1dd);
    border-radius: 6px;
    background: #fff;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    font-family: inherit;
  }

  .preset-chip:hover {
    border-color: var(--green, #18796e);
    background: #f0f7f5;
  }

  .preset-chip.active {
    border-color: var(--green, #18796e);
    background: #e7f3ef;
    box-shadow: 0 0 0 2px rgba(24,121,110,0.18);
  }

  .preset-chip strong {
    font-size: 0.82rem;
    color: var(--navy, #152b43);
  }

  .preset-chip span {
    font-size: 0.72rem;
    color: var(--muted, #66756f);
    line-height: 1.25;
  }

  label {
    display: block;
    margin: 1rem 0 0.42rem;
    font-weight: 700;
    font-size: 0.88rem;
    color: var(--ink, #1d2b39);
  }

  .req {
    color: #a53131;
    font-weight: 700;
    margin-left: 3px;
  }

  select, textarea {
    width: 100%;
    border: 1px solid #afbeb7;
    border-radius: 6px;
    padding: 0.75rem 0.85rem;
    background: #fff;
    color: var(--ink, #1d2b39);
    font: inherit;
    font-size: 0.88rem;
    line-height: 1.5;
    box-sizing: border-box;
  }

  select:focus, textarea:focus {
    outline: 3px solid rgba(24,121,110,.18);
    border-color: var(--green, #18796e);
  }

  .primary {
    width: 100%;
    margin-top: 1.25rem;
    padding: 0.85rem;
    border: 0;
    border-radius: 6px;
    background: var(--green, #18796e);
    color: #fff;
    font-weight: 700;
    font-family: inherit;
    font-size: 0.95rem;
    cursor: pointer;
    transition: background 0.15s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .primary:hover:not(:disabled) {
    background: #11695f;
  }

  .primary:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    background: #879893 !important;
  }

  .method-note {
    margin-top: 1.35rem;
    padding: 0.9rem 1rem;
    border-left: 4px solid #d5a92f;
    background: #fff9e8;
    color: #5b4b1e;
    font-size: 0.84rem;
    line-height: 1.55;
    border-radius: 0 6px 6px 0;
  }

  .chat-panel {
    height: 100%;
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow: hidden;
    background: #fff;
  }

  .chat-header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    padding: 1.1rem 1.6rem;
    border-bottom: 1px solid var(--line, #d8e1dd);
    flex-shrink: 0;
  }

  .chat-header > div:first-child {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  .chat-header h2 {
    margin: 0;
    font-size: 1rem;
    color: var(--navy, #152b43);
    font-weight: 700;
  }

  .chat-header p {
    margin: 0.15rem 0 0;
    color: var(--muted, #66756f);
    font-size: 0.78rem;
  }

  .status-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #2eae70;
    box-shadow: 0 0 0 5px #e3f6eb;
  }

  .chat-actions-group {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .text-button {
    border: 0;
    background: transparent;
    color: var(--green, #18796e);
    font-weight: 700;
    font-size: 0.85rem;
    cursor: pointer;
    padding: 0.4rem 0.6rem;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    transition: background 0.15s;
    font-family: inherit;
  }

  .text-button:hover {
    background: rgba(24,121,110,0.08);
  }

  .messages {
    flex: 1 1 0;
    min-height: 0;
    overflow-y: auto;
    padding: 1.4rem clamp(1rem, 3vw, 2.5rem);
    background: #fbfdfc;
  }

  .message {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    max-width: 900px;
    margin: 0 auto 1.4rem;
  }

  .message.user {
    flex-direction: row-reverse;
  }

  .avatar {
    flex: 0 0 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 6px;
    background: var(--navy, #152b43);
    color: #fff;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .message.user .avatar {
    background: var(--green, #18796e);
  }

  .bubble {
    max-width: min(92%, 800px);
    padding: 1.1rem 1.25rem;
    border-radius: 4px 14px 14px 14px;
    background: #f0f5f3;
    line-height: 1.6;
    overflow-wrap: anywhere;
    font-size: 0.92rem;
    color: var(--ink, #1d2b39);
  }

  .message.user .bubble {
    background: #e4eee9;
    border-radius: 14px 4px 14px 14px;
  }

  .bubble :global(h1) {
    font-size: 1.28rem !important;
    margin: 0.6rem 0 0.35rem !important;
    color: var(--navy, #152b43);
    font-family: 'Newsreader', serif;
  }

  .bubble :global(h2) {
    font-size: 1.15rem !important;
    margin: 0.6rem 0 0.3rem !important;
    color: var(--navy, #152b43);
    font-family: 'Newsreader', serif;
  }

  .bubble :global(h3) {
    font-size: 1.02rem !important;
    margin: 0.5rem 0 0.25rem !important;
    color: var(--navy, #152b43);
  }

  .bubble :global(p) {
    margin: 0 0 0.45rem !important;
  }

  .bubble :global(p:last-child) {
    margin-bottom: 0 !important;
  }

  .bubble :global(ul), .bubble :global(ol) {
    margin: 0.25rem 0 0.45rem !important;
    padding-left: 1.2rem !important;
  }

  .bubble :global(li) {
    margin-bottom: 0.18rem !important;
    line-height: 1.45 !important;
  }

  .bubble :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    font-size: 0.86rem;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--line, #d8e1dd);
  }

  .bubble :global(th) {
    background: #e7f0ec;
    color: var(--navy, #152b43);
    font-weight: 700;
    padding: 0.6rem 0.85rem;
    text-align: left;
    border-bottom: 2px solid var(--line, #d8e1dd);
  }

  .bubble :global(td) {
    padding: 0.55rem 0.85rem;
    border-bottom: 1px solid var(--line, #d8e1dd);
    vertical-align: top;
  }

  .bubble :global(blockquote) {
    margin: 0.8rem 0;
    padding: 0.7rem 1rem;
    border-left: 4px solid var(--green, #18796e);
    background: rgba(24,121,110,.07);
    border-radius: 0 8px 8px 0;
    font-size: 0.9rem;
  }

  .bubble :global(code) {
    background: #dfe8e4;
    padding: 0.12rem 0.35rem;
    border-radius: 3px;
    font-size: 0.86em;
  }

  .streaming-cursor {
    display: inline-block;
    color: var(--green, #18796e);
    margin-left: 2px;
    animation: blink 0.8s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .follow-up-container {
    margin-top: 1rem;
    padding-top: 0.85rem;
    border-top: 1px dashed rgba(24,121,110,0.3);
  }

  .follow-up-title {
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--navy, #152b43);
    margin-bottom: 0.45rem;
  }

  .follow-up-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .follow-up-btn {
    border: 1px solid var(--green, #18796e);
    background: #fff;
    color: var(--green, #18796e);
    font-size: 0.78rem;
    padding: 0.35rem 0.7rem;
    border-radius: 14px;
    cursor: pointer;
    transition: all 0.15s;
    font-family: inherit;
    font-weight: 600;
  }

  .follow-up-btn:hover {
    background: var(--green, #18796e);
    color: #fff;
  }

  .composer {
    flex-shrink: 0;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.7rem;
    margin: 0 clamp(1rem, 3vw, 2.5rem) 0.4rem;
    padding: 0.85rem 1rem;
    border: 1px solid var(--line, #d8e1dd);
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 4px 18px rgba(21,43,67,.08);
  }

  .composer textarea {
    border: 0;
    resize: none;
    padding: 0.2rem;
    font-size: 0.92rem;
  }

  .composer textarea:focus {
    outline: none;
  }

  .composer button {
    align-self: end;
    border: 0;
    border-radius: 6px;
    padding: 0.65rem 1.1rem;
    background: var(--navy, #152b43);
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    font-family: inherit;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    transition: background 0.15s;
  }

  .composer button:hover:not(:disabled) {
    background: #0f1f31;
  }

  .composer button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .privacy, .error {
    margin: 0.2rem clamp(1rem, 3vw, 2.5rem) 0.5rem;
    font-size: 0.76rem;
  }

  .privacy {
    color: var(--muted, #66756f);
  }

  .error {
    color: #a53131;
    font-weight: 700;
  }

  .action-with-icon {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: 900px) {
    main {
      grid-template-columns: 1fr;
      overflow-y: auto;
    }
    .context-panel {
      height: auto;
      border-right: 0;
      border-bottom: 1px solid var(--line, #d8e1dd);
    }
    .chat-panel {
      height: auto;
      min-height: 500px;
    }
  }
</style>
