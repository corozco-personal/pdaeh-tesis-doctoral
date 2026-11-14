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
        "{}\n\n# BASE DE CONOCIMIENTO ESTRUCTURADA\n{}\n\n# REGLA DE CIERRE NEGATIVO: Si el dictamen es NO VIABLE PARA PDAEH, termina inmediatamente después de las condiciones de reevaluación. No hagas preguntas, no ofrezcas opciones de continuación y no solicites más datos.\n\n# REGLAS DE CONVERSACIÓN WEB\n- No emitas un diagnóstico definitivo hasta disponer de ORG_SIZE, CORE_PROBLEM, AS_IS_TECH_STACK y QUANTUM_MATURITY.\n- Cuando estén presentes esas cuatro variables, NO solicites campos adicionales ni detengas el diagnóstico. Trabaja con la información disponible y declara claramente los supuestos y vacíos que condicionen el dictamen.\n- Antes de desarrollar el proceso clasifica el caso como APTO, APTO CONDICIONAL o NO VIABLE PARA PDAEH.",
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
        return (
            StatusCode::SERVICE_UNAVAILABLE,
            Json(ErrorResponse {
                error: "La clave AI_GATEWAY_API_KEY / GEMINI_API_KEY no está configurada.".into(),
            }),
        )
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

    // Intentar con el modelo configurado o fallback
    let candidate_models = vec![
        state.gemini_model.as_str(),
        "gemini-2.5-flash",
        "gemini-1.5-flash",
        "gemini-1.5-pro",
    ];

    let mut gemini_res = None;
    let mut last_error = String::new();

    for model_name in candidate_models {
        let url = format!(
            "https://generativelanguage.googleapis.com/v1beta/models/{}:streamGenerateContent?alt=sse&key={}",
            model_name, *state.gemini_key
        );

        match state.client.post(&url).json(&gemini_body).send().await {
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
                    // Si el error no es 404 (p. ej. 400 o 403 clave inválida), no tiene sentido reintentar otros modelos
                    if status != StatusCode::NOT_FOUND {
                        break;
                    }
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
            tracing::error!("Todos los modelos de Gemini fallaron: {}", last_error);
            return (
                StatusCode::BAD_GATEWAY,
                Json(ErrorResponse {
                    error: format!("Error al consultar Gemini: {}", last_error),
                }),
            )
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
                    buffer.push_str(&text);

                    while let Some(pos) = buffer.find("\n\n") {
                        let block: String = buffer.drain(..pos + 2).collect();
                        for line in block.lines() {
                            if let Some(json_str) = line.strip_prefix("data:") {
                                let json_str = json_str.trim();
                                if json_str.is_empty() {
                                    continue;
                                }
                                if let Ok(val) = serde_json::from_str::<serde_json::Value>(json_str) {
                                    if let Some(candidates) = val.get("candidates").and_then(|c| c.as_array()) {
                                        for cand in candidates {
                                            if let Some(parts) = cand.get("content").and_then(|c| c.get("parts")).and_then(|p| p.as_array()) {
                                                for part in parts {
                                                    // Filtrar thoughts
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

        let done_evt = serde_json::json!({ "id": format!("rust-{}", std::time::SystemTime::now().duration_since(std::time::UNIX_EPOCH).unwrap().as_millis()) });
        yield Ok::<Event, Infallible>(
            Event::default().event("done").data(done_evt.to_string())
        );
    };

    Sse::new(stream)
        .keep_alive(KeepAlive::default().interval(Duration::from_secs(15)))
        .into_response()
}
