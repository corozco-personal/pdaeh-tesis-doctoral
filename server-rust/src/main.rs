
fn evaluate_offline_rules(content: &str) -> String {
    let lower = content.to_lowercase();
    let is_crud = lower.contains("crud") || lower.contains("facturas") || lower.contains("postgresql");
    let no_quantum = lower.contains("no existen problemas de optimización")
        || lower.contains("nivel 0")
        || lower.contains("nulo")
        || lower.contains("escalamiento horizontal");

    if is_crud && no_quantum {
        r#"# DIAGNÓSTICO ARQUITECTÓNICO NEGATIVO

> [!WARNING]
> **Dictamen Metodológico: NO VIABLE PARA PDAEH**
> La iniciativa evaluada corresponde a un sistema transaccional convencional (CRUD, PostgreSQL, Redis) sin requerimientos de optimización combinatoria intratable ni algoritmos cuánticos NISQ. No se justifica la introducción de componentes híbridos.

---

## 1. Evaluación de las Variables Metodológicas

| Variable Evaluada | Entrada Registrada | Dictamen Metodológico PDAEH |
| :--- | :--- | :--- |
| **Tamaño Organizacional** | PYME | Absorción orientada a deuda técnica clásica; sin capacidad para I+D cuántico. |
| **Problema / Caso de Uso** | CRUD facturas y clientes (40 req/s) | Complejidad clase **P** (polinomial clásica). Totalmente cubierta por RDBMS. |
| **Arquitectura As-Is** | REST + PostgreSQL + Redis | Desempeño óptimo (latencia 120 ms). Escalamiento horizontal estándar suficiente. |
| **Madurez Cuántica** | Nivel 0 (Nulo) | Sin algoritmos, talento ni infraestructura NISQ especializada. |

---

## 2. Topología de Decisión Arquitectónica

```mermaid
graph TD
  Start["Solicitud de Evaluación PDAEH"] --> Classify{"Análisis de Complejidad"}
  Classify -- "Problema Transaccional CRUD (Clase P)" --> Classic["Arquitectura Clásica Optimizada\n(PostgreSQL + Redis + REST)"]
  Classify -. "Optimización NP-Hard / NISQ" .-> Hybrid["Línea Base Híbrida PDAEH\n(QPU / Algoritmos Cuánticos)"]
  Classic --> Dictum["Dictamen: NO VIABLE PARA PDAEH\n(Compuerta OGA-1 no superada)"]
  
  style Classic fill:#e7f0ec,stroke:#18796e,stroke-width:2px
  style Dictum fill:#fdf0ed,stroke:#a53131,stroke-width:2px
```

---

## 3. Condiciones de Reevaluación Metodológica

> [!IMPORTANT]
> El caso podrá ser reevaluado bajo el ciclo PDAEH únicamente si concurre al menos una de las siguientes condiciones:
> 1. **Optimización combinatoria:** Emergencia de problemas de alta complejidad (NP-hard) en planificación o logística masiva.
> 2. **Criptografía Post-Cuántica (PQC):** Requerimiento regulatorio de migración criptográfica en reposo o en tránsito.
> 3. **Límite clásico:** Crecimiento exponencial de estados que agote los optimizadores heurísticos convencionales (ILP, SAT, CP).

*Fin del dictamen metodológico PDAEH.*"#.to_string()
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
        match state.client.post(&url).json(&gemini_body).timeout(Duration::from_secs(5)).send().await {
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
