// i18n.js - Robust Client-Side Dynamic Translation for PDAEH (ES, EN, FR)
// Integrates seamless Google Translate engine with custom persistent topbar flags.
// Completely eliminates reload loops by using google's translation API directly.

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

  // Update active styling on the flag buttons
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

  // Core translation execution using google's select combo
  function doTranslate(targetLang) {
    // 1. Notify listeners (such as the PDAEH Agent Simulator in app.js)
    window.dispatchEvent(new CustomEvent('pdaeh:languageChanged', { detail: { lang: targetLang } }));

    // 2. Set google translation cookies for persistence across pages
    const domain = location.hostname;
    if (targetLang === 'es') {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + domain;
    } else {
      document.cookie = "googtrans=/es/" + targetLang + "; path=/;";
      document.cookie = "googtrans=/es/" + targetLang + "; path=/; domain=" + domain;
    }

    // 3. Find Google Translate element combo box
    const combo = document.querySelector('.goog-te-combo');
    if (combo) {
      if (combo.value !== targetLang) {
        combo.value = targetLang;
        combo.dispatchEvent(new Event('change'));
      }
    } else {
      // If combo not yet loaded, retry shortly
      setTimeout(() => {
        const retryCombo = document.querySelector('.goog-te-combo');
        if (retryCombo && retryCombo.value !== targetLang) {
          retryCombo.value = targetLang;
          retryCombo.dispatchEvent(new Event('change'));
        }
      }, 600);
    }
  }

  window.PDAEH_I18N = {
    getLang: getSavedLang,
    setLang: function(lang) {
      setSavedLang(lang);
      updateActiveBtn(lang);
      doTranslate(lang);
    }
  };

  // Google Translate callback initialization
  window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
      pageLanguage: 'es',
      includedLanguages: 'es,en,fr',
      autoDisplay: false,
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');

    const saved = getSavedLang();
    if (saved && saved !== 'es') {
      // Trigger translation once widget is mounted
      let attempts = 0;
      const checkInterval = setInterval(() => {
        attempts++;
        const combo = document.querySelector('.goog-te-combo');
        if (combo) {
          clearInterval(checkInterval);
          combo.value = saved;
          combo.dispatchEvent(new Event('change'));
          window.dispatchEvent(new CustomEvent('pdaeh:languageChanged', { detail: { lang: saved } }));
        }
        if (attempts > 20) clearInterval(checkInterval);
      }, 200);
    }
  };

  function loadGoogleTranslate() {
    if (document.getElementById('google-translate-script')) return;
    const s = document.createElement('script');
    s.id = 'google-translate-script';
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    s.async = true;
    document.head.appendChild(s);
  }

  function renderLanguageSwitcher() {
    if (!document.getElementById('google_translate_element')) {
      const gtDiv = document.createElement('div');
      gtDiv.id = 'google_translate_element';
      gtDiv.style.display = 'none';
      document.body.appendChild(gtDiv);
    }

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
  }

  // Load widget and UI
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
