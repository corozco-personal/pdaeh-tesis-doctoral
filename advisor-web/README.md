# PDAEH Advisor Web

Aplicación conversacional independiente del portal documental PDAEH. Vive en el mismo repositorio, pero se despliega como un proyecto serverless separado porque GitHub Pages no ejecuta código de servidor.

## Arquitectura

- `advisor-web/`: interfaz pública del chat.
- `api/advisor.js`: función serverless que invoca la Responses API.
- `agente-pdaeh-consultor/SYSTEM_PROMPT.md`: contrato de comportamiento.
- `agente-pdaeh-consultor/knowledge_base_pdaeh.json`: base metodológica.
- `vercel.json`: rutas y encabezados de seguridad.

## Autenticación del despliegue

- En producción, Vercel suministra automáticamente `VERCEL_OIDC_TOKEN`; no es necesario guardar una clave de OpenAI.
- `AI_GATEWAY_MODEL` es opcional; su valor predeterminado es `openai/gpt-5-mini`, disponible con los créditos gratuitos actuales de AI Gateway.
- Para desarrollo local puede configurarse `AI_GATEWAY_API_KEY`.
- `SESSION_SECRET` debe ser un valor aleatorio de al menos 32 bytes.
- `TURNSTILE_SITE_KEY` y `TURNSTILE_SECRET_KEY` pertenecen al widget Cloudflare Turnstile configurado para `pdaeh-advisor.vercel.app`.

No coloque claves en archivos del repositorio ni en el navegador.

## Controles de seguridad

- Cloudflare Turnstile validado en servidor y renovado después de cada consulta.
- Sesión firmada en cookie `HttpOnly`, `Secure` y `SameSite=Strict`.
- Límite de cinco solicitudes por minuto y veinte por hora, aplicado por IP y sesión.
- Una sola consulta simultánea por sesión.
- Validación estricta de origen, método, tipo de contenido, tamaño y esquema JSON.
- Bloqueo de patrones comunes de inyección de prompt y de credenciales.
- Vercel Firewall y mitigación DDoS en el borde, complementados con una regla WAF para `/api/advisor`.

## Validación local

```bash
npm test
```

Para ejecutar el backend localmente se puede vincular el repositorio a un proyecto Vercel y usar `vercel dev`. El portal documental continúa publicándose desde la rama `gh-pages`; la aplicación Advisor se publica desde `main` como un proyecto separado.
