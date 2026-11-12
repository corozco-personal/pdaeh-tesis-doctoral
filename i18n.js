(function () {
  'use strict';

  const SOURCE_LANGUAGE = 'es';
  const STORAGE_KEY = 'pdaeh_user_lang';
  const SCRIPT_ID = 'pdaeh-google-translate-script';
  const WIDGET_ID = 'google_translate_element';
  const LANGUAGES = {
    es: { label: 'Español', flag: '🇪🇸' },
    en: { label: 'English', flag: '🇬🇧' },
    fr: { label: 'Français', flag: '🇫🇷' }
  };

  let widgetInitialized = false;
  let retryTimer = null;
  let retryCount = 0;
  let pendingLanguage = readLanguage();

  function normalizeLanguage(language) {
    return Object.prototype.hasOwnProperty.call(LANGUAGES, language) ? language : SOURCE_LANGUAGE;
  }

  function readLanguage() {
    try {
      return normalizeLanguage(window.localStorage.getItem(STORAGE_KEY));
    } catch (_error) {
      return SOURCE_LANGUAGE;
    }
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (_error) {
      // The selector still works for the current page if storage is unavailable.
    }
  }

  function cookiePath() {
    const path = window.location.pathname || '/';
    return path.endsWith('/') ? path : path.slice(0, path.lastIndexOf('/') + 1) || '/';
  }

  function expireCookie(path) {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}; SameSite=Lax`;
  }

  function clearTranslationCookie() {
    expireCookie('/');
    if (cookiePath() !== '/') expireCookie(cookiePath());
  }

  function setTranslationCookie(language) {
    const value = `/${SOURCE_LANGUAGE}/${language}`;
    const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `googtrans=${value}; expires=${expires}; path=/; SameSite=Lax`;
  }

  function updateSwitcher(language) {
    document.querySelectorAll('[data-pdaeh-language]').forEach((button) => {
      const active = button.dataset.pdaehLanguage === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function notifyLanguageChange(language) {
    window.dispatchEvent(new CustomEvent('pdaeh:languageChanged', {
      detail: { lang: language, language }
    }));
  }

  function translateCombo() {
    return document.querySelector('.goog-te-combo');
  }

  function applyLanguageToWidget(language) {
    const combo = translateCombo();
    if (!combo) return false;

    const desiredValue = language === SOURCE_LANGUAGE ? '' : language;
    if (desiredValue && !Array.from(combo.options).some((option) => option.value === desiredValue)) return false;
    if (combo.value !== desiredValue) {
      combo.value = desiredValue;
      combo.dispatchEvent(new Event('change', { bubbles: true }));
    }
    return true;
  }

  function stopRetries() {
    if (retryTimer !== null) window.clearTimeout(retryTimer);
    retryTimer = null;
    retryCount = 0;
  }

  function scheduleWidgetApplication(language) {
    pendingLanguage = language;
    stopRetries();
    const attempt = function () {
      if (applyLanguageToWidget(pendingLanguage)) {
        stopRetries();
        return;
      }
      retryCount += 1;
      if (retryCount < 40) retryTimer = window.setTimeout(attempt, 250);
    };
    attempt();
  }

  function setLanguage(language) {
    language = normalizeLanguage(language);
    const previousLanguage = readLanguage();
    const combo = translateCombo();
    const translatedDocument = document.documentElement.classList.contains('translated-ltr')
      || document.documentElement.classList.contains('translated-rtl')
      || Boolean(combo && combo.value);

    saveLanguage(language);
    pendingLanguage = language;
    document.documentElement.lang = language;
    updateSwitcher(language);
    notifyLanguageChange(language);

    if (language === SOURCE_LANGUAGE) {
      clearTranslationCookie();
      stopRetries();
      if (previousLanguage !== SOURCE_LANGUAGE || translatedDocument) window.location.reload();
      return;
    }

    setTranslationCookie(language);
    loadGoogleTranslate();
    scheduleWidgetApplication(language);
  }

  function ensureWidgetContainer() {
    let container = document.getElementById(WIDGET_ID);
    if (container) return container;
    container = document.createElement('div');
    container.id = WIDGET_ID;
    container.setAttribute('aria-hidden', 'true');
    Object.assign(container.style, {
      position: 'fixed', left: '-10000px', top: '0', width: '1px', height: '1px', overflow: 'hidden'
    });
    document.body.appendChild(container);
    return container;
  }

  function loadGoogleTranslate() {
    if (window.google && window.google.translate && window.google.translate.TranslateElement) {
      window.googleTranslateElementInit();
      return;
    }
    if (document.getElementById(SCRIPT_ID)) return;
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.onerror = function () {
      document.querySelectorAll('[data-pdaeh-language]').forEach((button) => {
        button.title = 'No fue posible cargar el servicio de traducción. Intente nuevamente.';
      });
    };
    document.head.appendChild(script);
  }

  window.googleTranslateElementInit = function () {
    if (widgetInitialized || !window.google || !window.google.translate) return;
    ensureWidgetContainer();
    widgetInitialized = true;
    new window.google.translate.TranslateElement({
      pageLanguage: SOURCE_LANGUAGE,
      includedLanguages: 'es,en,fr',
      autoDisplay: false,
      layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
    }, WIDGET_ID);
    scheduleWidgetApplication(readLanguage());
  };

  function installStyles() {
    if (document.getElementById('pdaeh-language-styles')) return;
    const style = document.createElement('style');
    style.id = 'pdaeh-language-styles';
    style.textContent = `
      .pdaeh-language-switcher { display: flex; align-items: center; gap: .25rem; margin-left: auto; }
      .pdaeh-language-button { border: 1px solid transparent; border-radius: 999px; background: transparent; cursor: pointer; font: inherit; line-height: 1; padding: .38rem .46rem; }
      .pdaeh-language-button:hover, .pdaeh-language-button:focus-visible { background: rgba(16, 112, 105, .1); outline: none; }
      .pdaeh-language-button.is-active { border-color: currentColor; background: rgba(16, 112, 105, .12); }
      .pdaeh-language-button span { font-size: 1.15rem; }
      .goog-te-banner-frame, .goog-te-banner-frame.skiptranslate { display: none !important; }
      body { top: 0 !important; }
      #goog-gt-tt, .goog-te-balloon-frame { display: none !important; }
      .goog-text-highlight { background: inherit !important; box-shadow: none !important; }
    `;
    document.head.appendChild(style);
  }

  function renderLanguageSwitcher() {
    if (document.querySelector('.pdaeh-language-switcher')) return;
    const topbar = document.querySelector('.topbar');
    if (!topbar) return;
    const switcher = document.createElement('nav');
    switcher.className = 'pdaeh-language-switcher';
    switcher.setAttribute('aria-label', 'Idioma del sitio');
    Object.entries(LANGUAGES).forEach(([code, metadata]) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'pdaeh-language-button';
      button.dataset.pdaehLanguage = code;
      button.setAttribute('aria-label', metadata.label);
      button.title = metadata.label;
      button.innerHTML = `<span aria-hidden="true">${metadata.flag}</span>`;
      button.addEventListener('click', () => setLanguage(code));
      switcher.appendChild(button);
    });
    topbar.appendChild(switcher);
    updateSwitcher(readLanguage());
  }

  function initialize() {
    const language = readLanguage();
    document.documentElement.lang = language;
    installStyles();
    ensureWidgetContainer();
    renderLanguageSwitcher();
    if (language === SOURCE_LANGUAGE) clearTranslationCookie();
    else setTranslationCookie(language);
    loadGoogleTranslate();
  }

  window.PDAEH_I18N = { getLang: readLanguage, setLang: setLanguage };
  window.PDAEH_SET_LANG = setLanguage;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();
}());
