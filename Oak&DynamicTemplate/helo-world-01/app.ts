import { Application } from "https://deno.land/x/oak@v5.2.0/mod.ts";

const app = new Application();
app.use( async (ctx,next)=>{
    console.log('----------------------------------------------------')
    console.log(`URL`, ctx.request.url);
    ctx.response.body = `Hello World from Deno Oak....`;
    await next();
    //Once second middle ware completed next will be resolved..
    console.log('Finished');
    console.log('----------------------------------------------------')
});

app.use((ctx, next)=>{
    ctx.response.body = 'Overridden by second middle ware';
})

app.listen({port:3000});