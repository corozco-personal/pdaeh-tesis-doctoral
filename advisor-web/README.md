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
- `AI_GATEWAY_MODEL` es opcional; su valor predeterminado es `openai/gpt-5.4`.
- Para desarrollo local puede configurarse `AI_GATEWAY_API_KEY`.

No coloque claves en archivos del repositorio ni en el navegador.

## Validación local

```bash
npm test
```

Para ejecutar el backend localmente se puede vincular el repositorio a un proyecto Vercel y usar `vercel dev`. El portal documental continúa publicándose desde la rama `gh-pages`; la aplicación Advisor se publica desde `main` como un proyecto separado.
