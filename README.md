# PDAEH: Proceso para la Definición de Arquitecturas Empresariales Híbridas (Clásicas-Cuánticas)

Repositorio oficial del **Proceso para la Definición de Arquitecturas Empresariales Híbridas (PDAEH)**, desarrollado como parte de la tesis doctoral en Ingeniería de la **Universidad del Cauca** por **Carlos Orozco**.

Este repositorio unifica:
1. 🌐 **El Portal Web de Validación por Expertos**: Interfaz interactiva completa que expone el estudio exploratorio, la revisión sistemática de literatura (RSL), la armonización de elementos, las 5 fases del proceso, los 9 roles consolidados y las 15 plantillas normativas descargables (`.docx` y `.tex`).
2. 🤖 **El Agente Consultor PDAEH (Spec-Driven AI Agent)**: Especificación formal, guardrails anti-alucinación y configuración lista para desplegar en **Google Gemini (Gems)**, **Anthropic Claude (Projects)**, **OpenAI ChatGPT (Custom GPTs)** o agentes locales.
3. 📐 **Diagramas y Modelado Arquitectural**: Fuentes vectoriales editables (`.drawio`, `.svg`) de las vistas y fases metodológicas.

---

## 📂 Estructura del Repositorio

```text
├── pdaeh-evaluacion-expertos/     # Portal web interactivo de evaluación y consulta
│   └── dist/                     # Código fuente listo para producción (HTML5, CSS3, JS Vanilla)
│       ├── index.html            # Portal principal (RSL, Armonización, 5 Fases, Roles, OGA)
│       ├── fase.html             # Vista detallada de cada fase metodológica (F1 a F5)
│       ├── plantilla.html        # Vista y visor de plantillas normativas
│       └── assets/               # Diagramas vectoriales, logos y descargas (.docx / .tex)
├── agente-pdaeh-consultor/       # Agente de IA para diagnóstico y adopción empresarial
│   ├── PDAEH_SPECIFICATION_V1.md # Especificación formal, axiomas y guardrails anti-alucinación
│   ├── PDAEH_SPECIFICATION_V1.json # Esquema formal en formato JSON Schema de las 52 actividades
│   ├── SYSTEM_PROMPT.md          # Prompt de sistema blindado por especificación
│   ├── knowledge_base_pdaeh.json # Base de conocimiento canónica
│   ├── GEMINI_GEM_INSTRUCTIONS.md # Guía para Google Gemini (Gems)
│   ├── CLAUDE_PROJECT_INSTRUCTIONS.md # Guía para Anthropic Claude (Projects)
│   └── CHATGPT_GPT_INSTRUCTIONS.md # Guía para OpenAI ChatGPT (Custom GPTs)
├── diagramas/                    # Fuentes de diagramas arquitecturales en Draw.io y SVG
├── analysis/                     # Extracciones y tablas analíticas de la monografía doctoral
├── scripts/                      # Scripts de automatización y compilación de artefactos
├── SECURITY.md                   # Política de seguridad y directrices post-cuánticas
└── README.md                     # Documentación general del proyecto
```

---

## 🏛️ Resumen del Proceso PDAEH

El marco PDAEH armoniza **10 elementos metodológicos** organizados en **3 dimensiones**:
* **Dimensión Conceptual:** `E1` (Tipos de integración cuántica-clásica), `E2` (Patrones arquitecturales híbridos), `E3` (Lenguajes y marcos de modelado).
* **Dimensión Organizacional:** `E4` (Alineación estratégica de negocio), `E5` (Gobernanza y gestión del cambio), `E6` (Roles y responsabilidades organizacionales).
* **Dimensión de Calidad y Diseño:** `E7` (Atributos de calidad), `E8` (Proceso de desarrollo de software), `E9` (Métricas de diseño y evaluación), `E10` (Herramientas de soporte y simulación).

### Las 5 Fases y sus Puntos de Control OGA:
```
[Fase 1: Inicio y Alineación Estratégica]
       │ ──► Checkpoint OGA-1: Viabilidad Inicial y Patrocinio
       ▼
[Fase 2: Evaluación de Preparación Cuántica y Viabilidad]
       │ ──► Checkpoint OGA-2: Factibilidad y Selección de Casos
       ▼
[Fase 3: Diseño y Modelado de la Arquitectura Híbrida]
       │ ──► Checkpoint OGA-3: Certificación del Diseño Arquitectural
       ▼
[Fase 4: Implementación, Integración y Pruebas Piloto]
       │ ──► Checkpoint OGA-4: Aprobación de Resultados del Piloto
       ▼
[Fase 5: Despliegue, Monitoreo y Gobernanza Continua]
       │ ──► Checkpoint OGA-5: Retorno de Inversión y Evolución Continua
```

---

## 🚀 Despliegue del Portal Web

El portal está construido con estándares web universales (HTML5, CSS responsivo moderno, JavaScript Vanilla) sin dependencias pesadas de frameworks, lo que garantiza máxima compatibilidad, velocidad y preservación a largo plazo.

### Ejecución Local:
```bash
cd pdaeh-evaluacion-expertos/dist
python3 -m http.server 8085
```
Abre tu navegador en `http://localhost:8085`.

---

## 🤖 Uso del Agente Consultor PDAEH

El agente permite que cualquier organización (Startup, PYME o Gran Empresa) ingrese su contexto y reciba:
1. **Diagnóstico de Factibilidad Cuántica:** Análisis de si su problema computacional amerita algoritmos cuánticos (QAOA, VQE, Annealing, QML) o si debe permanecer 100% clásico.
2. **Asignación de Roles:** Mapeo de los 9 roles PDAEH (`AEP`, `ASP`, `AIP`, `EQP`, `LNP`, `OGA`, `ASecP`, `GEP`, `GPA`) ajustados al tamaño de su equipo.
3. **Roadmap Accionable:** Paso a paso por las 5 fases con las 15 plantillas oficiales a diligenciar.

Consulta la carpeta [`agente-pdaeh-consultor/`](./agente-pdaeh-consultor/) para instalarlo en Gemini, Claude o ChatGPT.

---

## 🔒 Seguridad y Gobernanza

Consulta [SECURITY.md](./SECURITY.md) para conocer las políticas de reporte de vulnerabilidades y los lineamientos de ciberseguridad post-cuántica (PQC).

---

## 📜 Publicaciones Científicas Vinculadas

1. **Revisión Sistemática de Literatura (RSL):**
   * SciELO / Ingenierías USBMed: [doi.org/10.21500/20275846.6433](https://doi.org/10.21500/20275846.6433)
2. **Armonización de Modelos y Elementos:**
   * Universidad Cooperativa de Colombia: [doi.org/10.16925/gcsc.130](https://doi.org/10.16925/gcsc.130)
3. **Proceso Metodológico PDAEH:**
   * JIISIC 2026: *A Process for Defining Hybrid Classical-Quantum Enterprise Architectures*.
