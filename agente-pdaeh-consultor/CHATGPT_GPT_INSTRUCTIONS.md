# Guía de Instalación y Configuración: PDAEH Advisor en OpenAI ChatGPT (Custom GPT)

Con esta guía puedes crear tu propio **Custom GPT** en la plataforma de **OpenAI** (disponible en ChatGPT Plus, Team y Enterprise).

---

## Paso 1: Crear un GPT en GPT Builder
1. Ingresa a [chatgpt.com](https://chatgpt.com).
2. Haz clic en **Explore GPTs** (Explorar GPTs) en la barra lateral izquierda y luego en **+ Create** (+ Crear) en la esquina superior derecha.
3. Cambia a la pestaña **Configure** (Configurar) para tener control total del prompt y las fuentes.

---

## Paso 2: Configuración Básica
* **Name:** `PDAEH Advisor`
* **Description:** `Consultor metodológico para diagnosticar empresas y guiar la adopción del marco PDAEH en arquitecturas de software híbridas clásico-cuánticas.`
* **Instructions:** Pega el contenido íntegro del archivo [`SYSTEM_PROMPT.md`](./SYSTEM_PROMPT.md).

---

## Paso 3: Conversation Starters (Preguntas Sugeridas)
Agrega los siguientes iniciadores de conversación:
1. *"Quiero hacer un diagnóstico para mi empresa y evaluar la viabilidad de aplicar PDAEH."*
2. *"Somos una PYME de logística y queremos evaluar computación cuántica para ruteo. ¿Cuál es nuestra hoja de ruta?"*
3. *"Explícame cómo adaptar los 9 roles del PDAEH para un equipo de 6 personas en una Startup."*
4. *"Ayúdame a redactar el Documento de Objetivos Empresariales (DOE) para la Fase 1."*

---

## Paso 4: Carga de Archivos de Conocimiento (Knowledge)
En la sección **Knowledge**, haz clic en **Upload files** y adjunta:
* [`knowledge_base_pdaeh.json`](./knowledge_base_pdaeh.json)

---

## Paso 5: Capacidades y Publicación
* **Capabilities:** Activa *Code Interpreter* y *Web Browsing* (opcional, para consultar novedades de SDKs como Qiskit o Amazon Braket).
* En la esquina superior derecha, haz clic en **Save** / **Publish** (puedes guardarlo como *Only me*, *Anyone with a link* o público en la GPT Store).
