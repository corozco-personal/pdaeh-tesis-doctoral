import { cp, mkdir, rm } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
await cp("advisor-web/index.html", "dist/index.html");
await cp("advisor-web/app.js", "dist/app.js");
await cp("advisor-web/styles.css", "dist/styles.css");
