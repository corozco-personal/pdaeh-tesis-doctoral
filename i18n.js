// i18n.js - Clean, stable client-side dynamic translation for PDAEH (ES, EN, FR)
// Avoids recursive location.reload() loops and dispatches language change events to the agent simulator.

(function() {
  const supportedLangs = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' }
  ];

  window.PDAEH_I18N = {
    getLang: function() {
      return localStorage.getItem('pdaeh_user_lang') || 'es';
    },
    setLang: function(lang) {
      localStorage.setItem('pdaeh_user_lang', lang);
      window.dispatchEvent(new CustomEvent('pdaeh:languageChanged', { detail: { lang: lang } }));
    }
  };

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

  function setGoogleTranslateCookie(lang) {
    const val = (lang === 'es') ? '' : ('/es/' + lang);
    const domain = location.hostname;
    if (lang === 'es') {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + domain;
    } else {
      document.cookie = "googtrans=" + val + "; path=/;";
      document.cookie = "googtrans=" + val + "; path=/; domain=" + domain;
    }
  }

  function switchLanguage(targetLang) {
    const currentLang = window.PDAEH_I18N.getLang();
    window.PDAEH_I18N.setLang(targetLang);
    updateActiveBtn(targetLang);
    setGoogleTranslateCookie(targetLang);

    // Try to trigger translation via Google widget select if already present without reloading
    const combo = document.querySelector('.goog-te-combo');
    if (combo) {
      combo.value = targetLang;
      combo.dispatchEvent(new Event('change'));
    } else {
      // Single reload only if widget combo is not yet instantiated
      window.location.reload();
    }
  }

  window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
      pageLanguage: 'es',
      includedLanguages: 'es,en,fr',
      autoDisplay: false,
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');

    const saved = window.PDAEH_I18N.getLang();
    if (saved && saved !== 'es') {
      // Small timeout to allow the combo to be mounted
      setTimeout(() => {
        const combo = document.querySelector('.goog-te-combo');
        if (combo && combo.value !== saved) {
          combo.value = saved;
          combo.dispatchEvent(new Event('change'));
        }
      }, 500);
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

    const currentSaved = window.PDAEH_I18N.getLang();

    supportedLangs.forEach(lang => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lang-btn' + (lang.code === currentSaved ? ' active' : '');
      btn.setAttribute('data-lang', lang.code);
      btn.title = lang.label;
      btn.innerHTML = `<span style="font-size:0.9rem;">${lang.flag}</span> <span>${lang.code.toUpperCase()}</span>`;
      btn.onclick = () => switchLanguage(lang.code);
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
