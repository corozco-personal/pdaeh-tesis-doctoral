import fs from 'node:fs/promises';
import vm from 'node:vm';

const ROOT = new URL('../', import.meta.url);
const TARGETS = ['en', 'fr'];
const HTML_FILES = ['index.html', 'fase.html', 'plantilla.html', 'declaracion-ia.html'];
const JS_FILES = ['app.js', 'phase.js', 'template.js'];
const spanishPattern = /[áéíóúñ¿¡]|\b(?:de|del|la|el|para|con|y|en|por|una|un|los|las|que|como|se|su|al)\b/i;
const SPANISH_UI_WORDS = new Set([
  'alcance', 'artefacto', 'artefactos', 'autor', 'buscar', 'campo', 'cerrar', 'completar',
  'contenido', 'criterios', 'descripción', 'dimensión', 'dimensiones', 'elemento', 'elementos',
  'entrada', 'entradas', 'fase', 'fases', 'fecha', 'figura', 'herramientas', 'inicio',
  'modelo', 'objetivo', 'objetivos', 'origen', 'proceso', 'producto', 'productos', 'propuesta',
  'proyecto', 'registro', 'responsable', 'responsables', 'revisor', 'rol', 'roles', 'salida',
  'salidas', 'sección', 'tabla', 'tareas', 'versión'
]);

const decodeHtml = (value) => value
  .replaceAll('&nbsp;', ' ')
  .replaceAll('&amp;', '&')
  .replaceAll('&quot;', '"')
  .replaceAll('&#39;', "'")
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>');

const normalize = (value) => decodeHtml(String(value)).replace(/\s+/g, ' ').trim();
const candidates = new Set();

function add(value, force = false) {
  const text = normalize(value);
  const isKnownUiWord = SPANISH_UI_WORDS.has(text.toLocaleLowerCase('es'));
  if (!text || text.length > 3500 || (!force && !spanishPattern.test(text) && !isKnownUiWord)) return;
  if (/^(?:https?:|assets\/|[.#][\w-]+$)/i.test(text)) return;
  candidates.add(text);
}

function collect(value) {
  if (typeof value === 'string') add(value);
  else if (Array.isArray(value)) value.forEach(collect);
  else if (value && typeof value === 'object') Object.values(value).forEach(collect);
}

const thesisSource = await fs.readFile(new URL('thesis-content.js', ROOT), 'utf8');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(thesisSource, context);
collect(context.window.THESIS_DATA);

for (const file of HTML_FILES) {
  let source = await fs.readFile(new URL(file, ROOT), 'utf8');
  source = source.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
  for (const match of source.matchAll(/>([^<>]+)</g)) add(match[1]);
  for (const match of source.matchAll(/(?:title|placeholder|aria-label|alt)="([^"]+)"/g)) add(match[1]);
}

function collectJavaScriptLiterals(source) {
  for (let index = 0; index < source.length; index += 1) {
    const quote = source[index];
    if (quote !== '"' && quote !== "'" && quote !== '`') continue;
    let literal = '';
    index += 1;
    for (; index < source.length; index += 1) {
      const character = source[index];
      if (character === '\\') {
        literal += character + (source[index + 1] || '');
        index += 1;
      } else if (character === quote) {
        break;
      } else {
        literal += character;
      }
    }
    if (quote === '`' && literal.includes('<')) {
      for (const match of literal.matchAll(/>([^<>]+)</g)) {
        add(match[1].replace(/\$\{[^}]+\}/g, ''));
      }
    }
    if (!/[<>{}$]/.test(literal)) add(literal.replace(/\\n/g, ' '));
  }
}

for (const file of JS_FILES) {
  const source = await fs.readFile(new URL(file, ROOT), 'utf8');
  collectJavaScriptLiterals(source);
  for (const match of source.matchAll(/>([^<>]+)</g)) {
    add(match[1].replace(/\$\{[^}]+\}/g, ''));
  }
}

[
  '🏠 Inicio', 'Descargar paquete completo (.ZIP)', '5 fases consecutivas (F1–F5)',
  '9 roles', 'OGA-1 a OGA-5', '15 plantillas normalizadas', 'Id', 'Referencia',
  'Ver referencia', 'Consolidar diez elementos comparables.', 'diez elementos estructurales (E1–E10)',
  'cinco fases consecutivas', 'cinco fases operativas', 'Fases 1 a 5', '5 fases consecutivas',
  '10 elementos estructurales integrados', '15 artefactos normalizados',
  'agente consultor complementario e inteligente (PDAEH Advisor)', 'Entradas requeridas:',
  'Salida esperada:', 'Microempresa o startup', 'Soporte documental', 'Contenido principal',
  'Buscar elementos, fases o artefactos...', 'Imprimir / guardar PDF',
  'PDAEH: Un proceso gobernable para asistir la definición de arquitecturas empresariales híbridas clásico-cuánticas',
  'Producción científica asociada', 'Artículos derivados de la investigación',
  'Las siguientes publicaciones documentan los principales resultados que sustentan la construcción de la propuesta doctoral.',
  'Publicado', 'En proceso de revisión y publicación',
  'Proceso de armonización desde las fuentes de evidencia hasta la obtención de los elementos integrados y su clasificación en dimensiones.'
].forEach((text) => add(text, true));

const sourceTexts = [...candidates].sort((a, b) => a.localeCompare(b, 'es'));
const dictionaries = { en: {}, fr: {} };
const SEPARATOR = '\n[[[PDAEH_SEGMENT]]]\n';

const chunks = [];
let currentChunk = [];
let currentLength = 0;
for (const text of sourceTexts) {
  const extraLength = text.length + (currentChunk.length ? SEPARATOR.length : 0);
  if (currentChunk.length && currentLength + extraLength > 3500) {
    chunks.push(currentChunk);
    currentChunk = [];
    currentLength = 0;
  }
  currentChunk.push(text);
  currentLength += extraLength;
}
if (currentChunk.length) chunks.push(currentChunk);

async function translateChunk(texts, target, attempt = 0) {
  const text = texts.join(SEPARATOR);
  const url = new URL('https://translate.googleapis.com/translate_a/single');
  url.searchParams.set('client', 'gtx');
  url.searchParams.set('sl', 'es');
  url.searchParams.set('tl', target);
  url.searchParams.set('dt', 't');
  url.searchParams.set('q', text);
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    const translated = payload[0].map((part) => part[0]).join('');
    const segments = translated.split(/\n?\[\[\[PDAEH_SEGMENT\]\]\]\s*\n?/);
    if (segments.length !== texts.length) {
      throw new Error(`segment mismatch: expected ${texts.length}, received ${segments.length}`);
    }
    return segments.map((segment) => segment.trim());
  } catch (error) {
    if (attempt >= 4) throw new Error(`${target}: ${texts[0].slice(0, 80)} (${error.message})`);
    if (attempt === 0) process.stderr.write(`${target}: retrying chunk (${error.message})\n`);
    await new Promise((resolve) => setTimeout(resolve, 500 * (2 ** attempt)));
    return translateChunk(texts, target, attempt + 1);
  }
}

for (const target of TARGETS) {
  let cursor = 0;
  const workers = Array.from({ length: 6 }, async () => {
    while (cursor < chunks.length) {
      const index = cursor++;
      const chunk = chunks[index];
      const translated = await translateChunk(chunk, target);
      chunk.forEach((source, translationIndex) => {
        dictionaries[target][source] = translated[translationIndex];
      });
      process.stdout.write(`${target}: ${index + 1}/${chunks.length} chunks\n`);
    }
  });
  await Promise.all(workers);
}

const DOMAIN_OVERRIDES = {
  en: {
    'Entradas': 'Inputs',
    'Entrada': 'Input',
    'Salidas': 'Outputs',
    'Salida': 'Output',
    'Salidas y artefactos': 'Outputs and artifacts',
    'Responsable': 'Responsible role',
    'Responsables': 'Responsible roles',
    'Punto de control': 'Control point',
    'Punto de validación': 'Validation point',
    'Productos generados': 'Generated products',
    'Criterios de aceptación': 'Acceptance criteria',
    'Dependencias estructurales': 'Structural dependencies',
    'Todas las fases': 'All phases',
    'Volver a las fases del proceso': 'Return to process phases',
    'Volver a las plantillas': 'Return to templates',
    'PDAEH: Un proceso gobernable para asistir la definición de arquitecturas empresariales híbridas clásico-cuánticas': 'PDAEH: A governable process to support the definition of hybrid classical-quantum enterprise architectures',
    'Producción científica asociada': 'Associated scientific output',
    'Artículos derivados de la investigación': 'Articles derived from the research',
    'Las siguientes publicaciones documentan los principales resultados que sustentan la construcción de la propuesta doctoral.': 'The following publications document the main results supporting the development of the doctoral proposal.',
    'Publicado': 'Published',
    'En proceso de revisión y publicación': 'Under review and publication',
    'Proceso de armonización desde las fuentes de evidencia hasta la obtención de los elementos integrados y su clasificación en dimensiones.': 'Harmonization process from the evidence sources to the integrated elements and their classification into dimensions.'
  },
  fr: {
    'Entradas': 'Entrées',
    'Entrada': 'Entrée',
    'Salidas': 'Sorties',
    'Salida': 'Sortie',
    'Salidas y artefactos': 'Sorties et artefacts',
    'Responsable': 'Rôle responsable',
    'Responsables': 'Rôles responsables',
    'Punto de control': 'Point de contrôle',
    'Punto de validación': 'Point de validation',
    'Productos generados': 'Produits générés',
    'Criterios de aceptación': "Critères d'acceptation",
    'Dependencias estructurales': 'Dépendances structurelles',
    'Todas las fases': 'Toutes les phases',
    'Volver a las fases del proceso': 'Retour aux phases du processus',
    'Volver a las plantillas': 'Retour aux modèles',
    'PDAEH: Un proceso gobernable para asistir la definición de arquitecturas empresariales híbridas clásico-cuánticas': "PDAEH : Un processus gouvernable pour accompagner la définition d’architectures d’entreprise hybrides classiques-quantiques",
    'Producción científica asociada': 'Production scientifique associée',
    'Artículos derivados de la investigación': 'Articles issus de la recherche',
    'Las siguientes publicaciones documentan los principales resultados que sustentan la construcción de la propuesta doctoral.': 'Les publications suivantes documentent les principaux résultats qui soutiennent la construction de la proposition doctorale.',
    'Publicado': 'Publié',
    'En proceso de revisión y publicación': 'En cours d’évaluation et de publication',
    'Proceso de armonización desde las fuentes de evidencia hasta la obtención de los elementos integrados y su clasificación en dimensiones.': 'Processus d’harmonisation depuis les sources de preuve jusqu’aux éléments intégrés et à leur classification en dimensions.'
  }
};
TARGETS.forEach((target) => Object.assign(dictionaries[target], DOMAIN_OVERRIDES[target]));

const output = `// Generated by scripts/generate-locales.mjs. Runtime translation is entirely local.\nwindow.PDAEH_TRANSLATIONS = ${JSON.stringify(dictionaries)};\n`;
await fs.writeFile(new URL('locales.js', ROOT), output);
process.stdout.write(`Generated ${sourceTexts.length} source strings for ${TARGETS.join(', ')}.\n`);
