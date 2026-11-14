# PDAEH Advisor Web

Aplicación conversacional independiente del portal documental PDAEH. Vive en el mismo repositorio, pero se despliega como un proyecto serverless separado porque GitHub Pages no ejecuta código de servidor.

## Arquitectura

- `advisor-web/`: interfaz pública del chat.
- `api/advisor.js`: función serverless que invoca la Responses API.
- `agente-pdaeh-consultor/SYSTEM_PROMPT.md`: contrato de comportamiento.
- `agente-pdaeh-consultor/knowledge_base_pdaeh.json`: base metodológica.
- `Dockerfile`: empaquetado para Render / Railway.

## Autenticación del despliegue

- En producción, el servicio se despliega en Render con contenedorización Docker nativa en Rust.
- `AI_GATEWAY_MODEL` es opcional; su valor predeterminado es `openai/gpt-5-mini`, disponible con los créditos gratuitos actuales de AI Gateway.
- Para desarrollo local puede configurarse `AI_GATEWAY_API_KEY`.
- `SESSION_SECRET` debe ser un valor aleatorio de al menos 32 bytes.
- `TURNSTILE_SITE_KEY` y `TURNSTILE_SECRET_KEY` pertenecen al widget Cloudflare Turnstile configurado para `pdaeh-tesis-doctoral.onrender.com`.

No coloque claves en archivos del repositorio ni en el navegador.

## Controles de seguridad

- Cloudflare Turnstile validado en servidor y renovado después de cada consulta.
- Sesión firmada en cookie `HttpOnly`, `Secure` y `SameSite=Strict`.
- Límite de cinco solicitudes por minuto y veinte por hora, aplicado por IP y sesión.
- Una sola consulta simultánea por sesión.
- Validación estricta de origen, método, tipo de contenido, tamaño y esquema JSON.
- Bloqueo de patrones comunes de inyección de prompt y de credenciales.
- Mitigación y balanceo de carga mediante el proxy inverso de Render y Cloudflare Turnstile.

## Validación local

```bash
npm test
```

Para ejecutar el backend localmente se usa `cargo run --bin pdaeh-advisor-server`. El portal documental se publica desde `gh-pages` en GitHub Pages y el servidor Axum se aloja en Render (`pdaeh-tesis-doctoral.onrender.com`).
