# Agente Consultor PDAEH — Asesor de Arquitectura Empresarial Híbrida Clásico-Cuántica

Este directorio contiene la especificación completa, empaquetada y estandarizada para desplegar el **Agente Consultor PDAEH** en cualquier plataforma de Inteligencia Artificial moderna:

- **Gems de Google Gemini** (Google Workspace / Gemini Advanced)
- **Projects / Custom Instructions de Claude (Anthropic)**
- **Custom GPTs de OpenAI (ChatGPT Plus / Enterprise / Team)**
- **Modelos Locales / Open Source (Ollama, LM Studio, vLLM con Open WebUI)**
- **Frameworks de Agentes Autónomos (LangChain, LangGraph, AutoGen, CrewAI)**

---

## 📁 Archivos Disponibles

1. **[`SYSTEM_PROMPT.md`](./SYSTEM_PROMPT.md)**: El System Prompt universal completo, exhaustivo y estructurado (Markdown) listo para copiar y pegar en la configuración de sistema de cualquier LLM.
2. **[`GEMINI_GEM_INSTRUCTIONS.md`](./GEMINI_GEM_INSTRUCTIONS.md)**: Guía paso a paso y texto optimizado para crear un **Gem** en Google Gemini.
3. **[`CLAUDE_PROJECT_INSTRUCTIONS.md`](./CLAUDE_PROJECT_INSTRUCTIONS.md)**: Guía paso a paso y texto optimizado para crear un **Project** en Claude.
4. **[`CHATGPT_GPT_INSTRUCTIONS.md`](./CHATGPT_GPT_INSTRUCTIONS.md)**: Guía paso a paso y texto optimizado para crear un **Custom GPT** en OpenAI.
5. **[`knowledge_base_pdaeh.json`](./knowledge_base_pdaeh.json)**: Archivo de conocimiento estructurado (JSON) que contiene todo el proceso PDAEH (dimensiones, 10 elementos, 5 fases, roles por tamaño de empresa, 15 plantillas y actividades del OGA). Puede subirse como archivo de conocimiento (*Knowledge retrieval / Files*) en Claude Projects, Custom GPTs o Gemini Gems.

---

## 🎯 ¿Qué hace este Agente?

El Agente actúa como un **Consultor Senior en Arquitectura de Software Empresarial Híbrida**. Cuando un usuario de una empresa interactúa con él:
1. **Entrevista guiada paso a paso**: Levanta el contexto organizacional, tamaño de empresa, infraestructura clásica (AS-IS) y el problema de negocio que desea resolver con computación cuántica.
2. **Diagnóstico de madurez y viabilidad**: Evalúa si el caso de uso es pertinente para un enfoque híbrido clásico-cuántico (NISQ o fault-tolerant) o si debe resolverse clásicamente.
3. **Mapeo de roles adaptados**: Asigna responsabilidades según el tamaño de la empresa (Startup, Pyme o Gran Empresa).
4. **Plan de acción estructurado en 5 Fases**: Define el paso a paso cronológico para implementar el proceso PDAEH.
5. **Generación y recomendación de artefactos**: Indica cuáles de las 15 plantillas (DOE, DCA, MAC, DEA, etc.) debe diligenciar en cada fase y cómo someterlas a aprobación del Órgano de Gobierno Arquitectónico (OGA).
