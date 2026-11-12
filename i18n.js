// i18n.js - Comprehensive Multilingual Controller for PDAEH Portal and Agent Simulator
// Provides persistent, instant language switching (ES, EN, FR) without infinite reload loops.

(function() {
  const supportedLangs = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' }
  ];

  function getSavedLang() {
    return localStorage.getItem('pdaeh_user_lang') || 'es';
  }

  function setSavedLang(lang) {
    localStorage.setItem('pdaeh_user_lang', lang);
  }

  window.PDAEH_I18N = {
    getLang: getSavedLang,
    setLang: function(lang) {
      setSavedLang(lang);
      updateActiveBtn(lang);
      window.dispatchEvent(new CustomEvent('pdaeh:languageChanged', { detail: { lang: lang } }));
      applyStaticTranslations(lang);
    }
  };

  window.PDAEH_SET_LANG = window.PDAEH_I18N.setLang;

  function updateActiveBtn(activeCode) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const code = btn.getAttribute('data-lang');
      if (code === activeCode) {
        btn.classList.add('active');
        btn.style.background = 'var(--navy)';
        btn.style.color = '#ffffff';
        btn.style.borderColor = 'var(--navy)';
      } else {
        btn.classList.remove('active');
        btn.style.background = '#ffffff';
        btn.style.color = 'var(--ink)';
        btn.style.borderColor = 'var(--line)';
      }
    });
  }

  // Dictionary of UI elements to translate directly in DOM without external iframes
  const dict = {
    es: {
      "Entradas del caso organizacional (Variables As-Is)": "Entradas del caso organizacional (Variables As-Is)",
      "Organizational case inputs (As-Is variables)": "Entradas del caso organizacional (Variables As-Is)",
      "Tamaño de la empresa:": "Tamaño de la empresa:",
      "Company size:": "Tamaño de la empresa:",
      "Taille de l'entreprise :": "Tamaño de la empresa:",
      "Descripción detallada del caso de uso / Problema de negocio:": "Descripción detallada del caso de uso / Problema de negocio:",
      "Detailed description of the use case / business problem:": "Descripción detallada del caso de uso / Problema de negocio:",
      "Arquitectura clásica actual detallada (Stack As-Is e infraestructura):": "Arquitectura clásica actual detallada (Stack As-Is e infraestructura):",
      "Detailed current classical architecture (As-Is Stack and infrastructure):": "Arquitectura clásica actual detallada (Stack As-Is e infraestructura):",
      "Permite ingresar descripciones extensas del problema de negocio para evaluar la pertinencia cuántica.": "Permite ingresar descripciones extensas del problema de negocio para evaluar la pertinencia cuántica.",
      "Especifique el entorno tecnológico actual, nube, servicios o esquemas on-premise existentes.": "Especifique el entorno tecnológico actual, nube, servicios o esquemas on-premise existentes.",
      "Ejecutar diagnóstico": "Ejecutar diagnóstico",
      "Run diagnosis": "Ejecutar diagnóstico",
      "Exécuter le diagnostic": "Ejecutar diagnóstico",
      "Gobernado por la especificación formal del proceso PDAEH (v1.0.0-PROD)": "Gobernado por la especificación formal del proceso PDAEH (v1.0.0-PROD)",
      "Generación incremental en tiempo real": "Generación incremental en tiempo real",
      "Salida estructurada del Agente Consultor PDAEH": "Salida estructurada del Agente Consultor PDAEH",
      "En espera de ejecución": "En espera de ejecución",
      "Buscar": "Buscar"
    },
    en: {
      "Entradas del caso organizacional (Variables As-Is)": "Organizational case inputs (As-Is variables)",
      "Organizational case inputs (As-Is variables)": "Organizational case inputs (As-Is variables)",
      "Tamaño de la empresa:": "Company size:",
      "Company size:": "Company size:",
      "Taille de l'entreprise :": "Company size:",
      "Descripción detallada del caso de uso / Problema de negocio:": "Detailed description of the use case / business problem:",
      "Detailed description of the use case / business problem:": "Detailed description of the use case / business problem:",
      "Arquitectura clásica actual detallada (Stack As-Is e infraestructura):": "Detailed current classical architecture (As-Is Stack and infrastructure):",
      "Detailed current classical architecture (As-Is Stack and infrastructure):": "Detailed current classical architecture (As-Is Stack and infrastructure):",
      "Permite ingresar descripciones extensas del problema de negocio para evaluar la pertinencia cuántica.": "Allows you to enter extensive descriptions of the business problem to assess quantum relevance.",
      "Especifique el entorno tecnológico actual, nube, servicios o esquemas on-premise existentes.": "Specify the current technology environment, cloud, services, or existing on-premise schemes.",
      "Ejecutar diagnóstico": "Run diagnosis",
      "Run diagnosis": "Run diagnosis",
      "Exécuter le diagnostic": "Run diagnosis",
      "Gobernado por la especificación formal del proceso PDAEH (v1.0.0-PROD)": "Governed by the formal PDAEH process specification (v1.0.0-PROD)",
      "Generación incremental en tiempo real": "Incremental real-time generation",
      "Salida estructurada del Agente Consultor PDAEH": "Structured output of the PDAEH Consultant Agent",
      "En espera de ejecución": "Awaiting execution",
      "Buscar": "Search"
    },
    fr: {
      "Entradas del caso organizacional (Variables As-Is)": "Entrées du cas organisationnel (variables As-Is)",
      "Organizational case inputs (As-Is variables)": "Entrées du cas organisationnel (variables As-Is)",
      "Tamaño de la empresa:": "Taille de l'entreprise :",
      "Company size:": "Taille de l'entreprise :",
      "Taille de l'entreprise :": "Taille de l'entreprise :",
      "Descripción detallada del caso de uso / Problema de negocio:": "Description détaillée du cas d'usage / problème métier :",
      "Detailed description of the use case / business problem:": "Description détaillée du cas d'usage / problème métier :",
      "Arquitectura clásica actual detallada (Stack As-Is e infraestructura):": "Architecture classique actuelle détaillée (Stack As-Is et infrastructure) :",
      "Detailed current classical architecture (As-Is Stack and infrastructure):": "Architecture classique actuelle détaillée (Stack As-Is et infrastructure) :",
      "Permite ingresar descripciones extensas del problema de negocio para evaluar la pertinencia cuántica.": "Permet de saisir des descriptions détaillées pour évaluer la pertinence quantique.",
      "Especifique el entorno tecnológico actual, nube, servicios o esquemas on-premise existentes.": "Spécifiez l'environnement technologique actuel, le cloud ou les services sur site existants.",
      "Ejecutar diagnóstico": "Exécuter le diagnostic",
      "Run diagnosis": "Exécuter le diagnostic",
      "Exécuter le diagnostic": "Exécuter le diagnostic",
      "Gobernado por la especificación formal del proceso PDAEH (v1.0.0-PROD)": "Régie par la spécification formelle du processus PDAEH (v1.0.0-PROD)",
      "Generación incremental en tiempo real": "Génération incrémentale en temps réel",
      "Salida estructurada del Agente Consultor PDAEH": "Sortie structurée de l'agent consultant PDAEH",
      "En espera de ejecución": "En attente d'exécution",
      "Buscar": "Rechercher"
    }
  };

  function applyStaticTranslations(lang) {
    const d = dict[lang];
    if (!d) return;

    document.querySelectorAll('label, h3, button span, small').forEach(el => {
      const txt = el.textContent.trim();
      for (const [k, v] of Object.entries(d)) {
        if (txt === k || (txt.length > 5 && txt.includes(k))) {
          el.textContent = v;
          break;
        }
      }
    });

    // Also update options of #demoOrgSize
    const selectSize = document.getElementById('demoOrgSize');
    if (selectSize) {
      const optMap = {
        es: [
          "Pequeña y mediana empresa (PYME) · Caso FinNova (JIISIC 2026)",
          "Microempresa o startup (< 20 colaboradores)",
          "Gran empresa o corporación (> 200 colaboradores)",
          "Caso Inadecuado / Fuera de alcance"
        ],
        en: [
          "Small and medium-sized enterprises (SMEs) · FinNova case (JIISIC 2026)",
          "Micro-enterprise or startup (< 20 employees)",
          "Large enterprise or corporation (> 200 employees)",
          "Inappropriate case / Outside quantum scope"
        ],
        fr: [
          "Petites et moyennes entreprises (PME) · Cas FinNova (JIISIC 2026)",
          "Micro-entreprise ou startup (< 20 employés)",
          "Grande entreprise ou corporation (> 200 employés)",
          "Cas inapproprié / Hors de portée quantique"
        ]
      };
      const texts = optMap[lang] || optMap.es;
      for (let i = 0; i < selectSize.options.length; i++) {
        if (texts[i]) selectSize.options[i].text = texts[i];
      }
    }
  }

  function renderLanguageSwitcher() {
    const style = document.createElement('style');
    style.innerHTML = `
      .lang-switcher-container {
        display: inline-flex;
        align-items: center;
        background: #f1f5f4;
        padding: 2px 4px;
        border-radius: 20px;
        border: 1px solid var(--line);
        margin: 0 0.5rem;
        gap: 2px;
      }
      .lang-btn {
        background: #ffffff;
        border: 1px solid transparent;
        padding: 3px 8px;
        border-radius: 14px;
        font-size: 0.76rem;
        font-weight: 700;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 3px;
        transition: all 0.2s ease;
        line-height: 1.2;
        color: var(--ink);
      }
      .lang-btn:hover {
        background: #e2e8f0;
      }
      .lang-btn.active {
        background: var(--navy);
        color: #ffffff;
        border-color: var(--navy);
      }
    `;
    document.head.appendChild(style);

    const container = document.createElement('div');
    container.className = 'lang-switcher-container';
    container.setAttribute('aria-label', 'Selección de idioma / Language selector');

    const currentSaved = getSavedLang();

    supportedLangs.forEach(lang => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lang-btn' + (lang.code === currentSaved ? ' active' : '');
      btn.setAttribute('data-lang', lang.code);
      btn.title = lang.label;
      btn.innerHTML = `<span style="font-size:0.9rem;">${lang.flag}</span> <span>${lang.code.toUpperCase()}</span>`;
      btn.onclick = () => window.PDAEH_I18N.setLang(lang.code);
      container.appendChild(btn);
    });

    const topbar = document.querySelector('.topbar');
    if (topbar) {
      const searchBtn = topbar.querySelector('.search-trigger') || topbar.querySelector('.print-button');
      if (searchBtn) {
        topbar.insertBefore(container, searchBtn);
      } else {
        topbar.appendChild(container);
      }
    }

    updateActiveBtn(currentSaved);
    applyStaticTranslations(currentSaved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderLanguageSwitcher);
  } else {
    renderLanguageSwitcher();
  }
})();
