// i18n-translator.js - Client-side dynamic translation for PDAEH (ES, EN, FR)
// Uses Google Translate element API with a sleek language switcher UI and persistence.

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

  // Inject Google Translate script dynamically
  window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
      pageLanguage: 'es',
      includedLanguages: 'es,en,fr',
      autoDisplay: false,
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');

    // Apply saved language if not default
    const saved = getSavedLang();
    if (saved && saved !== 'es') {
      setTimeout(() => triggerTranslation(saved), 600);
    }
  };

  function loadGoogleTranslate() {
    if (document.getElementById('google-translate-script')) return;
    const s = document.createElement('script');
    s.id = 'google-translate-script';
    s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    s.async = true;
    document.head.appendChild(s);
  }

  function triggerTranslation(targetLang) {
    setSavedLang(targetLang);

    // If native Spanish, reset cookie/reload or trigger reset
    if (targetLang === 'es') {
      // Clear google translate cookie
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + location.hostname;
      // also if framed or combo
      const combo = document.querySelector('.goog-te-combo');
      if (combo) {
        combo.value = 'es';
        combo.dispatchEvent(new Event('change'));
      } else {
        location.reload();
      }
      updateActiveBtn('es');
      return;
    }

    // Set google translate cookie format: /es/en or /es/fr
    document.cookie = "googtrans=/es/" + targetLang + "; path=/;";
    document.cookie = "googtrans=/es/" + targetLang + "; path=/; domain=" + location.hostname;

    const combo = document.querySelector('.goog-te-combo');
    if (combo) {
      combo.value = targetLang;
      combo.dispatchEvent(new Event('change'));
    } else {
      location.reload();
    }
    updateActiveBtn(targetLang);
  }

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

  function renderLanguageSwitcher() {
    // Hidden container for Google Translate element
    if (!document.getElementById('google_translate_element')) {
      const gtDiv = document.createElement('div');
      gtDiv.id = 'google_translate_element';
      gtDiv.style.display = 'none';
      document.body.appendChild(gtDiv);
    }

    // Style cleanup for google translate banner & iframe
    const style = document.createElement('style');
    style.innerHTML = `
      .goog-te-banner-frame.skiptranslate,
      .goog-te-banner-frame,
      #goog-gt-tt,
      .goog-te-balloon-frame { display: none !important; }
      body { top: 0px !important; }
      .goog-tooltip { display: none !important; }
      .goog-tooltip:hover { display: none !important; }
      .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
      
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
    container.setAttribute('aria-label', 'Selección de idioma');

    const currentSaved = getSavedLang();

    supportedLangs.forEach(lang => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lang-btn' + (lang.code === currentSaved ? ' active' : '');
      btn.setAttribute('data-lang', lang.code);
      btn.title = lang.label;
      btn.innerHTML = `<span style="font-size:0.9rem;">${lang.flag}</span> <span>${lang.code.toUpperCase()}</span>`;
      btn.onclick = () => triggerTranslation(lang.code);
      container.appendChild(btn);
    });

    // Insert into topbar
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
  }

  // Init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      renderLanguageSwitcher();
      loadGoogleTranslate();
    });
  } else {
    renderLanguageSwitcher();
    loadGoogleTranslate();
  }
})();
