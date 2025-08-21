import { serve } from "@hono/node-server";
import app from "./index.js";

serve({
    fetch: app.fetch,
    port: 3000
    },
    (info) => {
        console.log(`http://localhost:${info.port}`)
})
