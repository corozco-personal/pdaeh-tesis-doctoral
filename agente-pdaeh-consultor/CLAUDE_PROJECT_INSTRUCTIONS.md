# Guía de Instalación y Configuración: PDAEH Advisor en Anthropic Claude (Projects)

Con esta guía puedes configurar a **PDAEH Advisor** en **Claude Projects** (disponible en Claude Pro / Claude Team).

---

## Paso 1: Crear un Nuevo Proyecto en Claude
1. Ingresa a [claude.ai](https://claude.ai).
2. En la barra lateral izquierda, dirígete a **Projects** (Proyectos) y haz clic en **Create Project** (Crear Proyecto).
3. Asigna un nombre al proyecto:
   * **Project Name:** `PDAEH Advisor - Consultor de Arquitectura Híbrida`
   * **Project Description:** `Consultor metodológico para la implementación de arquitecturas empresariales híbridas clásico-cuánticas bajo el marco PDAEH.`

---

## Paso 2: Configurar las Instrucciones del Proyecto (Custom Instructions)
En la pestaña de configuración del Proyecto (**Project Instructions**), copia y pega el contenido del archivo [`SYSTEM_PROMPT.md`](./SYSTEM_PROMPT.md).

---

## Paso 3: Agregar Documentos de Referencia (Project Knowledge)
En la sección **Project Knowledge**, sube los siguientes archivos:
* [`knowledge_base_pdaeh.json`](./knowledge_base_pdaeh.json)
* Opcional: Las plantillas de artefactos `.docx` de la carpeta `dist/assets/descargas/` si deseas que Claude redacte directamente los documentos completos en formato estándar.

---

## Paso 4: Casos de Uso y Prompts de Inicio
Inicia una nueva conversación dentro del proyecto usando prompts como:

* *"Somos una Startup FinTech de 8 personas. Queremos diseñar un algoritmo híbrido cuántico-clásico para optimización de portafolios de inversión en tiempo real. Realiza nuestro diagnóstico PDAEH y genera el roadmap para la Fase 1 y Fase 2."*
* *"Ayúdanos a redactar el artefacto DCA (Documento de Constitución de la Arquitectura Híbrida) para nuestro caso de uso."*
* *"¿Cómo debemos modelar las vistas arquitecturales DVA utilizando patrones híbridos como Split Execution y Hybrid Quantum Loop?"*
