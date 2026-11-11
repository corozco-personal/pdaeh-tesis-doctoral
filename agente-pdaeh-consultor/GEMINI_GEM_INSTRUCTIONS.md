# Guía de Instalación y Configuración: PDAEH Advisor en Google Gemini (Gems)

Con esta guía puedes configurar a **PDAEH Advisor** en **Google Gemini Advanced** utilizando la función de **Gems** (asistentes personalizados de Google).

---

## Paso 1: Abrir el Administrador de Gems
1. Ingresa a [gemini.google.com](https://gemini.google.com).
2. En la barra lateral izquierda, haz clic en **Administrador de Gems** (Gem Manager) o en **Nuevo Gem** (+).

---

## Paso 2: Datos Generales del Gem
* **Nombre:** `PDAEH Advisor - Consultor de Arquitectura Cuántica-Clásica`
* **Descripción:** `Consultor metodológico experto en la aplicación del proceso PDAEH (Tesis Doctoral Unicauca) para diagnosticar organizaciones y guiar la adopción de arquitecturas híbridas clásico-cuánticas.`

---

## Paso 3: Instrucciones del Sistema (System Prompt)
Copia y pega íntegramente el contenido del archivo [`SYSTEM_PROMPT.md`](./SYSTEM_PROMPT.md) en el campo **Instrucciones** (Instructions) del Gem.

---

## Paso 4: Archivos de Conocimiento (Knowledge Base)
En la sección de archivos o fuentes de conocimiento del Gem, adjunta:
* [`knowledge_base_pdaeh.json`](./knowledge_base_pdaeh.json) (Base estructurada con las 5 fases, 10 elementos, 15 artefactos y roles).
* Opcional: El documento de tesis o resúmenes metodológicos si deseas mayor profundidad bibliográfica.

---

## Paso 5: Mensaje de Inicio / Prompt de Bienvenida Recomendado
Puedes probar tu Gem con el siguiente mensaje de ejemplo:

> *"Hola, represento a una empresa de logística mediana (PYME) con 18 desarrolladores. Manejamos optimización de rutas de última milla con microservicios en AWS. Queremos explorar computación cuántica para resolver problemas de ruteo combinatorio de alta complejidad. ¿Cómo podemos empezar a aplicar el proceso PDAEH?"*

El Gem ejecutará de inmediato el protocolo de diagnóstico en 4 pasos y generará la asignación de roles y la hoja de ruta personalizada.
