import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const application = new Application();

const router = new Router();


router.get('/',(ctx)=>{
    console.log('router get...');
    ctx.response.body = `Hello World from deno oak...`
    ctx.response.type = 'text/html';
});



router.use(async (ctx,next)=>{
    await next();
    console.log('router middle ware...');
});



application.use(router.routes());
application.use(router.allowedMethods());


application.listen({port:3000});