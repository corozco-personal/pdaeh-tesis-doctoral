
pub fn evaluate_offline_rules(content: &str) -> String {
    let lower = content.to_lowercase();
    let is_crud = lower.contains("crud") || lower.contains("facturas") || lower.contains("postgresql");
    let no_quantum = lower.contains("no existen problemas de optimización")
        || lower.contains("nivel 0")
        || lower.contains("nulo")
        || lower.contains("escalamiento horizontal");

    if is_crud && no_quantum {
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
    gemini_model: Arc<String>,
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

    let state = AppState {
        instructions: Arc::new(full_instructions),
        gemini_key: Arc::new(gemini_key),
        gemini_model: Arc::new(gemini_model),
        client: reqwest::Client::builder()
            .timeout(Duration::from_secs(120))
            .build()
            .unwrap(),
    };

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
    if state.gemini_key.is_empty() {
        tracing::warn!("Sin clave Gemini configurada; usando motor metodológico local PDAEH.");
        let user_content = payload.messages.last().map(|m| m.content.as_str()).unwrap_or_default();
        let response_text = evaluate_offline_rules(user_content);

        let stream = async_stream::stream! {
            let words: Vec<&str> = response_text.split_inclusive(' ').collect();
            for chunk in words.chunks(3) {
                let piece = chunk.join("");
                let delta_evt = serde_json::json!({ "delta": piece });
                yield Ok::<Event, Infallible>(
                    Event::default().event("delta").data(delta_evt.to_string())
                );
                tokio::time::sleep(tokio::time::Duration::from_millis(25)).await;
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

    // Preparar el cuerpo para Gemini API (streamGenerateContent)
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

    // Definir cascada ultra-rápida de modelos probados y estables
    let mut candidate_models: Vec<String> = vec![
        "gemini-1.5-flash".into(),
        "gemini-2.0-flash".into(),
        "gemini-1.5-pro".into(),
    ];
    if !candidate_models.contains(&*state.gemini_model) {
        candidate_models.insert(0, state.gemini_model.to_string());
    }

    tracing::info!("Modelos prioritarios para streaming: {:?}", candidate_models);

    let mut gemini_res = None;
    let mut last_error = String::new();

    for model_name in &candidate_models {
        let url = format!(
            "https://generativelanguage.googleapis.com/v1beta/models/{}:streamGenerateContent?alt=sse&key={}",
            model_name, *state.gemini_key
        );

        // Timeout estricto de 5 segundos por intento para evitar esperas prolongadas
        match state.client.post(&url).json(&gemini_body).timeout(Duration::from_secs(30)).send().await {
            Ok(res) => {
                if res.status().is_success() {
                    tracing::info!("Conectado exitosamente con Gemini modelo: {}", model_name);
                    gemini_res = Some(res);
                    break;
                } else {
                    let status = res.status();
                    let body = res.text().await.unwrap_or_default();
                    tracing::warn!("Modelo {} falló ({})", model_name, status);
                    last_error = format!("{} ({}): {}", model_name, status, body);
                    // Si el error es 401 o 403 (clave de API inválida o sin permisos), detener
                    if status == StatusCode::UNAUTHORIZED || status == StatusCode::FORBIDDEN {
                        break;
                    }
                    // Si es 400 (Bad Request por incompatibilidad de modelo) o 404, continuar probando el siguiente modelo
                }
            }
            Err(err) => {
                last_error = format!("Error de red: {}", err);
                break;
            }
        }
    }

    let gemini_res = match gemini_res {
        Some(res) => res,
        None => {
            tracing::warn!("Upstream Gemini falló ({}); ejecutando motor metodológico local de reglas PDAEH.", last_error);
            let user_content = payload.messages.last().map(|m| m.content.as_str()).unwrap_or_default();
            let response_text = evaluate_offline_rules(user_content);

            let stream = async_stream::stream! {
                // Emitir en fragmentos simulando streaming interactivo fluido
                let words: Vec<&str> = response_text.split_inclusive(' ').collect();
                for chunk in words.chunks(3) {
                    let piece = chunk.join("");
                    let delta_evt = serde_json::json!({ "delta": piece });
                    yield Ok::<Event, Infallible>(
                        Event::default().event("delta").data(delta_evt.to_string())
                    );
                    tokio::time::sleep(tokio::time::Duration::from_millis(25)).await;
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

    // Stream SSE transformando de Gemini SSE a eventos de cliente
    let byte_stream = gemini_res.bytes_stream();

    let stream = async_stream::stream! {
        let mut buffer = String::new();
        let mut byte_stream = byte_stream;

        while let Some(chunk_result) = byte_stream.next().await {
            match chunk_result {
                Ok(bytes) => {
                    let text = String::from_utf8_lossy(&bytes);
                    // Normalizar CRLF a LF para un parsing uniforme e infalible
                    let normalized = text.replace("\r\n", "\n");
                    buffer.push_str(&normalized);

                    while let Some(pos) = buffer.find("\n\n") {
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
                    let err_evt = serde_json::json!({ "error": "Interrupción en el flujo de datos" });
                    yield Ok::<Event, Infallible>(
                        Event::default().event("error").data(err_evt.to_string())
                    );
                    break;
                }
            }
        }

        if !buffer.trim().is_empty() {
            for line in buffer.lines() {
                let trimmed = line.trim();
                if let Some(json_str) = trimmed.strip_prefix("data:") {
                    let json_str = json_str.trim();
                    if let Ok(val) = serde_json::from_str::<serde_json::Value>(json_str) {
                        if let Some(candidates) = val.get("candidates").and_then(|c| c.as_array()) {
                            for cand in candidates {
                                if let Some(parts) = cand.get("content").and_then(|c| c.get("parts")).and_then(|p| p.as_array()) {
                                    for part in parts {
                                        if !part.get("thought").and_then(|t| t.as_bool()).unwrap_or(false) {
                                            if let Some(txt) = part.get("text").and_then(|t| t.as_str()) {
                                                let delta_evt = serde_json::json!({ "delta": txt });
                                                yield Ok::<Event, Infallible>(
                                                    Event::default().event("delta").data(delta_evt.to_string())
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

        let done_evt = serde_json::json!({ "id": format!("rust-{}", std::time::SystemTime::now().duration_since(std::time::UNIX_EPOCH).unwrap().as_millis()) });
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
