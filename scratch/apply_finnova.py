# Script to update app.js with FinNova JIISIC 2026 data and embedded enterprise architecture diagram

import re

with open("scratch/finnova_diagram.svg", "r", encoding="utf-8") as f:
    finnova_svg = f.read().strip()

finnova_use_case = "Caso FinNova (Artículo JIISIC 2026): Empresa mediana de servicios financieros (PYME) especializada en gestión de inversiones y análisis de carteras para clientes institucionales y profesionales. La firma busca incorporar capacidad de optimización cuántica asistida para problemas complejos de rebalanceo dinámico de portafolio y optimización combinatoria multiobjetivo bajo restricciones de riesgo, preservando el control clásico integral sobre datos financieros, reglas de negocio, cumplimiento normativo y cálculo de riesgo fáctico."

finnova_stack = "Plataforma analítica clásica establecida (As-Is): Servicios de datos de mercado (Market Data Services), servicios de gestión de portafolios (Portfolio Services), motor de análisis y riesgo financiero (Risk & Analytics Services), servicios de cumplimiento normativo (Compliance Services) y generación de reportes (Reporting Services), desplegados en arquitectura de microservicios sobre clúster en la nube privada con bases de datos relacionales y series temporales."

finnova_alg_rationale = """El caso de <strong>FinNova</strong>, documentado en el artículo de investigación de las <strong>JIISIC 2026</strong>, representa el escenario de referencia para una mediana empresa de servicios financieros (PYME) que aborda el <strong>rebalanceo dinámico de carteras de inversión</strong>. La combinatoria de selección de activos bajo restricciones regulatorias, costos de transacción y covarianzas no lineales excede la capacidad de respuesta de los métodos cuadráticos clásicos cuando el universo de activos y horizontes temporales escala. La formulación matemática adecuada modela el problema como una <strong>Optimización Binaria Cuadrática No Restringida (QUBO)</strong> o Hamiltoniano de Ising, solucionable mediante <em>Quantum Approximate Optimization Algorithm (QAOA)</em> o <em>Quantum Annealing</em>. El principio rector de diseño prescribe un <strong>enfoque híbrido de co-procesamiento desacoplado</strong>: la plataforma clásica de FinNova preserva el gobierno de datos sensibles, el cumplimiento normativo y el cálculo de riesgo determinista, derivando al coprocesador cuántico externo únicamente la resolución del núcleo combinatorio estocástico."""

finnova_quality_rationale = """
        <p style="margin:0 0 0.6rem;">Conforme a la especificación del caso FinNova (JIISIC 2026), los drivers y atributos de calidad arquitectónicos críticos (Elemento E6 - Dimensión DCD) son:</p>
        <ul style="padding-left:1.3rem;margin:0 0 0.4rem;line-height:1.7;">
          <li><strong>Independencia de Proveedor Cuántico (Provider Independence):</strong> La arquitectura no debe depender de una plataforma o SDK propietario (IBM, AWS, D-Wave o Microsoft); debe incorporar una capa de integración neutral que permita intercambiar el backend cuántico sin alterar el core financiero de FinNova.</li>
          <li><strong>Gobernanza y Privacidad de Datos Financieros:</strong> Los datos de tenencia de clientes institucionales y las matrices de riesgo confidenciales jamás se transfieren en crudo a la QPU; se extraen únicamente índices anonimizados y matrices de covarianza normalizadas para el modelo QUBO.</li>
          <li><strong>Resiliencia Operativa y Fallback Clásico:</strong> Si la cola del servicio cuántico en la nube supera el SLA establecido o experimenta indisponibilidad, el sistema conmuta automáticamente a optimizadores clásicos cuadráticos (SLSQP / Markowitz clásico) sin interrumpir la operación del gestor de inversiones.</li>
          <li><strong>Trazabilidad y Cumplimiento Normativo (Auditoría Financiera):</strong> Registro inmutable de cada decisión de optimización, parámetros de ejecución en la QPU y resultados aproximados para responder ante auditorías de los entes reguladores de valores.</li>
        </ul>
        <p style="margin:0.4rem 0 0;font-size:0.88rem;color:var(--muted);">Estos atributos se formalizan y ponderan en el artefacto <a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC (Marco de Evaluación de Atributos)</a>.</p>
"""

finnova_role_narrative = """
        <p style="margin:0 0 0.6rem;">En concordancia con el perfil organizacional para PYMEs validado en el artículo JIISIC 2026, FinNova despliega una estructura de responsabilidades balanceada y adaptada a sus capacidades:</p>
        <ul style="padding-left:1.3rem;margin:0;line-height:1.7;">
          <li><strong>Arquitecto(a) Empresarial del Proceso (AEP):</strong> Asume la responsabilidad global de la arquitectura híbrida y cubre operativamente las funciones de Arquitecto(a) de Datos (ADP).</li>
          <li><strong>Arquitecto(a) de Integración del Proceso (AIP):</strong> Coordina la integración técnica entre los microservicios clásicos y la capa cuántica, cubriendo operativamente las funciones de seguridad (ASecP).</li>
          <li><strong>Gestor de Portafolio Arquitectónico (GPA):</strong> Conecta y alinea la iniciativa cuántica con las prioridades de inversión estratégica del negocio de inversión.</li>
          <li><strong>Especialista Tecnológico Cuántico (ETC):</strong> Experto externo contratado bajo demanda para el diseño del algoritmo cuántico y la compilación de circuitos.</li>
          <li><strong>Órgano de Gobierno Arquitectónico (OGA):</strong> Opera mediante un esquema de revisión periódica colegiada (Comité Técnico de FinNova) en cada una de las compuertas de decisión, en lugar de un órgano permanente pesado.</li>
        </ul>
"""

finnova_roadmap_narrative = """
        <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
          <li><strong>Fase 1 (Definición estratégica - E1, E2):</strong> Define el objetivo arquitectónico de FinNova (E1) enfocado en optimización asistida sin reemplazar la plataforma clásica, y el contexto y restricciones (E2) en los artefactos <a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">DOE</a> y <a href="plantilla.html?id=DCA" style="color:var(--green);font-weight:700;">DCA</a>. Aprobación en <strong>Compuerta OGA-1</strong>.</li>
          <li><strong>Fase 2 (Formalización conceptual - E3, E4):</strong> Establece el marco conceptual común separando las perspectivas de negocio, arquitectura y tecnología (<a href="plantilla.html?id=DNA" style="color:var(--green);font-weight:700;">DNA</a> / <a href="plantilla.html?id=DPV" style="color:var(--green);font-weight:700;">DPV</a>) y consolida el vocabulario unificado financiero-cuántico (<a href="plantilla.html?id=GDA" style="color:var(--green);font-weight:700;">GDA</a>). Aprobación en <strong>Compuerta OGA-2</strong>.</li>
          <li><strong>Fase 3 (Configuración estructural - E5, E6):</strong> Modela los atributos de calidad (<a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC</a>) y las estructuras de integración desacoplada y seguridad independiente del proveedor (<a href="plantilla.html?id=MEA" style="color:var(--green);font-weight:700;">MEA</a>). Aprobación en <strong>Compuerta OGA-3</strong>.</li>
          <li><strong>Fase 4 (Materialización arquitectónica - E9, E10):</strong> Cataloga los componentes de software clásicos, de orquestación y de integración cuántica (<a href="plantilla.html?id=DEA" style="color:var(--green);font-weight:700;">DEA</a> / <a href="plantilla.html?id=DCO" style="color:var(--green);font-weight:700;">DCO</a>) e indexa los elementos reutilizables en la <a href="plantilla.html?id=BER" style="color:var(--green);font-weight:700;">BER</a>. Aprobación en <strong>Compuerta OGA-4</strong>.</li>
          <li><strong>Fase 5 (Sistematización del diseño - E7, E8):</strong> Formaliza el Catálogo de Estilos y Patrones (<a href="plantilla.html?id=CEP" style="color:var(--green);font-weight:700;">CEP</a>) con el patrón Mediador y Fallback Clásico, estableciendo la Línea Base Arquitectónica consolidada de FinNova tras la aprobación en la <strong>Compuerta OGA-5</strong>.</li>
        </ul>
"""

finnova_immediate_action = """Convocar al comité OGA simplificado de FinNova (AEP, AIP, GPA y Dirección Financiera) y formalizar la Línea Base de la Fase 1 completando las plantillas de <a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">DOE (Objetivos Estratégicos)</a> y <a href="plantilla.html?id=DCA" style="color:var(--green);font-weight:700;">DCA (Contexto y Restricciones)</a>, fijando la meta de mejora de latencia de rebalanceo y los criterios de independencia de proveedor cuántico."""

finnova_synthesis = """
        <!-- SECCIÓN 1: RECOMENDACIONES ARQUITECTÓNICAS -->
        <div style="margin:1.4rem 0;">
          <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--navy);font-weight:700;">1. Recomendaciones Arquitectónicas Estratégicas para FinNova (JIISIC 2026)</h5>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Capa de Integración Cuántica Neutral (Provider-Agnostic Layer):</strong> Interponer una capa middleware de integración cuántica entre la plataforma clásica de FinNova y las nubes cuánticas externas para evitar el bloqueo tecnológico con proveedores propietarios.</li>
            <li><strong>Preservación de Soberanía Operativa Clásica:</strong> Mantener los servicios de datos de mercado, cálculo de riesgo regulatorio, cumplimiento y generación de informes íntegramente en la plataforma clásica de FinNova; la computación cuántica se incorpora como servicio complementario de aceleración, no como reemplazo.</li>
            <li><strong>Gobernanza Proporcional y Trazabilidad de Decisiones:</strong> Aplicar las 5 compuertas OGA de PDAEH asegurando que cada artefacto (desde el DOE hasta el CEP) conserve trazabilidad estricta y sirva como activo reutilizable para futuras iniciativas cuánticas de la firma.</li>
          </ul>
        </div>

        <!-- SECCIÓN 2: PATRONES ARQUITECTÓNICOS Y DE DISEÑO -->
        <div style="margin:1.4rem 0;background:#f9fbfa;border:1px solid var(--line);border-radius:5px;padding:1.2rem;">
          <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--green);font-weight:700;">2. Patrones Arquitectónicos y de Diseño Híbrido Aplicables</h5>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Patrón Mediador Híbrido Cuántico-Clásico (Hybrid Quantum Mediator):</strong> Desacopla la invocación de rebalanceo de carteras; orquesta el preprocesamiento de series temporales, construye la formulación QUBO, monitorea la cola en la QPU y reconstruye la asignación óptima de pesos para el gestor financiero.</li>
            <li><strong>Patrón Circuit Breaker y Fallback Clásico:</strong> Si el proveedor cuántico presenta latencias superiores a las toleradas en la ventana de negociación o errores de decoherencia elevados, conmuta instantáneamente al optimizador clásico cuadrático de contingencia.</li>
            <li><strong>Patrón Adaptador Multi-Plataforma (Quantum Multi-Backend Adapter):</strong> Estandariza la invocación hacia diversos procesadores cuánticos físicos o simuladores (D-Wave Advantage, IBM Quantum Runtime, Azure Quantum) a través de contratos de interfaz unificados (OpenQASM / QIR).</li>
            <li><strong>Patrón Mapeador de Restricciones QUBO (QUBO Data Mapper):</strong> Traduce las restricciones financieras de inversión (mínimos/máximos de exposición, límites sectoriales, liquidez) en términos de penalización cuadrática sobre variables binarias.</li>
          </ul>
        </div>

        <!-- SECCIÓN 3: PRINCIPIOS ARQUITECTÓNICOS -->
        <div style="margin:1.4rem 0;">
          <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--navy);font-weight:700;">3. Principios Rectores de la Arquitectura Empresarial de FinNova</h5>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Principio de Complementariedad Arquitectónica:</strong> El componente cuántico actúa como acelerador especializado; el control operativo, la validación de negocio y el almacenamiento de posiciones residen siempre en la plataforma clásica de FinNova.</li>
            <li><strong>Principio de Neutralidad de Infraestructura (Zero Vendor Locking):</strong> Ninguna interfaz de software de FinNova se codifica contra contratos propietarios de hardware cuántico; toda interacción se encapsula en la Capa de Integración Cuántica.</li>
            <li><strong>Principio de Privacidad y Cumplimiento por Diseño:</strong> Los datos identificables de carteras de clientes jamás abandonan el perímetro de seguridad clásico de FinNova; únicamente se transfieren matrices matemáticas abstractas de optimización.</li>
          </ul>
        </div>

        <!-- SECCIÓN 4: MODELOS Y TECNOLOGÍAS SUGERIDAS -->
        <div style="margin:1.4rem 0;background:#f8fafc;border:1px solid var(--line);border-radius:5px;padding:1.2rem;">
          <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:#1e40af;font-weight:700;">4. Modelos Algorítmicos y Tecnologías Recomendadas para FinNova</h5>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Modelos y Algoritmos:</strong> Quantum Approximate Optimization Algorithm (QAOA); Recocido Cuántico (Quantum Annealing); Optimizadores Cuadráticos Clásicos de Soporte (Markowitz / SLSQP / COBYLA).</li>
            <li><strong>Frameworks Cuánticos:</strong> D-Wave Ocean SDK; Qiskit Optimization (IBM); Azure Quantum Workspace con conectores neutrales.</li>
            <li><strong>Plataforma Clásica:</strong> Microservicios en Python/Java sobre clúster Kubernetes; PostgreSQL para transaccionalidad y TimescaleDB para series temporales de activos financieros; Colas asíncronas RabbitMQ / Kafka.</li>
          </ul>
        </div>

        <!-- SECCIÓN 5: ARQUITECTURAS IMPLEMENTADAS EN EMPRESAS SIMILARES -->
        <div style="margin:1.4rem 0;background:#fefbf3;border-left:4px solid #d4a017;padding:1.2rem;border-radius:4px;">
          <h5 style="margin:0 0 0.5rem;font-size:1.02rem;color:#7f5a00;font-weight:700;">5. Casos de Estudio y Arquitecturas Referenciadas en Finanzas (JIISIC 2026)</h5>
          <p style="margin:0 0 0.7rem;font-size:0.93rem;line-height:1.7;">
            El escenario de FinNova sintetiza las decisiones arquitectónicas observadas en instituciones financieras y plataformas de referencia:
          </p>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Caso FinNova (JIISIC 2026):</strong> Demuestra cómo una PYME de servicios financieros estructura una línea base arquitectónica gobernada mediante 5 fases y 10 elementos normalizados, consolidando roles y logrando trazabilidad integral entre objetivos de inversión y contratos de software híbrido.</li>
            <li><strong>BBVA Quantum Lab:</strong> Adoptó un conector genérico en la nube para contrastar la selección de activos clásica frente a recocido cuántico y QAOA, validando la necesidad de desacoplar los sistemas transaccionales bancarios.</li>
            <li><strong>JPMorgan Chase & Co.:</strong> Diseñó pipelines asíncronos para optimización de portafolios de alta dimensión, confirmando la indispensabilidad de patrones de conmutación de contingencia clásica (fallback).</li>
          </ul>
        </div>
"""

# Now, update app.js:
# 1. Update presets object:
with open("app.js", "r", encoding="utf-8") as f:
    text = f.read()

# Replace preset for pyme
p_start = text.find('const presets = {')
p_end = text.find('};', p_start) + 2

new_presets = f'''const presets = {{
    pyme: {{
      useCase: "{finnova_use_case}",
      stack: "{finnova_stack}"
    }},
    startup: {{
      useCase: "Scoring y cálculo de riesgo crediticio no lineal mediante Quantum Machine Learning (QSVM variacional).",
      stack: "Arquitectura Serverless en GCP (Cloud Run, BigQuery) y Python FastAPI."
    }},
    corporacion: {{
      useCase: "Simulación de reactividad y afinidad molecular para descubrimiento acelerado de principios activos farmacéuticos.",
      stack: "Clúster HPC híbrido on-premise + Slurm, interconectado con nubes privadas mediante MPI."
    }},
    inadecuado: {{
      useCase: "Desarrollo de un portal de comercio electrónico con carrito de compras, catálogo de productos y pasarela de pagos.",
      stack: "Next.js con Node.js, base de datos MongoDB y hosting en Vercel."
    }}
  }};'''

text = text[:p_start] + new_presets + text[p_end:]

# 2. Update the pyme branch in runEvaluation:
# Locate pyme branch
p_pyme = text.find('} else {', text.find('} else if (size === "corporacion") {'))
p_fullHtml = text.find('const fullHtml = `', p_pyme)

# Build the complete pyme branch
pyme_content = f'''}} else {{
      scaleLabel = "Pequeña y Mediana Empresa (PYME) · Caso FinNova (JIISIC 2026)";
      familyTitle = "Optimización de Portafolios Financieros (QAOA y Quantum Annealing · Caso FinNova)";
      
      algRationale = `{finnova_alg_rationale}`;

      architecturalSynthesis = `{finnova_synthesis}`;

      qualityRationale = `{finnova_quality_rationale}`;

      roleNarrative = `{finnova_role_narrative}`;

      roadmapNarrative = `{finnova_roadmap_narrative}`;

      immediateAction = `{finnova_immediate_action}`;

      diagramSvg = `{finnova_svg}`;
    }}'''

text = text[:p_pyme] + pyme_content + "\n\n    " + text[p_fullHtml:]

with open("app.js", "w", encoding="utf-8") as f:
    f.write(text)

print("app.js updated successfully with FinNova case and complete enterprise architecture diagram. Length:", len(text))
