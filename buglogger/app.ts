import {
  Application,
  Context,
  Router,
  SendOptions,
  send,
} from "https://deno.land/x/oak/mod.ts";

import router from "./router/router.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

/*
 If i do not move this middleware to last,
 it would not work as it intercepting all request to routes.
*/
app.use(async (ctx,next) => {
  console.log('static folder', `${Deno.cwd()}/public/css`);
  await send(ctx, ctx.request.url.pathname,{
    root:`${Deno.cwd()}/public`
  } );
  await next();
});

await app.listen({
  port: 8000,
  // keyFile:'',
  // secure: true,
  // certFile:''
});
