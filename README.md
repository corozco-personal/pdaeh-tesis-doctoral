# PDAEH: Proceso para la definición de arquitecturas empresariales híbridas (clásicas-cuánticas)

Repositorio oficial del **Proceso para la Definición de Arquitecturas Empresariales Híbridas (PDAEH)**, desarrollado como parte de la investigación doctoral en Ingeniería Telemática de la **Universidad del Cauca** por **Carlos Orozco**.

---

## Portal de validación por expertos

El detalle integral de todos los componentes metodológicos que conforman el proceso se encuentra disponible y abierto al público en el portal web interactivo:

<div align="center">
  <a href="https://corozco-personal.github.io/pdaeh-tesis-doctoral/" target="_blank">
    <img src="diagramas/qr-portal-pdaeh.png" alt="Código QR Portal PDAEH" width="220" />
  </a>
  <p>
    <a href="https://corozco-personal.github.io/pdaeh-tesis-doctoral/" target="_blank"><strong>Enlace directo</strong></a>
  </p>
  <p><em>Escanea el código QR o utiliza el enlace directo para ingresar al portal web público.</em></p>
</div>

El enlace provisto contiene el detalle exhaustivo de los componentes que conforman el proceso en términos de:
- **Diez elementos estructurales armonizados (E1–E10)** agrupados en tres dimensiones arquitectónicas (conceptual, organizativa, y de calidad y diseño).
- **Cinco fases consecutivas** que estructuran el ciclo metodológico (Fase 1: Definición estratégica, Fase 2: Formalización conceptual, Fase 3: Configuración estructural, Fase 4: Materialización arquitectónica, y Fase 5: Sistematización del diseño), con sus actividades, tareas, entradas, salidas y flujos de trabajo detallados.
- **Actividad transversal de revisión de líneas base** y los puntos de control formal a cargo del Órgano de Gobierno Arquitectónico (OGA-1 a OGA-5).
- **Esquema de nueve roles arquitectónicos** y su matriz formal de adaptación de acuerdo con el tamaño y madurez de la organización (startups o microempresas, pymes y grandes empresas).
- **Catálogo de quince artefactos normalizados** organizados en tabla comparativa con plantillas descargables en formatos abiertos y editables: **Markdown (`.md`)**, **Word (`.docx`)** y **LaTeX (`.tex`)**.
- **Declaración formal de uso responsable de inteligencia artificial**, detallando el marco de transparencia y los procesos de auditoría y validación exhaustiva realizados por los autores.
- **Revisión sistemática de la literatura y estudio exploratorio en la industria**, con el inventario de estudios primarios (S1–S24) y referencias en formato IEEE.

---

## Agente consultor y skill metodológico PDAEH

El agente **PDAEH-Advisor** es un consultor virtual especializado, regido por especificaciones formales anti-alucinación (`PDAEH_SPECIFICATION_V1.md` y `PDAEH_SPECIFICATION_V1.json`). 

Su propósito es interactuar directamente con una empresa u organización, diagnosticar su arquitectura actual (*As-Is*), evaluar la pertinencia y factibilidad de incorporar capacidades cuánticas, y **entregar sugerencias precisas y una hoja de ruta (mapa paso a paso)** que guíe cronológicamente la aplicación de cada fase, actividad y artefacto del proceso PDAEH.

```mermaid
sequenceDiagram
    autonumber
    actor User as Empresa / Arquitecto
    participant Agent as PDAEH Advisor (Skill / LLM)
    participant Spec as Especificación Formal (JSON/MD)
    participant OGA as Checkpoints de Gobernanza (OGA)
    participant Templates as Plantillas de Artefactos (.md / .docx)

    User->>Agent: Contexto organizacional, arquitectura As-Is y caso de uso
    Agent->>Spec: Consulta reglas de precedencia, roles y restricciones NISQ
    Spec-->>Agent: Retorna invariantes (5 fases, 10 elementos, 15 artefactos)
    Agent->>Agent: Diagnóstico de ventaja cuántica & Algoritmos (QAOA, VQE, etc.)
    Agent->>User: Entrega diagnóstico de viabilidad y asignación de roles
    Agent->>OGA: Estructura plan con compuertas OGA-1 a OGA-5
    Agent->>Templates: Recomienda y suministra artefactos a diligenciar (DOE, MTA, DCA...)
    Agent-->>User: Entrega mapa paso a paso de adopción
```

---

## Guía de instalación del agente y skill

Puedes instalar y activar el skill consultor de forma inmediata mediante un **comando directo de una sola línea** (Opción 1), o configurarlo manualmente en plataformas web (Opción 2).

### Opción 1: Instalación del skill con un solo comando (Recomendada)

Para instalar y activar el **Skill PDAEH** en tu agente o entorno de desarrollo (Antigravity, Gemini CLI, Claude Code, Cursor) sin tener que copiar archivos a mano, ejecuta el siguiente comando en tu terminal:

```bash
curl -fsSL https://corozco-personal.github.io/pdaeh-tesis-doctoral/install.sh | bash -s -- --global
```

Si prefieres instalarlo únicamente dentro del proyecto o espacio de trabajo actual (`.agents/skills/pdaeh-advisor/`):

```bash
curl -fsSL https://corozco-personal.github.io/pdaeh-tesis-doctoral/install.sh | bash
```

El comando descarga e instala automáticamente la especificación formal del skill (`SKILL.md`), el esquema funcional (`PDAEH_SPECIFICATION_V1.json`) y la base de conocimiento (`knowledge_base_pdaeh.json`).

---

### Opción 2: Configuración en clientes web de inteligencia artificial (Gems, Projects, Custom GPTs)

Si prefieres interactuar con el agente a través de una interfaz de chat web, utiliza los archivos empaquetados en [`agente-pdaeh-consultor/`](./agente-pdaeh-consultor/):

#### Opción A: Google Gemini (Gems)
1. Ingresa a [gemini.google.com](https://gemini.google.com) y accede al **Administrador de Gems** (*Nuevo Gem*).
2. **Nombre:** `PDAEH Advisor - Consultor de Arquitectura Cuántica`
3. **Instrucciones:** Pega el contenido de [`agente-pdaeh-consultor/SYSTEM_PROMPT.md`](./agente-pdaeh-consultor/SYSTEM_PROMPT.md).
4. **Archivos de conocimiento:** Adjunta [`PDAEH_SPECIFICATION_V1.json`](./agente-pdaeh-consultor/PDAEH_SPECIFICATION_V1.json) y [`PDAEH_SPECIFICATION_V1.md`](./agente-pdaeh-consultor/PDAEH_SPECIFICATION_V1.md).
5. Guarda y comienza la consulta.

#### Opción B: Anthropic Claude (Projects)
1. En [claude.ai](https://claude.ai), accede a **Projects** y haz clic en **Create Project**.
2. **Project Name:** `PDAEH Advisor`
3. **Project Instructions:** Pega el contenido de [`agente-pdaeh-consultor/SYSTEM_PROMPT.md`](./agente-pdaeh-consultor/SYSTEM_PROMPT.md).
4. **Project Knowledge:** Sube [`knowledge_base_pdaeh.json`](./agente-pdaeh-consultor/knowledge_base_pdaeh.json) y [`PDAEH_SPECIFICATION_V1.json`](./agente-pdaeh-consultor/PDAEH_SPECIFICATION_V1.json).

#### Opción C: OpenAI ChatGPT (Custom GPTs)
1. En [chatgpt.com/gpts/editor](https://chatgpt.com/gpts/editor), crea un nuevo GPT.
2. **Instructions:** Pega el contenido de [`agente-pdaeh-consultor/SYSTEM_PROMPT.md`](./agente-pdaeh-consultor/SYSTEM_PROMPT.md).
3. **Knowledge:** Sube [`agente-pdaeh-consultor/knowledge_base_pdaeh.json`](./agente-pdaeh-consultor/knowledge_base_pdaeh.json).

---

## Ejemplo de diagnóstico y mapa de adopción generado por el agente

Al interactuar con el agente proporcionando el contexto de la empresa, este entrega un diagnóstico estructurado y un plan de acción:

```markdown
# Diagnóstico de viabilidad y mapa de adopción PDAEH

## 1. Diagnóstico de madurez y ventaja cuántica
- **Caso evaluado:** Optimización de rutas de distribución de última milla con flota eléctrica.
- **Veredicto:** Apto para arquitectura híbrida en régimen NISQ (algoritmo QAOA / VQE sobre simulador y QPU en nube).
- **Riesgo:** Alto en latencia de circuito; se prescribe patrón arquitectónico *Split Execution* con mitigación de ruido.

## 2. Asignación de roles según tamaño de la organización (Pyme)
- **AEP (Arquitecto empresarial del proceso):** Lidera alineación estratégica y absorbe la gestión de datos (ADP).
- **AIP (Arquitecto de integración):** Responsable de conectores clásicos-cuánticos y absorbe seguridad (ASecP).
- **ETC (Especialista cuántico):** Rol externo bajo demanda para formulación de Hamiltonianos y ejecución de circuitos.

## 3. Mapa de adopción paso a paso

### Fase 1: Definición estratégica
- **Paso 1.1:** Delimitar metas de reducción de costos y emisiones mediante el Documento de objetivos estratégicos (DOE).
- **Paso 1.2:** Levantar las capacidades tecnológicas actuales y restricciones normativas en el Documento de contexto arquitectónico (DCA).
- **Paso 1.3:** Formular la matriz de trazabilidad objetivos-arquitectura (MTA).
- **Punto de control OGA-1:** Validación y firma de la línea base LBA-F1 por el comité directivo.

### Fase 2: Formalización conceptual
- **Paso 2.1:** Identificar partes interesadas y expectativas en el Mapa de stakeholders (MSP).
- **Paso 2.2:** Especificar los niveles de abstracción y vistas del sistema en DPV y DNA.
- **Paso 2.3:** Unificar el glosario institucional en el Diccionario de vocabulario arquitectónico (DVA).
- **Punto de control OGA-2:** Aprobación del modelo conceptual de integración híbrida.

### Fase 3: Configuración estructural
- **Paso 3.1:** Modelar vistas lógicas y físicas de la solución híbrida en el Documento de estructuras arquitectónicas (DEA).
- **Paso 3.2:** Definir escenarios de calidad (latencia, disponibilidad y fidelidad) en el Modelo de atributos de calidad (MAC).
- **Punto de control OGA-3:** Certificación formal del diseño estructural.

### Fase 4: Materialización arquitectónica
- **Paso 4.1:** Especificar componentes de orquestación y middleware en el Documento de componentes (DCO).
- **Paso 4.2:** Catalogar algoritmos y conectores reutilizables en la Biblioteca de elementos reutilizables (BER).
- **Punto de control OGA-4:** Aprobación técnica de los artefactos de implementación.

### Fase 5: Sistematización del diseño
- **Paso 5.1:** Estandarizar patrones de diseño y estilos arquitectónicos en los catálogos CEP y CPD.
- **Paso 5.2:** Consolidar la Línea Base Arquitectónica integral (LBA).
- **Punto de control OGA-5:** Aprobación definitiva por el Órgano de Gobierno Arquitectónico (OGA).
```

---

## Estructura del repositorio

```text
├── pdaeh-evaluacion-expertos/     # Portal web interactivo de evaluación y consulta
│   └── dist/                     # Código fuente web para producción (HTML5, CSS3, JS)
│       ├── index.html            # Portal principal (RSL, Armonización, 5 Fases, Roles, Artefactos)
│       ├── fase.html             # Vista individual de cada fase (F1 a F5)
│       ├── plantilla.html        # Vista interactiva y visor de plantillas normativas
│       ├── declaracion-ia.html   # Declaración de uso responsable de inteligencia artificial
│       ├── install.sh            # Script de instalación automática de una sola línea
│       └── assets/               # Diagramas vectoriales, logos y descargas (.md / .docx / .tex)
├── agente-pdaeh-consultor/       # Agente consultor y especificaciones formales
│   ├── PDAEH_SPECIFICATION_V1.md # Especificación metodológica formal y skill
│   ├── PDAEH_SPECIFICATION_V1.json # Esquema formal en formato JSON Schema
│   ├── SYSTEM_PROMPT.md          # Prompt de sistema del consultor
│   ├── knowledge_base_pdaeh.json # Base de conocimiento del proceso PDAEH
│   ├── GEMINI_GEM_INSTRUCTIONS.md # Guía para Google Gemini (Gems)
│   ├── CLAUDE_PROJECT_INSTRUCTIONS.md # Guía para Anthropic Claude (Projects)
│   └── CHATGPT_GPT_INSTRUCTIONS.md # Guía para OpenAI ChatGPT (Custom GPTs)
├── diagramas/                    # Fuentes de diagramas vectoriales
├── scripts/                      # Scripts de automatización e instalación
├── SECURITY.md                   # Política de seguridad y directrices post-cuánticas
└── README.md                     # Documentación general del repositorio
```

---

## Publicaciones científicas vinculadas

1. **Revisión sistemática de literatura (RSL):**
   * SciELO / Ingenierías USBMed: [doi.org/10.21500/20275846.6433](https://doi.org/10.21500/20275846.6433)
2. **Armonización de modelos y elementos:**
   * Universidad Cooperativa de Colombia: [doi.org/10.16925/gcsc.130](https://doi.org/10.16925/gcsc.130)
3. **Proceso metodológico PDAEH:**
   * JIISIC 2026: *A Process for Defining Hybrid Classical-Quantum Enterprise Architectures*.
