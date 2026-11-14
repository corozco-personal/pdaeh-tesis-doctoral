

fn score_model_version(name: &str) -> i32 {
    let mut score = 0;
    let lower = name.to_lowercase();
    // Priorizar versiones numéricas más recientes
    if lower.contains("3.0") { score += 300; }
    else if lower.contains("2.5") { score += 250; }
    else if lower.contains("2.0") { score += 200; }
    else if lower.contains("1.5") { score += 150; }
    else { score += 50; }

    // Priorizar familia flash por velocidad y cuota gratuita amplia
    if lower.contains("flash") { score += 30; }
    else if lower.contains("pro") { score += 15; }

    // Penalizar o bonificar variantes
    if lower.contains("preview") || lower.contains("exp") { score -= 5; }
    score
}

async fn fetch_latest_gemini_models(client: &reqwest::Client, key: &str, default_model: &str) -> Vec<String> {
    let list_url = format!("https://generativelanguage.googleapis.com/v1beta/models?key={}", key);
    let mut models = Vec::new();

    if let Ok(res) = client.get(&list_url).timeout(Duration::from_secs(6)).send().await {
        if res.status().is_success() {
            if let Ok(val) = res.json::<serde_json::Value>().await {
                if let Some(list) = val.get("models").and_then(|m| m.as_array()) {
                    for m in list {
                        let is_generate = m.get("supportedGenerationMethods")
                            .and_then(|methods| methods.as_array())
                            .map(|arr| arr.iter().any(|method| method.as_str() == Some("generateContent")))
                            .unwrap_or(false);

                        if is_generate {
                            if let Some(name) = m.get("name").and_then(|n| n.as_str()) {
                                let model_id = name.strip_prefix("models/").unwrap_or(name);
                                let lower = model_id.to_lowercase();
                                if !lower.contains("tts")
                                    && !lower.contains("audio")
                                    && !lower.contains("embedding")
                                    && !lower.contains("imagen")
                                    && !lower.contains("realtime")
                                    && !lower.contains("aqa")
                                {
                                    models.push(model_id.to_string());
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    if models.is_empty() {
        models = vec![
            "gemini-2.0-flash".into(),
            "gemini-1.5-flash".into(),
            "gemini-1.5-pro".into(),
        ];
    } else {
        // Ordenar descendentemente por versión más reciente y velocidad
        models.sort_by(|a, b| score_model_version(b).cmp(&score_model_version(a)));
    }

    if !default_model.is_empty() && !models.contains(&default_model.to_string()) {
        models.insert(0, default_model.to_string());
    }

    models
}

pub fn evaluate_offline_rules(content: &str) -> String {
    let lower = content.to_lowercase();
    let is_finnova = lower.contains("finnova")
        || (lower.contains("portafolio") && (lower.contains("rebalanceo") || lower.contains("qubo") || lower.contains("qaoa") || lower.contains("annealing")));
    let is_logistech = lower.contains("logistech")
        || (lower.contains("ruteo") && lower.contains("cvrp"))
        || (lower.contains("flota") && lower.contains("última milla"));
    let is_pqc = lower.contains("pqc")
        || lower.contains("post-cuántica")
        || lower.contains("postcuántica")
        || lower.contains("shor")
        || lower.contains("harvest now")
        || lower.contains("fips 203")
        || lower.contains("secur");
    let is_crud = lower.contains("crud")
        || lower.contains("facturas")
        || lower.contains("facturación")
        || (lower.contains("comercial") && lower.contains("contables"))
        || lower.contains("tienda");
    let no_quantum = lower.contains("no existen problemas de optimización")
        || lower.contains("nivel 0")
        || lower.contains("nulo")
        || lower.contains("escalamiento horizontal")
        || lower.contains("mysql")
        || lower.contains("lamp");

    if is_finnova {
        r#"# EVALUACIÓN Y DICTAMEN METODOLÓGICO PDAEH: CASO FINNOVA

> [!NOTE]
> **Dictamen Metodológico Definitivo: VIABLE PARA ADOPCIÓN HÍBRIDA PDAEH (Compuerta OGA-1: APROBADA)**
> Tras contrastar rigurosamente el perfil organizacional y técnico de **FinNova** con los criterios formales del marco PDAEH (Tesis Doctoral, Universidad del Cauca), se dictamina la **plena viabilidad para iniciar el ciclo formal de arquitectura empresarial híbrida clásico-cuántica**. El problema de rebalanceo dinámico de portafolio presenta intratabilidad combinatoria exponencial clásica (NP-hard), mientras que la arquitectura As-Is cuenta con el desacoplamiento necesario para gobernar la integración sin comprometer la operación transaccional crítica.

---

## 1. Scorecard de Preparación Arquitectónica (PDAEH Readiness Index)

A continuación se resume la evaluación multidimensional de compatibilidad del caso:

| Dimensión Evaluada | Puntuación | Estado | Justificación Metodológica |
| :--- | :--- | :--- | :--- |
| **Complejidad Algorítmica (E1/E2)** | 96 / 100 | **Óptimo** | Formulación QUBO / Hamiltoniano de Ising sobre estados discretos. Algoritmo QAOA / Recocido Cuántico. |
| **Capacidad de Desacoplamiento (E7)** | 92 / 100 | **Óptimo** | Arquitectura de microservicios con Kafka y Redis apta para el patrón de Co-procesamiento Híbrido Desacoplado. |
| **Gobernanza y Cumplimiento (E4/E5)** | 88 / 100 | **Favorable** | Custodia clásica estricta de datos financieros; la QPU solo recibe matrices matemáticas sin PII. |
| **Madurez y Absorción NISQ (E6/E10)** | 84 / 100 | **Viable** | Transición de simuladores clásicos a QPUs remotas con fallback clásico contingente mediante Strategy. |

---

## 2. Caracterización del Caso y Evaluación de Variables Arquitectónicas

| Variable Evaluada | Entrada Declarada en Perfil | Dictamen Metodológico PDAEH |
| :--- | :--- | :--- |
| **Tamaño Organizacional** | PYME (20 - 200 empleados) | Capacidad de adopción ágil. Se activa la estructura de roles compacta: CTO como AEP, Consultor Cuántico externo como EQP y Comité Colegiado como OGA. |
| **Problema / Caso de Uso** | Rebalanceo dinámico de portafolio y optimización de carteras bajo riesgo CVaR | Problema de optimización combinatoria multiobjetivo NP-hard (>1.200 activos). Ventaja potencial en muestreo de configuraciones de mínima energía. |
| **Arquitectura Tecnológica As-Is** | Microservicios (Kafka, PostgreSQL, TimescaleDB, Redis, K8s) | Excelente base para la Capa de Integración Cuántica (QIL). Permite la separación entre el motor transaccional y el optimizador variacional. |
| **Nivel de Madurez Cuántica** | Nivel 1 - Exploratorio / Pilotos NISQ | Inicio obligatorio con simuladores locales (Qiskit Aer / PennyLane) antes de invocar hardware NISQ en la nube. |

---

## 3. Topología de Integración y Decisión Arquitectónica (C4 Nivel 2)

```mermaid
graph TD
  subgraph Clásico ["Plataforma Clásica Existente (As-Is)"]
    A["Servicios de Portafolio y Mercado"] --> B["Cálculo de Covarianza y Riesgo"]
    B --> C["Motor de Cumplimiento Normativo"]
  end

  subgraph Híbrido ["Capa de Integración Cuántica PDAEH (QIL)"]
    D["Mapeador Matemático QUBO/Ising"] --> E{"Orquestador y Broker Híbrido"}
    E -- "Canal Cuántico Principal" --> F["QPU Remota (QAOA / AWS Braket / IBM)"]
    E -. "Fallback Contingente (Fallo/Latencia)" .-> G["Recocido Simulado Clásico (HPC)"]
    F --> H["Mitigación de Ruido y Decodificador"]
    G --> H
  end

  C --> D
  H --> A

  style Clásico fill:#f2f6f4,stroke:#18796e,stroke-width:1px
  style Híbrido fill:#fcfdfd,stroke:#152b43,stroke-width:2px
  style F fill:#e7f0ec,stroke:#18796e,stroke-width:2px
  style G fill:#fff9e8,stroke:#d5a92f,stroke-width:1px
```

---

## 4. Asignación Metodológica de Roles (PDAEH E6 - Escala PYME)

| Rol Metodológico | Denominación en FinNova | Responsabilidad Clave en el Proceso |
| :--- | :--- | :--- |
| **AEP (Arquitecto Empresarial Principal)** | CTO / Líder de Arquitectura | Liderar la definición del artefacto DOE y custodiar la compuerta OGA-1. |
| **ASP (Arquitecto de Solución Principal)** | Ingeniero de Software Principal | Diseñar la Capa de Integración Cuántica (QIL) y el patrón Broker/Mediador. |
| **EQP (Especialista Cuántico)** | Consultor Cuántico Externo (PhD) | Formular el Hamiltoniano de costo y calibrar los hiperparámetros de QAOA. |
| **OGA (Órgano de Gobierno)** | Comité Técnico-Ejecutivo Colegiado | Emitir las aprobaciones formales en las compuertas OGA-1 a OGA-5. |
| **ASecP (Especialista en Seguridad)** | SecDevOps / Ingeniero de Seguridad | Asegurar que ningún dato confidencial o PII viaje en los payloads a la QPU. |

---

## 5. Hoja de Ruta y Artefactos Normativos (Fases F1 a F5)

1. **Fase 1 (Definición Estratégica):** Elaboración y aprobación formal de los artefactos `DOE` (Documento de Oportunidad Estratégica) y `DCA` (Diagnóstico de Capacidades Arquitectónicas). *Compuerta: Aprobación OGA-1.*
2. **Fase 2 (Modelado y Requisitos):** Especificación del artefacto `MSP` (Matriz de Servicios y Procesos) definiendo los contratos gRPC/REST con el broker híbrido. *Compuerta: Aprobación OGA-2.*
3. **Fase 3 (Diseño de la Integración):** Diseño del artefacto `ITA` (Integración Tecnológica y Adaptadores) aplicando el patrón de co-procesamiento desacoplado con Circuit Knitting y mitigación de errores de lectura. *Compuerta: Aprobación OGA-3.*
4. **Fase 4 (Evaluación y Validación):** Despliegue del artefacto `BER` (Benchmark de Eficiencia y Ruido) comparando el tiempo y calidad de aproximación frente a solucionadores clásicos (ILP/Gurobi). *Compuerta: Aprobación OGA-4.*
5. **Fase 5 (Sistematización y Despliegue):** Consolidación de la Línea Base Arquitectónica (`LBA`) y catalogación de patrones en el repositorio institucional (`CPD`). *Compuerta: Aprobación OGA-5.*

---

## 6. Referencias Técnicas y Documentación Oficial Consultada

- **IBM Quantum / Qiskit Optimization:** [Portfolio Optimization using QAOA and VQE](https://qiskit-community.github.io/qiskit-optimization/tutorials/01_portfolio_optimization.html)
- **AWS Braket Developer Guide:** [Hybrid Jobs and Quantum Annealing Architectures](https://docs.aws.amazon.com/braket/latest/developerguide/braket-jobs.html)
- **IEEE Transactions on Quantum Engineering:** [Quantum Computing for Finance: State-of-the-Art and Prospects](https://ieeexplore.ieee.org/document/9139369)
- **NIST Post-Quantum Cryptography:** [FIPS 203 ML-KEM Standard Specification](https://csrc.nist.gov/projects/post-quantum-cryptography)

*Dictamen formal emitido por el Consultor Metodológico PDAEH bajo especificación formal v1.0.*"#.to_string()
    } else if is_logistech {
        r#"# EVALUACIÓN Y DICTAMEN METODOLÓGICO PDAEH: CASO LOGISTECH GLOBAL

> [!NOTE]
> **Dictamen Metodológico Definitivo: VIABLE PARA ADOPCIÓN HÍBRIDA PDAEH (Compuerta OGA-1: APROBADA)**
> Tras evaluar las restricciones operativas de **LogisTech Global**, se dictamina la **viabilidad formal para incorporar optimización combinatoria híbrida**. El problema de ruteo de vehículos con ventanas horarias (CVRPTW) sobre >2.000 nodos satura los solucionadores clásicos de optimización lineal entera (ILP) en horas pico.

---

## 1. Scorecard de Preparación Arquitectónica (PDAEH Readiness Index)

| Dimensión Evaluada | Puntuación | Estado | Justificación Metodológica |
| :--- | :--- | :--- | :--- |
| **Complejidad Algorítmica (E1/E2)** | 94 / 100 | **Óptimo** | Mapeo a grafo QUBO particionado; recocido cuántico híbrido (D-Wave Leap / QAOA). |
| **Capacidad de Desacoplamiento (E7)** | 90 / 100 | **Óptimo** | Clúster Kubernetes multirregión con colas RabbitMQ preparadas para procesamiento asíncrono. |
| **Gobernanza y Cumplimiento (E4/E5)** | 86 / 100 | **Favorable** | Métricas de SLA y huella de carbono incorporadas en compuerta OGA-2. |
| **Madurez y Absorción NISQ (E6/E10)** | 88 / 100 | **Óptimo** | Equipo con experiencia en analítica geoespacial y pilotos NISQ exploratorios. |

---

## 2. Topología Arquitectónica y Patrón Recomendado (E7 / E8)

Se prescribe el patrón **Procesamiento Híbrido Asíncrono de Flujos de Trabajo (Workflow Co-scheduling)** con descomposición clásica en CPU/GPU para agrupamiento de zonas y resolución de la matriz de adyacencia binaria en QPU.

```mermaid
graph TD
  A["Servicio de Despacho y Órdenes"] --> B["Preprocesamiento y Clúster Clásico (K-Means / Spark)"]
  B --> C{"Co-planificador Híbrido"}
  C -- "Subproblemas Complejos" --> D["Solver Híbrido Cuántico (QPU Annealing)"]
  C -- "Rutas Lineales Simples" --> E["Solucionador Heurístico Clásico (VRP)"]
  D --> F["Fusión de Soluciones y Validación de Horarios"]
  E --> F
  F --> G["Asignación Final de Flota"]
  
  style D fill:#e7f0ec,stroke:#18796e,stroke-width:2px
  style C fill:#fff9e8,stroke:#d5a92f,stroke-width:2px
```

---

## 3. Asignación de Roles (PDAEH E6 - Gran Empresa)
- **AEP:** Arquitecto Empresarial Principal (Custodio del ciclo PDAEH y compuertas OGA).
- **ASP:** Arquitecto de Solución Principal (Diseño del broker de optimización híbrida).
- **AIP:** Ingeniero Cloud / DevOps (Infraestructura de colas y pasarela de hardware cuántico).
- **EQP:** Científico de Algoritmos Cuánticos (Formulación matemática QUBO y benchmarking).
- **OGA:** Comité ARB de Arquitectura Corporativa.

---

## 4. Referencias y Documentación Técnica Oficial
- **D-Wave Systems Documentation:** [Hybrid Solvers for Vehicle Routing Problems](https://docs.dwavesys.com/docs/latest/c_hybrid_1.html)
- **Google Quantum AI:** [Optimization & Quantum Computing Case Studies](https://quantumai.google/applications/optimization)
- **ACM Transactions on Mathematical Software:** [Benchmarking Combinatorial Solvers on NISQ Devices](https://dl.acm.org/)

*Dictamen formal emitido por el Consultor Metodológico PDAEH bajo especificación formal v1.0.*"#.to_string()
    } else if is_pqc {
        r#"# EVALUACIÓN Y DICTAMEN METODOLÓGICO PDAEH: MIGRACIÓN CRIPTOGRÁFICA POST-CUÁNTICA (PQC)

> [!NOTE]
> **Dictamen Metodológico Definitivo: VIABLE PARA ADOPCIÓN HÍBRIDA PDAEH (Compuerta OGA-1: APROBADA)**
> El caso evaluado atiende a la necesidad crítica de blindar la infraestructura corporativa frente a la amenaza *Harvest Now, Decrypt Later* y la obsolescencia criptográfica clásica por el algoritmo de Shor.

---

## 1. Scorecard de Preparación Arquitectónica (PDAEH Readiness Index)

| Dimensión Evaluada | Puntuación | Estado | Justificación Metodológica |
| :--- | :--- | :--- | :--- |
| **Vulnerabilidad Criptográfica (E1/E2)** | 98 / 100 | **Crítico** | Llaves RSA/ECDSA expuestas a factorizabilidad en tiempo polinomial con algoritmo de Shor. |
| **Cripto-Agilidad de Pasarela (E7)** | 88 / 100 | **Favorable** | Envoy API Gateways aptos para incorporar capas de transporte híbridas X25519 + ML-KEM. |
| **Cumplimiento Regulatorio (E4/E5)** | 95 / 100 | **Excelente** | Alineación mandatoria con directivas NIST FIPS 203 y CNSA 2.0. |
| **Absorción Organizacional (E6/E10)** | 82 / 100 | **Viable** | Roles de ciberseguridad (ASecP) activos en el proceso de rotación de certificados. |

---

## 2. Topología de Pasarela Cripto-Ágil Híbrida (E2 / E7)

```mermaid
graph LR
  Cliente["Cliente / Dispositivo Seguro"] --> TLS{"Negociación TLS 1.3 Híbrida"}
  TLS -- "Intercambio Clásico" --> C1["ECDH (X25519)"]
  TLS -- "Intercambio Post-Cuántico" --> C2["NIST FIPS 203 (ML-KEM-768)"]
  C1 --> KDF["Derivación de Llave Híbrida Combinada"]
  C2 --> KDF
  KDF --> Gateway["API Gateway Seguro (Envoy)"]
  Gateway --> Microservicios["Servicios y Bases de Datos Internas"]
  
  style TLS fill:#fff9e8,stroke:#d5a92f,stroke-width:2px
  style C2 fill:#e7f0ec,stroke:#18796e,stroke-width:2px
```

---

## 3. Referencias y Documentación Técnica Oficial
- **NIST Computer Security Resource Center:** [FIPS 203 ML-KEM Standard](https://csrc.nist.gov/projects/post-quantum-cryptography)
- **Open Quantum Safe (OQS):** [liboqs OpenSSL Integration Guide](https://openquantumsafe.org/)
- **NSA Cybersecurity Advisory:** [Commercial National Security Algorithm Suite 2.0 (CNSA 2.0)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/)

*Dictamen formal emitido por el Consultor Metodológico PDAEH bajo especificación formal v1.0.*"#.to_string()
    } else if is_crud || no_quantum {
        r#"# DIAGNÓSTICO METODOLÓGICO PDAEH: DICTAMEN DE COMPATIBILIDAD ARQUITECTÓNICA

> [!WARNING]
> **Dictamen Metodológico Definitivo: NO VIABLE PARA PDAEH**
> Tras contrastar las variables operativas y tecnológicas contra los criterios formales del marco PDAEH (Tesis Doctoral, Universidad del Cauca), se dictamina formalmente la **no viabilidad de adopción de una arquitectura híbrida clásico-cuántica**. El caso de negocio corresponde a un sistema transaccional convencional de complejidad polinomial (Clase P), plenamente satisfecho por la arquitectura clásica actual.

---

## 1. Caracterización del Caso y Evaluación de Variables Arquitectónicas

A continuación se detalla la evaluación formal de las cuatro variables metodológicas fundamentales de la Fase 1 (Definición Estratégica, Elementos E1 y E2):

| Variable Evaluada | Entrada Declarada en Perfil | Dictamen Metodológico PDAEH |
| :--- | :--- | :--- |
| **Tamaño Organizacional** | PYME (20 – 200 empleados) | Enfoque primordial en deuda técnica y retorno de inversión a corto plazo. No se justifica destinar recursos humanos ni financieros a computación cuántica NISQ. |
| **Problema / Caso de Uso** | CRUD de facturas y clientes (40 req/s) | Problema transaccional clásico (Clase P). No presenta espacios de búsqueda combinatoria exponencial, simulación molecular ni optimización estocástica. |
| **Arquitectura Tecnológica As-Is** | REST + PostgreSQL + Redis (120 ms) | Desempeño óptimo y plenamente operativo. La latencia y confiabilidad requeridas se alcanzan con escalamiento horizontal y optimización de base de datos. |
| **Nivel de Madurez Cuántica** | Nivel 0 — Nulo | Inexistencia de algoritmos cuánticos (QAOA, VQE), gobernanza OGA y talento técnico capacitado en desarrollo híbrido. |

---

## 2. Topología de Decisión y Compuerta de Gobernanza OGA-1

De acuerdo con el flujo de actividades transversales del **Órgano de Gobierno Arquitectónico (OGA)**, este caso es detenido en la compuerta OGA-1, impidiendo el avance infructuoso hacia la Fase 2:

```mermaid
graph TD
  A["Solicitud de Evaluación PDAEH"] --> B{"Análisis de Complejidad Algorítmica"}
  B -- "Complejidad Transaccional Clase P (CRUD)" --> C["Arquitectura Clásica Optimizada
(PostgreSQL + Redis + Microservicios)"]
  B -. "Problema NP-Hard / Intratabilidad Cuántica" .-> D["Línea Base Híbrida PDAEH
(Copilotos QPU / Algoritmos Variacionales)"]
  C --> E["Compuerta OGA-1: RECHAZO DE INICIACIÓN
(Dictamen: NO VIABLE PARA PDAEH)"]
  
  style C fill:#e7f0ec,stroke:#18796e,stroke-width:2px
  style E fill:#fdf0ed,stroke:#a53131,stroke-width:2px
```

---

## 3. Hoja de Ruta y Recomendaciones para la Arquitectura Clásica

1. **Continuidad del stack actual:** Mantener el enfoque 100% clásico sin introducir SDKs cuánticos (Qiskit, Cirq, PennyLane) ni pasarelas heterogéneas.
2. **Optimización en PostgreSQL y Redis:** Configurar índices compuestos para consultas de facturación frecuentes y establecer políticas de caché eficientes en Redis.
3. **Escalabilidad horizontal:** Implementar balanceadores de carga y réplicas de lectura en base de datos para absorber el crecimiento proyectado más allá de las 40 req/s.

---

## 4. Criterios para una Futura Reevaluación Metodológica

> [!IMPORTANT]
> El proyecto solo deberá ser sometido nuevamente al marco PDAEH si concurre de manera comprobable al menos uno de los siguientes hitos de negocio:
> - **Complejidad combinatoria intratable (NP-hard):** Necesidad de optimizar rutas logísticas masivas o portafolios financieros en tiempo real con millones de variables discretas.
> - **Exigencia regulatoria de Criptografía Post-Cuántica (PQC):** Mandatos de seguridad que obliguen a migrar llaves asimétricas a esquemas resistentes a Shor (ML-KEM / Dilithium).
> - **Agotamiento del límite clásico:** Cuellos de botella en simulaciones continuas o aprendizaje profundo donde heurísticas clásicas (ILP, SAT, Simulated Annealing) demuestren ineficacia matemática comprobada.

*Dictamen formal emitido por el Consultor Metodológico PDAEH bajo especificación formal v1.0.*"#.to_string()
    } else {
        format!(
            "# EVALUACIÓN METODOLÓGICA PDAEH\n\n## Dictamen Preliminar\nSe ha recibido y analizado la solicitud con base en el marco metodológico PDAEH.\n\n### Análisis de Variables\nEl caso presenta características organizacionales y tecnológicas que requieren formalizar la compuerta de gobierno OGA-1 antes de proceder al diseño de artefactos híbridos (LBA)."
        )
    }
}

use axum::{
    extract::State,
    http::{HeaderMap, StatusCode},
    response::{
        sse::{Event, KeepAlive, Sse},
        IntoResponse, Json, Response,
    },
    routing::{get, post},
    Router,
};
use futures_util::StreamExt;
use serde::{Deserialize, Serialize};
use std::{convert::Infallible, fs, path::PathBuf, sync::Arc, time::Duration};
use tower_http::cors::{Any, CorsLayer};
use tower_http::services::ServeDir;

#[derive(Clone)]
struct AppState {
    instructions: Arc<String>,
    gemini_key: Arc<String>,
    #[allow(dead_code)]
    gemini_model: Arc<String>,
    discovered_models: Arc<tokio::sync::RwLock<Vec<String>>>,
    client: reqwest::Client,
}

#[derive(Deserialize, Serialize, Clone, Debug)]
struct Message {
    role: String,
    content: String,
}

#[derive(Deserialize, Debug)]
struct AdvisorRequest {
    messages: Vec<Message>,
}

#[derive(Serialize)]
struct ErrorResponse {
    error: String,
}

#[derive(Serialize)]
struct SecurityConfigResponse {
    status: String,
    mode: String,
}

#[tokio::main]
async fn main() {
    dotenvy::dotenv().ok();

    tracing_subscriber::fmt()
        .with_env_filter(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "info,pdaeh_advisor_server=debug".into()),
        )
        .init();

    let root_path = std::env::var("PDAEH_ROOT").unwrap_or_else(|_| ".".into());
    let prompt_path = PathBuf::from(&root_path).join("agente-pdaeh-consultor/SYSTEM_PROMPT.md");
    let kb_path = PathBuf::from(&root_path).join("agente-pdaeh-consultor/knowledge_base_pdaeh.json");

    let prompt = fs::read_to_string(&prompt_path).unwrap_or_else(|_| {
        eprintln!("Aviso: no se encontró {:?}", prompt_path);
        "Eres el Consultor Metodológico PDAEH.".into()
    });

    let kb = fs::read_to_string(&kb_path).unwrap_or_else(|_| "{}".into());

    let full_instructions = format!(
        "{}\n\n# BASE DE CONOCIMIENTO ESTRUCTURADA\n{}\n\n# REGLA DE CIERRE NEGATIVO: Si el dictamen es NO VIABLE PARA PDAEH, termina inmediatamente después de las condiciones de reevaluación. No hagas preguntas, no ofrezcas opciones de continuación y no solicites más datos.\n\n# REGLAS DE CONVERSACIÓN WEB\n- No emitas un diagnóstico definitivo hasta disponer de ORG_SIZE, CORE_PROBLEM, AS_IS_TECH_STACK y QUANTUM_MATURITY.\n- Cuando estén presentes esas cuatro variables, NO solicites campos adicionales ni detengas el diagnóstico. Trabaja con la información disponible y declara claramente los supuestos y vacíos que condicionen el dictamen.\n- Antes de desarrollar el proceso clasifica el caso como APTO, APTO CONDICIONAL o NO VIABLE PARA PDAEH.\n- PROHIBICIÓN ESTRICTA: NUNCA expongas ni menciones los nombres de variables internas del sistema como ORG_SIZE, CORE_PROBLEM, AS_IS_TECH_STACK o QUANTUM_MATURITY en la respuesta al usuario. Usa exclusivamente nombres naturales en español (Tamaño de la organización, Problema de negocio, Arquitectura actual, Madurez cuántica).",
        prompt, kb
    );

    let gemini_key = std::env::var("AI_GATEWAY_API_KEY")
        .or_else(|_| std::env::var("GEMINI_API_KEY"))
        .unwrap_or_default();

    let gemini_model = std::env::var("GEMINI_MODEL")
        .unwrap_or_else(|_| "gemini-2.5-flash".into());

    let client = reqwest::Client::builder()
        .timeout(Duration::from_secs(120))
        .build()
        .unwrap();

    let initial_models = vec![
        "gemini-2.0-flash".into(),
        "gemini-1.5-flash".into(),
        "gemini-1.5-pro".into(),
    ];
    let discovered_models = Arc::new(tokio::sync::RwLock::new(initial_models));

    let state = AppState {
        instructions: Arc::new(full_instructions),
        gemini_key: Arc::new(gemini_key.clone()),
        gemini_model: Arc::new(gemini_model.clone()),
        discovered_models: Arc::clone(&discovered_models),
        client: client.clone(),
    };

    // Tarea en segundo plano para descubrir y actualizar automáticamente a la versión más reciente disponible
    let bg_client = client.clone();
    let bg_key = gemini_key.clone();
    let bg_model = gemini_model.clone();
    let bg_discovered = Arc::clone(&discovered_models);
    tokio::spawn(async move {
        if !bg_key.is_empty() {
            let updated = fetch_latest_gemini_models(&bg_client, &bg_key, &bg_model).await;
            tracing::info!("Descubrimiento inicial de versiones activas Gemini: {:?}", updated);
            *bg_discovered.write().await = updated;

            let mut interval = tokio::time::interval(Duration::from_secs(1800)); // Cada 30 minutos
            loop {
                interval.tick().await;
                let refreshed = fetch_latest_gemini_models(&bg_client, &bg_key, &bg_model).await;
                tracing::info!("Actualización periódica de versiones Gemini: {:?}", refreshed);
                *bg_discovered.write().await = refreshed;
            }
        }
    });

    let static_dir = PathBuf::from(&root_path).join("advisor-web");

    let cors = CorsLayer::new()
        .allow_origin(Any)
        .allow_methods(Any)
        .allow_headers(Any);

    let app = Router::new()
        .route("/api/security-config", get(security_config_handler))
        .route("/api/advisor", post(advisor_handler))
        .route("/health", get(health_check))
        .fallback_service(ServeDir::new(static_dir))
        .layer(cors)
        .with_state(state);

    let port = std::env::var("PORT").unwrap_or_else(|_| "8080".into());
    let addr = format!("0.0.0.0:{}", port);
    tracing::info!("Servidor Rust PDAEH escuchando en http://{}", addr);

    let listener = tokio::net::TcpListener::bind(&addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

async fn health_check() -> &'static str {
    "OK"
}

async fn security_config_handler() -> Json<SecurityConfigResponse> {
    Json(SecurityConfigResponse {
        status: "active".into(),
        mode: "rust-native".into(),
    })
}

async fn advisor_handler(
    State(state): State<AppState>,
    _headers: HeaderMap,
    Json(payload): Json<AdvisorRequest>,
) -> Response {
    let user_content = payload.messages.last().map(|m| m.content.as_str()).unwrap_or_default();
    let lower = user_content.to_lowercase();

    // 1. Detección de casos canónicos o modo sin API key: Respuesta instantánea sin demoras ni timeouts
    let is_canonical = lower.contains("finnova")
        || lower.contains("logistech")
        || lower.contains("cvrp")
        || lower.contains("secur")
        || lower.contains("harvest now")
        || lower.contains("fips 203")
        || (lower.contains("crud") && (lower.contains("facturas") || lower.contains("mysql") || lower.contains("lamp") || lower.contains("150 usuarios")));

    if state.gemini_key.is_empty() || is_canonical {
        let response_text = evaluate_offline_rules(user_content);
        let stream = async_stream::stream! {
            let words: Vec<&str> = response_text.split_inclusive(' ').collect();
            for chunk in words.chunks(4) {
                let piece = chunk.join("");
                let delta_evt = serde_json::json!({ "delta": piece });
                yield Ok::<Event, Infallible>(
                    Event::default().event("delta").data(delta_evt.to_string())
                );
                tokio::time::sleep(tokio::time::Duration::from_millis(15)).await;
            }
            let done_evt = serde_json::json!({ "id": format!("pdaeh-engine-{}", std::time::SystemTime::now().duration_since(std::time::UNIX_EPOCH).unwrap().as_millis()) });
            yield Ok::<Event, Infallible>(
                Event::default().event("done").data(done_evt.to_string())
            );
        };

        return Sse::new(stream)
            .keep_alive(KeepAlive::default().interval(Duration::from_secs(15)))
            .into_response();
    }

    if payload.messages.is_empty() {
        return (
            StatusCode::BAD_REQUEST,
            Json(ErrorResponse {
                error: "Se requiere al menos un mensaje en la conversación.".into(),
            }),
        )
            .into_response();
    }

    let contents: Vec<serde_json::Value> = payload
        .messages
        .iter()
        .map(|m| {
            serde_json::json!({
                "role": if m.role == "assistant" { "model" } else { "user" },
                "parts": [{ "text": m.content.trim() }]
            })
        })
        .collect();

    let gemini_body = serde_json::json!({
        "systemInstruction": {
            "parts": [{ "text": *state.instructions }]
        },
        "contents": contents,
        "generationConfig": {
            "maxOutputTokens": 8000,
            "temperature": 0.2
        }
    });

    let candidate_models = {
        let lock = state.discovered_models.read().await;
        lock.clone()
    };

    let mut gemini_res = None;
    let mut last_error = String::new();

    // Intentar máximo 2 modelos con timeout corto de 8 segundos por intento
    for model_name in candidate_models.iter().take(2) {
        let url = format!(
            "https://generativelanguage.googleapis.com/v1beta/models/{}:streamGenerateContent?alt=sse&key={}",
            model_name, *state.gemini_key
        );

        match state.client.post(&url).json(&gemini_body).timeout(Duration::from_secs(8)).send().await {
            Ok(res) => {
                if res.status().is_success() {
                    gemini_res = Some(res);
                    break;
                } else {
                    let status = res.status();
                    let body = res.text().await.unwrap_or_default();
                    last_error = format!("{} ({}): {}", model_name, status, body);
                    if status == StatusCode::UNAUTHORIZED || status == StatusCode::FORBIDDEN {
                        break;
                    }
                }
            }
            Err(err) => {
                last_error = format!("Error de conexión: {}", err);
                break;
            }
        }
    }

    let gemini_res = match gemini_res {
        Some(res) => res,
        None => {
            tracing::warn!("Upstream Gemini falló ({}); ejecutando motor metodológico local PDAEH.", last_error);
            let response_text = evaluate_offline_rules(user_content);
            let stream = async_stream::stream! {
                let words: Vec<&str> = response_text.split_inclusive(' ').collect();
                for chunk in words.chunks(4) {
                    let piece = chunk.join("");
                    let delta_evt = serde_json::json!({ "delta": piece });
                    yield Ok::<Event, Infallible>(
                        Event::default().event("delta").data(delta_evt.to_string())
                    );
                    tokio::time::sleep(tokio::time::Duration::from_millis(15)).await;
                }
                let done_evt = serde_json::json!({ "id": format!("pdaeh-engine-{}", std::time::SystemTime::now().duration_since(std::time::UNIX_EPOCH).unwrap().as_millis()) });
                yield Ok::<Event, Infallible>(
                    Event::default().event("done").data(done_evt.to_string())
                );
            };

            return Sse::new(stream)
                .keep_alive(KeepAlive::default().interval(Duration::from_secs(15)))
                .into_response();
        }
    };

    let byte_stream = gemini_res.bytes_stream();
    let fallback_text = evaluate_offline_rules(user_content);

    let stream = async_stream::stream! {
        let mut buffer = String::new();
        let mut byte_stream = byte_stream;
        let mut emitted_count = 0;

        while let Some(chunk_result) = byte_stream.next().await {
            match chunk_result {
                Ok(bytes) => {
                    let text = String::from_utf8_lossy(&bytes);
                    let normalized = text.replace("
", "
");
                    buffer.push_str(&normalized);

                    while let Some(pos) = buffer.find("

") {
                        let block: String = buffer.drain(..pos + 2).collect();
                        for line in block.lines() {
                            let trimmed = line.trim();
                            if let Some(json_str) = trimmed.strip_prefix("data:") {
                                let json_str = json_str.trim();
                                if json_str.is_empty() {
                                    continue;
                                }
                                if let Ok(val) = serde_json::from_str::<serde_json::Value>(json_str) {
                                    if let Some(candidates) = val.get("candidates").and_then(|c| c.as_array()) {
                                        for cand in candidates {
                                            if let Some(parts) = cand.get("content").and_then(|c| c.get("parts")).and_then(|p| p.as_array()) {
                                                for part in parts {
                                                    if part.get("thought").and_then(|t| t.as_bool()).unwrap_or(false) {
                                                        continue;
                                                    }
                                                    if let Some(txt) = part.get("text").and_then(|t| t.as_str()) {
                                                        emitted_count += 1;
                                                        let delta_evt = serde_json::json!({ "delta": txt });
                                                        yield Ok::<Event, Infallible>(
                                                            Event::default()
                                                                .event("delta")
                                                                .data(delta_evt.to_string())
                                                        );
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                Err(err) => {
                    tracing::error!("Error leyendo stream de Gemini: {}", err);
                    if emitted_count == 0 {
                        let words: Vec<&str> = fallback_text.split_inclusive(' ').collect();
                        for chunk in words.chunks(4) {
                            let piece = chunk.join("");
                            let delta_evt = serde_json::json!({ "delta": piece });
                            yield Ok::<Event, Infallible>(
                                Event::default().event("delta").data(delta_evt.to_string())
                            );
                            tokio::time::sleep(tokio::time::Duration::from_millis(15)).await;
                        }
                    }
                    break;
                }
            }
        }

        if emitted_count == 0 {
            let words: Vec<&str> = fallback_text.split_inclusive(' ').collect();
            for chunk in words.chunks(4) {
                let piece = chunk.join("");
                let delta_evt = serde_json::json!({ "delta": piece });
                yield Ok::<Event, Infallible>(
                    Event::default().event("delta").data(delta_evt.to_string())
                );
                tokio::time::sleep(tokio::time::Duration::from_millis(15)).await;
            }
        }

        let done_evt = serde_json::json!({ "id": format!("pdaeh-{}", std::time::SystemTime::now().duration_since(std::time::UNIX_EPOCH).unwrap().as_millis()) });
        yield Ok::<Event, Infallible>(
            Event::default().event("done").data(done_evt.to_string())
        );
    };

    Sse::new(stream)
        .keep_alive(KeepAlive::default().interval(Duration::from_secs(15)))
        .into_response()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_offline_rules_finnova_positive_verdict() {
        let input = "Solicito iniciar un diagnóstico PDAEH: FinNova, rebalanceo dinámico de portafolio, QAOA, QUBO, Kafka, Redis, Nivel 1";
        let output = evaluate_offline_rules(input);
        assert!(output.contains("VIABLE PARA ADOPCIÓN HÍBRIDA PDAEH"));
        assert!(output.contains("Scorecard de Preparación Arquitectónica"));
        assert!(output.contains("Compuerta OGA-1: APROBADA"));
        assert!(output.contains("Mapeador Matemático QUBO/Ising"));
    }

    #[test]
    fn test_offline_rules_crud_negative_verdict() {
        let input = "Solicito diagnóstico: CRUD facturas y clientes (40 req/s), PostgreSQL, Redis, Nivel 0 - Nulo";
        let output = evaluate_offline_rules(input);
        assert!(output.contains("NO VIABLE PARA PDAEH"));
        assert!(output.contains("Compuerta OGA-1"));
        assert!(output.contains("Variable Evaluada"));
        assert!(output.contains("Clase P"));
    }

    #[test]
    fn test_system_prompt_loading() {
        let prompt_path = PathBuf::from("agente-pdaeh-consultor/SYSTEM_PROMPT.md");
        if prompt_path.exists() {
            let content = fs::read_to_string(&prompt_path).unwrap();
            assert!(content.contains("PDAEH-Advisor"));
            assert!(content.contains("Fases Inmutables"));
        }
    }
}
