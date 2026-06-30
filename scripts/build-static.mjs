import { cp, mkdir, rm } from "node:fs/promises";

await rm("dist/client", { recursive: true, force: true });
await mkdir("dist/client", { recursive: true });
await cp("index.html", "dist/client/index.html");
