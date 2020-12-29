import { Application,Context,Router } from "https://deno.land/x/oak/mod.ts";
import { CreateDBConnection } from "./Helper/db.ts";
import route from './Router/contactRouter.ts';
const app = new Application();
// Logger
CreateDBConnection.initMongoDb();

app.use(async (ctx:Context<Record<string, any>>, next: () => Promise<void>) => {
    await next();
    const rt = ctx.response.headers.get("X-Response-Time");
    console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});


app.use(route.routes());
app.use(route.allowedMethods());

await app.listen({ port: 8000 });
