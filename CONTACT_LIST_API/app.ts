import { Application,Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
// Logger

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.headers.get("X-Response-Time");
    console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
  });


  const router = new Router();


app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
