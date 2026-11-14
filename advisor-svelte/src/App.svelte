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
