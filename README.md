# PDAEH: Proceso para la definición de arquitecturas empresariales híbridas (clásicas-cuánticas)

Repositorio oficial del **Proceso para la Definición de Arquitecturas Empresariales Híbridas (PDAEH)**, desarrollado como parte de la investigación doctoral en Ingeniería de la **Universidad del Cauca** por **Carlos Orozco**.

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

El portal web contiene el desarrollo exhaustivo de:
- **Los 10 elementos armonizados (E1–E10)** distribuidos en sus 3 dimensiones (conceptual, organizacional, calidad y diseño).
- **Las 5 fases metodológicas** del ciclo de vida (F1: Inicio y alineación estratégica, F2: Evaluación de preparación cuántica y viabilidad, F3: Diseño y modelado de la arquitectura híbrida, F4: Implementación, integración y pruebas piloto, F5: Despliegue, monitoreo y gobernanza continua), con sus actividades, tareas, entradas, salidas y flujos detallados.
- **La actividad transversal de revisión de líneas base** y los puntos de control del Órgano de Gobierno Arquitectónico (OGA-1 a OGA-5).
- **El esquema de roles** y su matriz de adaptación según el tamaño y la madurez de la organización (startups, pymes y grandes empresas).
- **El catálogo de los 15 artefactos normativos** con sus plantillas descargables en formatos editables Word (`.docx`) y LaTeX (`.tex`).
- **El estudio exploratorio y la revisión sistemática de literatura (RSL)** con el inventario de estudios primarios (S1–S24) y las referencias bibliográficas en formato IEEE.

---

## Agente consultor PDAEH (Spec-Driven AI Agent)

El agente **PDAEH-Advisor** es un consultor virtual especializado, regido por especificaciones formales anti-alucinación (`PDAEH_SPECIFICATION_V1.md` y `PDAEH_SPECIFICATION_V1.json`). 

Su propósito es interactuar directamente con una empresa u organización, recibir su contexto de negocio, evaluar su arquitectura actual (*As-Is*) y entregar un **diagnóstico de idoneidad cuántica, sugerencias arquitectónicas precisas y una hoja de ruta (mapa paso a paso)** personalizada para implementar el proceso PDAEH.

```mermaid
sequenceDiagram
    autonumber
    actor User as Empresa / Arquitecto
    participant Agent as PDAEH Advisor (LLM)
    participant Spec as Especificación Formal (JSON/MD)
    participant OGA as Checkpoints de Gobernanza (OGA)
    participant Templates as Plantillas de Artefactos (.docx)

    User->>Agent: Contexto organizacional, As-Is y caso de uso
    Agent->>Spec: Consulta reglas ontológicas y restricciones NISQ
    Spec-->>Agent: Retorna invariantes (5 Fases, 10 Elementos, 15 Artefactos)
    Agent->>Agent: Diagnóstico de ventaja cuántica & Algoritmos (QAOA, VQE, etc.)
    Agent->>User: Emite Diagnóstico de Factibilidad y Asignación de Roles
    Agent->>OGA: Estructura plan con compuertas OGA-1 a OGA-5
    Agent->>Templates: Entrega secciones clave para DOE, MTA, DCA...
    Agent-->>User: Roadmap de adopción paso a paso
```

---

## Instrucciones de instalación del agente

El agente está diseñado para configurarse en cualquier plataforma o cliente de preferencia utilizando los archivos disponibles en la carpeta [`agente-pdaeh-consultor/`](./agente-pdaeh-consultor/):

### Opción A: Google Gemini (Gems)
1. Ingresa a [gemini.google.com](https://gemini.google.com) y accede al **Administrador de Gems** (botón *Nuevo Gem*).
2. **Nombre:** `PDAEH Advisor - Consultor de Arquitectura Cuántica`
3. **Instrucciones:** Copia y pega el contenido completo del archivo [`agente-pdaeh-consultor/SYSTEM_PROMPT.md`](./agente-pdaeh-consultor/SYSTEM_PROMPT.md).
4. **Archivos de conocimiento:** Adjunta los archivos [`PDAEH_SPECIFICATION_V1.json`](./agente-pdaeh-consultor/PDAEH_SPECIFICATION_V1.json) y [`PDAEH_SPECIFICATION_V1.md`](./agente-pdaeh-consultor/PDAEH_SPECIFICATION_V1.md).
5. Guarda el Gem.

### Opción B: Anthropic Claude (Projects)
1. En [claude.ai](https://claude.ai), dirígete a la sección **Projects** y haz clic en **Create Project**.
2. **Project Name:** `PDAEH Advisor`
3. **Project Instructions:** Copia y pega el contenido del archivo [`agente-pdaeh-consultor/SYSTEM_PROMPT.md`](./agente-pdaeh-consultor/SYSTEM_PROMPT.md).
4. **Project Knowledge:** Adjunta [`agente-pdaeh-consultor/PDAEH_SPECIFICATION_V1.json`](./agente-pdaeh-consultor/PDAEH_SPECIFICATION_V1.json) y [`PDAEH_SPECIFICATION_V1.md`](./agente-pdaeh-consultor/PDAEH_SPECIFICATION_V1.md).

### Opción C: OpenAI ChatGPT (Custom GPT)
1. En [chatgpt.com](https://chatgpt.com), ve a **Explore GPTs** y haz clic en **+ Create** (pestaña **Configure**).
2. **Name:** `PDAEH Advisor`
3. **Instructions:** Pega el contenido íntegro de [`agente-pdaeh-consultor/SYSTEM_PROMPT.md`](./agente-pdaeh-consultor/SYSTEM_PROMPT.md).
4. **Knowledge:** Sube [`PDAEH_SPECIFICATION_V1.json`](./agente-pdaeh-consultor/PDAEH_SPECIFICATION_V1.json) y [`PDAEH_SPECIFICATION_V1.md`](./agente-pdaeh-consultor/PDAEH_SPECIFICATION_V1.md).
5. Guarda y publica.

---

## Ejemplo práctico de uso y sugerencias del agente

### Consulta inicial del usuario:
> *"Somos una PYME de logística con un equipo de 16 desarrolladores. Operamos con microservicios en la nube (AWS). Buscamos resolver la optimización de rutas de última milla con ventanas de tiempo para 400 vehículos, pues los algoritmos clásicos tardan más de 3 horas en converger. ¿Cómo nos diagnostica el marco PDAEH y cuál es el mapa paso a paso para aplicarlo?"*

### Respuesta y mapa paso a paso entregado por el agente:

```markdown
# Diagnóstico y hoja de ruta metodológica PDAEH

## 1. Resumen del perfilado y diagnóstico de idoneidad
- **Tipo de organización:** PYME (16 ingenieros).
- **Problema de negocio:** Optimización combinatoria de ruteo de vehículos (VRP / TSP extendido) con ventanas horarias.
- **Complejidad y familia algorítmica:** Problema de optimización combinatoria NP-hard con formulación matemática cuadrática binaria (QUBO). Algoritmos híbridos idóneos: QAOA (Quantum Approximate Optimization Algorithm) o Quantum Annealing.
- **Régimen tecnológico sugerido:** Iniciar con simulación clásica en entorno local con modelos de ruido (Qiskit Aer / statevector) y posterior ejecución híbrida desacoplada mediante AWS Braket hacia procesadores cuánticos NISQ reales con técnicas de mitigación de error de lectura.

## 2. Asignación metodológica de roles (PDAEH E6 para PYME)
- **AEP (Arquitecto empresarial principal):** Asumido por el CTO o líder de arquitectura.
- **ASP (Arquitecto de solución principal):** Ingeniero de software principal (diseño de interfaces REST/gRPC y componentes híbridos).
- **AIP (Arquitecto de plataforma e infraestructura):** Ingeniero Cloud / DevOps (gestión de pipelines CI/CD y colas asíncronas hacia el proveedor cuántico).
- **EQP (Especialista en computación cuántica):** Consultor externo o investigador cuántico por horas (diseño del circuito cuántico, formulación QUBO y transpilación).
- **LNP (Líder de negocio y producto):** Director de operaciones / logística (definición de KPIs y retorno de inversión).
- **OGA (Órgano de gobierno arquitectónico):** Comité colegiado directivo integrado por el CTO, el director de operaciones y el asesor cuántico.
- **ASecP / GEP / GPA:** Asumidos de manera transversal por el CTO y el equipo DevOps.

## 3. Hoja de ruta paso a paso para la aplicación del proceso (Fases F1 a F5)

### Fase 1: Inicio y alineación estratégica
- **Paso 1.1:** Cuantificar el caso de negocio definiendo metas de reducción de tiempo de ruteo y costos de combustible.
- **Paso 1.2:** Mapear la correspondencia entre los objetivos corporativos y las capacidades cuánticas esperadas.
- **Paso 1.3:** Formalizar el alcance del proyecto híbrido y el compromiso directivo.
- **Artefactos a diligenciar:** `DOE` (Documento de objetivos empresariales), `MTA` (Matriz de trazabilidad), `DCA` (Acta de constitución de la arquitectura).
- **Punto de control OGA-1:** Aprobación del caso de negocio y patrocinio directivo para continuar.

### Fase 2: Evaluación de preparación cuántica y viabilidad
- **Paso 2.1:** Auditar la infraestructura actual en AWS, APIs y calidad de los datos de despacho logístico.
- **Paso 2.2:** Formular el modelo matemático QUBO y realizar benchmarking teórico frente a algoritmos clásicos (OR-Tools, Gurobi).
- **Paso 2.3:** Evaluar los costos estimados por ejecución en procesadores cuánticos NISQ.
- **Artefactos a diligenciar:** `MSP` (Matriz de priorización de casos de uso), `DPV` (Documento de preparación y viabilidad técnica), `DNA` (Diagnóstico As-Is).
- **Punto de control OGA-2:** Veredicto formal de factibilidad computacional del caso QUBO.

### Fase 3: Diseño y modelado de la arquitectura híbrida
- **Paso 3.1:** Seleccionar los patrones arquitecturales híbridos: Split Execution y Hybrid Variational Loop.
- **Paso 3.2:** Modelar las vistas del sistema híbrido extendiendo UML con estereotipos cuánticos.
- **Paso 3.3:** Construir la matriz de atributos de calidad (árbol de utilidad) balanceando latencia de red, tiempo de coherencia y fidelidad.
- **Artefactos a diligenciar:** `ITA` (Trade-Offs arquitecturales), `DVA` (Vistas arquitecturales híbridas), `MAC` (Matriz de atributos de calidad).
- **Punto de control OGA-3:** Certificación y aprobación del diseño arquitectural híbrido.

### Fase 4: Implementación, integración y pruebas piloto
- **Paso 4.1:** Desarrollar el prototipo piloto en Qiskit o Amazon Braket SDK conectado a la cola de microservicios en AWS.
- **Paso 4.2:** Implementar estrategias de mitigación de ruido (Zero-Noise Extrapolation y Readout Error Mitigation).
- **Paso 4.3:** Ejecutar el banco de ensayos comparativo entre el algoritmo clásico y la solución híbrida.
- **Artefactos a diligenciar:** `DEA` (Estrategia de adquisición y acceso cuántico), `DCO` (Criterios de mitigación de ruido), `BER` (Banco de ensayos del piloto).
- **Punto de control OGA-4:** Aprobación de los resultados experimentales y autorización de avance.

### Fase 5: Despliegue, monitoreo y gobernanza continua
- **Paso 5.1:** Desplegar el servicio de optimización híbrido en producción con mecanismos de fallback clásico en caso de indisponibilidad del proveedor cuántico.
- **Paso 5.2:** Establecer el cuadro de mando de monitoreo para telemetría de fidelidad de resultados y consumo de créditos de QPU.
- **Paso 5.3:** Planificar la evolución de la arquitectura hacia nuevos procesadores y migración de ciberseguridad post-cuántica (PQC).
- **Artefactos a diligenciar:** `CEP` (Cuadro de mando y monitoreo), `CPD` (Criterios de paso a producción), `LBA` (Línea base y plan de evolución).
- **Punto de control OGA-5:** Evaluación de retorno de inversión y evolución arquitectural continua.

## 4. Sugerencia y próxima acción inmediata
Descargue la plantilla oficial de la Fase 1: **Documento de objetivos empresariales (DOE)** desde el portal web en formato `.docx` y formalice las metas de negocio del caso logístico para someterlo a la primera revisión del comité **OGA-1**.
```

---

## Estructura del repositorio

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

## Seguridad y gobernanza

Consulta [SECURITY.md](./SECURITY.md) para conocer las políticas de reporte de vulnerabilidades, protección de credenciales de plataformas cuánticas y lineamientos de ciberseguridad post-cuántica (PQC).

---

## Publicaciones científicas vinculadas

1. **Revisión sistemática de literatura (RSL):**
   * SciELO / Ingenierías USBMed: [doi.org/10.21500/20275846.6433](https://doi.org/10.21500/20275846.6433)
2. **Armonización de modelos y elementos:**
   * Universidad Cooperativa de Colombia: [doi.org/10.16925/gcsc.130](https://doi.org/10.16925/gcsc.130)
3. **Proceso metodológico PDAEH:**
   * JIISIC 2026: *A Process for Defining Hybrid Classical-Quantum Enterprise Architectures*.
