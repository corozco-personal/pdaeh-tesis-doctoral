# Script to generate rich interactive Enterprise Architecture SVG diagrams for PDAEH
# Each scale (Startup, PYME, Corporacion) gets a dedicated comprehensive 5-Tier / 10-Element architecture diagram

def get_rich_diagram(scale_key):
    if scale_key == "startup":
        title_tag = "MICROEMPRESA / STARTUP: SCORING Y QML EN CLOUD SERVERLESS"
        gov_role = "AEP (Rol Central Multifuncional: CTO / Lead Architect) · Revisión colegiada con Dirección"
        f1_artifacts = "DOE-v1 (Objetivos y Precisión Scoring) | DCA-v1 (Presupuesto Cloud y Cuotas API)"
        f2_artifacts = "DPV-v1 (Vistas: Funcional Clásica / Kernel Cuántico) | DNA-v1 (Abstracción) | GDA-v1"
        classical_box1_title = "Capa Clásica: Ingesta Serverless & APIs (As-Is)"
        classical_box1_desc = "FastAPI en Cloud Run · Autenticación JWT · Validación de solicitudes"
        classical_box2_title = "Pipeline ETL y Normalización Clásica"
        classical_box2_desc = "Limpieza de datos, escalado MinMax a [0, 2pi], reducción PCA previa"
        f3_f5_box_title = "Dimensión DCD (Fase 3 & Fase 5): Atributos y Patrones"
        f3_f5_box_desc = "E6: MAC (Fidelidad, Costo por llamada, Latencia) · E7/E8: CEP (Broker, Strategy, Adapter)"
        int_box1_title = "Conector Híbrido Asíncrono (DEA / DCO / CEP)"
        int_box1_desc = "Cola Celery / Redis Broker · Fallback automático a XGBoost clásico por timeout"
        int_box2_title = "Codificador de Características Cuánticas (QML)"
        int_box2_desc = "Transformador a Feature Map ZZ (Espacio de Hilbert de alta dimensionalidad)"
        f4_box_title = "Fase 4: Catálogo y Reutilización (DEA / DCO / BER)"
        f4_box_desc = "E9: Contratos OpenAPI/gRPC para inferencia · E10: Conectores SDK reutilizables en BER"
        q_box1_title = "1. Simulación Local NISQ con Ruido (90% cargas)"
        q_box1_desc = "PennyLane / Qiskit Aer con emulación de ruido térmico y lectura"
        q_box2_title = "2. Coprocesador Físico QPU Cloud (Validación)"
        q_box2_desc = "IBM Quantum / AWS Braket · Lotes reducidos para cómputo de kernel cuántico"
        oga_gates = "Compuertas de Control del Gobierno Arquitectónico: OGA-1 (Estratégico) -> OGA-2 (Conceptual) -> OGA-3 (Estructural) -> OGA-4 (Materialización) -> OGA-5 (Sistematización y Cierre)"

    elif scale_key == "corporacion":
        title_tag = "GRAN EMPRESA / CORPORACIÓN: QUÍMICA CUÁNTICA & HPC HÍBRIDO CO-DISEÑADO"
        gov_role = "AEP + ASP + AIP + ADP + ASecP + GPA + SE dedicados · ARB (Architecture Review Board formal)"
        f1_artifacts = "DOE-v1 (Afinidad Molecular y ROI) | DCA-v1 (Soberanía y Compliance) | MSP-v1"
        f2_artifacts = "DPV-v1 (Vistas HPC/QPU) | DNA-v1 (Abstracción en capas) | GDA-v1 (Léxico Cuántico)"
        classical_box1_title = "Clúster HPC Corporativo: Gestor Slurm & MPI (As-Is)"
        classical_box1_desc = "Jobs paralelos de memoria compartida · Orquestación masiva distribuida"
        classical_box2_title = "Optimizador Clásico de Gradientes Químicos"
        classical_box2_desc = "Algoritmos COBYLA / SPSA / L-BFGS-B ejecutados en nodos de alta frecuencia"
        f3_f5_box_title = "Dimensión DCD (Fase 3 & Fase 5): Atributos y Patrones"
        f3_f5_box_desc = "E6: MAC (Fidelidad ZNE, Latencia RDMA, PQC) · E7/E8: CEP (Co-Procesador, Pipe & Filter)"
        int_box1_title = "Bus de Integración Híbrida HPC-QPU (DEA / DCO)"
        int_box1_desc = "Canales de latencia sub-microsegundo (CUDA-Q / MPI) con cifrado poscuántico ML-KEM"
        int_box2_title = "Compilador VQE y Mitigador de Ruido Activo"
        int_box2_desc = "Mapeo fermiónico Bravyi-Kitaev · Zero-Noise Extrapolation (ZNE / Mitiq)"
        f4_box_title = "Fase 4: Catálogo y Reutilización (DEA / DCO / BER)"
        f4_box_desc = "E9: Componentes estructurales de simulación molecular · E10: Microservicios en BER corporativa"
        q_box1_title = "1. Simulador Cuántico GPU Masivo (CUDA-Q)"
        q_box1_desc = "Validación de circuitos hamiltonianos de hasta 40 cúbits con emulación sin pérdidas"
        q_box2_title = "2. QPU Física Dedicada (Superconductora / Trampas de Iones)"
        q_box2_desc = "Hardware cuántico comercial (IBM Quantum / Quantinuum / Google Quantum AI)"
        oga_gates = "Compuertas Colegiadas Vinculantes: OGA-1 (Aprobación Estratégica) -> OGA-2 (Aval Conceptual) -> OGA-3 (Aval Estructural) -> OGA-4 (Línea Base Materializada) -> OGA-5 (Certificación y Cierre)"

    else: # pyme
        title_tag = "PEQUEÑA Y MEDIANA EMPRESA (PYME): OPTIMIZACIÓN COMBINATORIA Y RUTEO DINÁMICO"
        gov_role = "Estructura Equilibrada: AEP (CTO) + ASP (Dev Lead) + AIP/ASecP (DevOps) · OGA Semiformal"
        f1_artifacts = "DOE-v1 (Reducción Km/Combustible) | DCA-v1 (SLA Ventanas y Presupuesto Nube)"
        f2_artifacts = "DPV-v1 (Flujo Datos TMS/QUBO) | DNA-v1 (Partición) | GDA-v1 (Glosario)"
        classical_box1_title = "Ecosistema Clásico: Microservicios TMS & Ruteo (As-Is)"
        classical_box1_desc = "Despliegue en Kubernetes (EKS) · Ingesta de pedidos, flotas y clientes en PostgreSQL"
        classical_box2_title = "Solver Heurístico Clásico (Pre-Clustering & Rutas Base)"
        classical_box2_desc = "Google OR-Tools / Heurística Tabu Search para filtrado topológico inicial"
        f3_f5_box_title = "Dimensión DCD (Fase 3 & Fase 5): Atributos y Patrones"
        f3_f5_box_desc = "E6: MAC (Ratio Aproximación, Resiliencia Fallback, Mantenibilidad) · E7/E8: CEP (Mediador, Circuit Breaker)"
        int_box1_title = "Orquestador de Bucle Cerrado & Fallback (DEA / DCO)"
        int_box1_desc = "Conector desacoplado Kafka/RabbitMQ con conmutador automático a solver clásico si la QPU satura"
        int_box2_title = "Traductor Matemático QUBO / Hamiltoniano Ising"
        int_box2_desc = "Transformación de restricciones de ventanas horarias y carga dinámica a variables binarias"
        f4_box_title = "Fase 4: Catálogo y Reutilización (DEA / DCO / BER)"
        f4_box_desc = "E9: Módulos de orquestación y contratos JSON/Protobuf · E10: Conectores multi-backend en BER"
        q_box1_title = "1. Emulador Clásico de Recocido Cuántico / QAOA"
        q_box1_desc = "Simulación matricial preliminar para verificación de convergencia del grafo QUBO"
        q_box2_title = "2. Procesador Cuántico en Nube (Quantum Annealer / Gate-QPU)"
        q_box2_desc = "D-Wave Advantage / AWS Braket · Aceleración de grafos altamente restringidos"
        oga_gates = "Compuertas de Decisión OGA: OGA-1 (Alineación Operativa) -> OGA-2 (Modelo Conceptual) -> OGA-3 (Atributos de Calidad) -> OGA-4 (Materialización) -> OGA-5 (Catálogos y Cierre)"

    svg = f'''
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 620" width="100%" height="auto" style="background:#ffffff;border:1px solid var(--line);border-radius:6px;font-family:system-ui,-apple-system,sans-serif;margin:1rem 0;box-shadow:0 1px 3px rgba(0,0,0,0.03);">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#18796e" />
            </marker>
            <marker id="arrow-gold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#ca8a04" />
            </marker>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#2563eb" />
            </marker>
          </defs>

          <!-- ENCABEZADO SUPERIOR DEL DIAGRAMA -->
          <rect x="20" y="15" width="880" height="34" rx="4" fill="#0f2e2b" />
          <text x="35" y="37" font-size="12" font-weight="700" fill="#ffffff" letter-spacing="0.05em">ARQUITECTURA EMPRESARIAL HÍBRIDA PRELIMINAR (PDAEH) · {title_tag}</text>

          <!-- NIVEL 1: GOBERNANZA, ESTRATEGIA Y CONCEPTUALIZACIÓN (FASE 1 Y FASE 2) -->
          <rect x="20" y="58" width="880" height="92" rx="5" fill="#f2f7f4" stroke="#18796e" stroke-width="1.5" />
          <rect x="30" y="66" width="310" height="22" rx="3" fill="#18796e" />
          <text x="38" y="81" font-size="11" font-weight="700" fill="#ffffff">CAPA 1: GOBIERNO, ESTRATEGIA & CONCEPTUALIZACIÓN</text>
          <text x="350" y="81" font-size="10.5" font-weight="600" fill="#123b43">Roles: {gov_role}</text>
          
          <!-- Elementos E1, E2, E3, E4 -->
          <rect x="30" y="93" width="415" height="48" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="40" y="110" font-size="10.5" font-weight="700" fill="#0f172a">Fase 1: Elementos E1 (Objetivo) & E2 (Contexto)</text>
          <text x="40" y="126" font-size="9.5" fill="#475569">{f1_artifacts}</text>
          
          <rect x="455" y="93" width="435" height="48" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="465" y="110" font-size="10.5" font-weight="700" fill="#0f172a">Fase 2: Elementos E3 (Abstracción) & E4 (Glosario)</text>
          <text x="465" y="126" font-size="9.5" fill="#475569">{f2_artifacts}</text>

          <!-- LÍNEA DE FLUJO DE GOBIERNO A EJECUCIÓN -->
          <line x1="460" y1="150" x2="460" y2="168" stroke="#18796e" stroke-width="2" marker-end="url(#arrow)" />

          <!-- NIVEL 2: ECOSISTEMA EMPRESARIAL CLÁSICO AS-IS (ESTRUCTURA E5 BASE) -->
          <rect x="20" y="172" width="415" height="150" rx="5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" />
          <rect x="30" y="180" width="260" height="20" rx="3" fill="#475569" />
          <text x="38" y="194" font-size="10.5" font-weight="700" fill="#ffffff">CAPA 2: ECOSISTEMA CLÁSICO EXISTENTE (As-Is)</text>

          <rect x="30" y="206" width="395" height="48" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="40" y="224" font-size="10.5" font-weight="600" fill="#1e293b">{classical_box1_title}</text>
          <text x="40" y="240" font-size="9.5" fill="#64748b">{classical_box1_desc}</text>

          <rect x="30" y="260" width="395" height="52" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="40" y="278" font-size="10.5" font-weight="600" fill="#1e293b">{classical_box2_title}</text>
          <text x="40" y="296" font-size="9.5" fill="#64748b">{classical_box2_desc}</text>

          <!-- CONEXIÓN CLÁSICO A CONECTOR HÍBRIDO -->
          <line x1="435" y1="247" x2="465" y2="247" stroke="#ca8a04" stroke-width="2" marker-end="url(#arrow-gold)" />

          <!-- NIVEL 3: CAPA DE INTEGRACIÓN HÍBRIDA & DESACOPLAMIENTO PDAEH -->
          <rect x="475" y="172" width="425" height="150" rx="5" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5" />
          <rect x="485" y="180" width="320" height="20" rx="3" fill="#ca8a04" />
          <text x="493" y="194" font-size="10.5" font-weight="700" fill="#ffffff">CAPA 3: INTEGRACIÓN HÍBRIDA (Fases 3 y 4 · DCO / DEA)</text>

          <rect x="485" y="206" width="405" height="48" rx="4" fill="#ffffff" stroke="#fde047" />
          <text x="495" y="224" font-size="10.5" font-weight="700" fill="#854d0e">{int_box1_title}</text>
          <text x="495" y="240" font-size="9.5" fill="#a16207">{int_box1_desc}</text>

          <rect x="485" y="260" width="405" height="52" rx="4" fill="#ffffff" stroke="#fde047" />
          <text x="495" y="278" font-size="10.5" font-weight="700" fill="#854d0e">{int_box2_title}</text>
          <text x="495" y="296" font-size="9.5" fill="#a16207">{int_box2_desc}</text>

          <!-- NIVEL TRANSVERSAL INTERMEDIO: ATRIBUTOS DE CALIDAD (E6), PATRONES (E7/E8), COMPONENTES (E9) Y REUTILIZACIÓN (E10) -->
          <rect x="20" y="332" width="880" height="90" rx="5" fill="#f0f7ff" stroke="#2563eb" stroke-width="1.5" />
          <rect x="30" y="340" width="360" height="20" rx="3" fill="#2563eb" />
          <text x="38" y="354" font-size="10.5" font-weight="700" fill="#ffffff">CAPA TRANSVERSAL: DIMENSIÓN DE CALIDAD & SISTEMATIZACIÓN</text>

          <!-- Caja E6, E7, E8 -->
          <rect x="30" y="366" width="415" height="48" rx="4" fill="#ffffff" stroke="#bfdbfe" />
          <text x="40" y="383" font-size="10.5" font-weight="700" fill="#1e3a8a">{f3_f5_box_title}</text>
          <text x="40" y="400" font-size="9.5" fill="#1e40af">{f3_f5_box_desc}</text>

          <!-- Caja E9, E10 -->
          <rect x="455" y="366" width="435" height="48" rx="4" fill="#ffffff" stroke="#bfdbfe" />
          <text x="465" y="383" font-size="10.5" font-weight="700" fill="#1e3a8a">{f4_box_title}</text>
          <text x="465" y="400" font-size="9.5" fill="#1e40af">{f4_box_desc}</text>

          <!-- CONEXIÓN CONECTOR A INFRAESTRUCTURA CUÁNTICA -->
          <line x1="685" y1="322" x2="685" y2="430" stroke="#18796e" stroke-width="2" stroke-dasharray="4" marker-end="url(#arrow)" />

          <!-- NIVEL 4: CAPA DE ACELERACIÓN CUÁNTICA NISQ (FÍSICA & SIMULADA) -->
          <rect x="20" y="432" width="880" height="98" rx="5" fill="#f9fafb" stroke="#374151" stroke-width="1.5" />
          <rect x="30" y="440" width="290" height="20" rx="3" fill="#374151" />
          <text x="38" y="454" font-size="10.5" font-weight="700" fill="#ffffff">CAPA 4: ACELERACIÓN CUÁNTICA (Era NISQ · E5 / E9)</text>

          <rect x="30" y="466" width="415" height="54" rx="4" fill="#ffffff" stroke="#d1d5db" />
          <text x="40" y="485" font-size="10.5" font-weight="700" fill="#111827">{q_box1_title}</text>
          <text x="40" y="503" font-size="9.5" fill="#4b5563">{q_box1_desc}</text>

          <rect x="455" y="466" width="435" height="54" rx="4" fill="#ffffff" stroke="#d1d5db" />
          <text x="465" y="485" font-size="10.5" font-weight="700" fill="#111827">{q_box2_title}</text>
          <text x="465" y="503" font-size="9.5" fill="#4b5563">{q_box2_desc}</text>

          <!-- NIVEL INFERIOR: GOBERNANZA TRANSVERSAL Y COMPUERTAS OGA (F1 a F5) -->
          <rect x="20" y="540" width="880" height="65" rx="5" fill="#fcf8f2" stroke="#854d0e" stroke-width="1.2" />
          <text x="35" y="560" font-size="10.5" font-weight="700" fill="#854d0e">GOBERNANZA TRANSVERSAL DE LA ARQUITECTURA (Órgano de Gobierno Arquitectónico - OGA)</text>
          <text x="35" y="579" font-size="9.8" fill="#713f12">{oga_gates}</text>
          <text x="35" y="595" font-size="9" fill="#a16207">Trazabilidad Total: Matriz MTA (Fase 1) -> Modelo MAQ (Fase 3) -> Catálogo CEP y Biblioteca BER (Fase 5) garantizan evolución normada.</text>
        </svg>
    '''
    return svg
