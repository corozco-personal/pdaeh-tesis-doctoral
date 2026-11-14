import { cp, mkdir, rm } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
await mkdir("dist/vendor", { recursive: true });
await cp("advisor-web/index.html", "dist/index.html");
await cp("advisor-web/app.js", "dist/app.js");
await cp("advisor-web/styles.css", "dist/styles.css");
await cp("advisor-web/security.css", "dist/security.css");
await cp("node_modules/marked/lib/marked.umd.js", "dist/vendor/marked.umd.js");
await cp("node_modules/dompurify/dist/purify.min.js", "dist/vendor/purify.min.js");
await cp("node_modules/mermaid/dist/mermaid.min.js", "dist/vendor/mermaid.min.js");
