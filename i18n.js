(function () {
  'use strict';

  const SOURCE_LANGUAGE = 'es';
  const STORAGE_KEY = 'pdaeh_user_lang';
  const LANGUAGES = {
    es: { label: 'Español', flag: '🇪🇸' },
    en: { label: 'English', flag: '🇬🇧' },
    fr: { label: 'Français', flag: '🇫🇷' }
  };
  const ATTRIBUTES = ['title', 'placeholder', 'aria-label', 'alt'];
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  let activeLanguage = readLanguage();

  function normalizeLanguage(language) {
    return Object.prototype.hasOwnProperty.call(LANGUAGES, language) ? language : SOURCE_LANGUAGE;
  }

  function normalizeText(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
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
      // The current page can still change language when storage is unavailable.
    }
  }

  function dictionary(language) {
    return (window.PDAEH_TRANSLATIONS && window.PDAEH_TRANSLATIONS[language]) || {};
  }

  function translatedValue(source, language) {
    if (language === SOURCE_LANGUAGE) return source;
    const normalized = normalizeText(source);
    if (!normalized) return source;
    const translations = dictionary(language);
    let translation = translations[normalized];
    if (!translation) {
      const phaseCount = normalized.match(/^Fase (\d+) de (\d+)$/);
      if (phaseCount) {
        translation = language === 'en'
          ? `Phase ${phaseCount[1]} of ${phaseCount[2]}`
          : `Phase ${phaseCount[1]} sur ${phaseCount[2]}`;
      }
    }
    if (!translation) {
      const codedTitle = normalized.match(/^([A-ZÁÉÍÓÚÑ]+\d*(?:\.\d+)?)\s+-\s+(.+)$/);
      if (codedTitle && translations[codedTitle[2]]) {
        translation = `${codedTitle[1]} - ${translations[codedTitle[2]]}`;
      }
    }
    if (!translation) return source;
    const leading = source.match(/^\s*/)[0];
    const trailing = source.match(/\s*$/)[0];
    return `${leading}${translation}${trailing}`;
  }

  function shouldIgnore(node) {
    if (node.nodeType === Node.DOCUMENT_NODE) return false;
    const parent = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    return !parent || Boolean(parent.closest(
      'script, style, noscript, textarea, [translate="no"], [data-i18n-ignore]'
    ));
  }

  function translateTextNode(node, language) {
    if (shouldIgnore(node) || !normalizeText(node.data)) return;
    if (!originalText.has(node)) originalText.set(node, node.data);
    const source = originalText.get(node);
    const value = translatedValue(source, language);
    if (node.data !== value) node.data = value;
  }

  function translateElementAttributes(element, language) {
    if (shouldIgnore(element)) return;
    let values = originalAttributes.get(element);
    if (!values) {
      values = {};
      ATTRIBUTES.forEach((attribute) => {
        if (element.hasAttribute(attribute)) values[attribute] = element.getAttribute(attribute);
      });
      originalAttributes.set(element, values);
    }
    Object.entries(values).forEach(([attribute, source]) => {
      const value = translatedValue(source, language);
      if (element.getAttribute(attribute) !== value) element.setAttribute(attribute, value);
    });
  }

  function translateTree(root, language = activeLanguage) {
    if (!root || shouldIgnore(root)) return;
    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root, language);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
    if (root.nodeType === Node.ELEMENT_NODE) translateElementAttributes(root, language);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      if (node.nodeType === Node.TEXT_NODE) translateTextNode(node, language);
      else translateElementAttributes(node, language);
      node = walker.nextNode();
    }
  }

  function updateSwitcher(language) {
    document.querySelectorAll('[data-pdaeh-language]').forEach((button) => {
      const active = button.dataset.pdaehLanguage === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function setLanguage(language) {
    language = normalizeLanguage(language);
    activeLanguage = language;
    saveLanguage(language);
    document.documentElement.lang = language;
    translateTree(document, language);
    updateSwitcher(language);
    window.dispatchEvent(new CustomEvent('pdaeh:languageChanged', {
      detail: { lang: language, language }
    }));
  }

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
    `;
    document.head.appendChild(style);
  }

  function renderLanguageSwitcher() {
    if (document.querySelector('.pdaeh-language-switcher')) return;
    const topbar = document.querySelector('.topbar');
    if (!topbar) return;
    const switcher = document.createElement('nav');
    switcher.className = 'pdaeh-language-switcher';
    switcher.dataset.i18nIgnore = 'true';
    switcher.setAttribute('translate', 'no');
    switcher.setAttribute('aria-label', 'Selector de idioma');
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
    updateSwitcher(activeLanguage);
  }

  function removeLegacyGoogleState() {
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax';
    document.documentElement.classList.remove('translated-ltr', 'translated-rtl');
    document.documentElement.style.removeProperty('top');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('margin-top');
  }

  function observeDynamicContent() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => translateTree(node));
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function initialize() {
    removeLegacyGoogleState();
    installStyles();
    renderLanguageSwitcher();
    translateTree(document, activeLanguage);
    document.documentElement.lang = activeLanguage;
    observeDynamicContent();
  }

  window.PDAEH_I18N = {
    getLang: () => activeLanguage,
    setLang: setLanguage,
    translate: (text, language = activeLanguage) => translatedValue(text, language)
  };
  window.PDAEH_SET_LANG = setLanguage;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();
}());
