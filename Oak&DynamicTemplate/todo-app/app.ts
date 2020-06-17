import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { renderFileToString } from 'https://deno.land/x/dejs@0.7.0/mod.ts';

const app = new Application();
const router = new Router();

const todos: Array<{id: number, todo: string}> = [];


router.get('/', async (ctx,next)=>{
    //Template used here is taken from code pen..
    //https://codepen.io/barkins/pen/aEriL
    const body =  await renderFileToString(`${Deno.cwd()}/templates/app.ejs`, {title: 'Todo App', todos});
    ctx.response.body = body;
next();
 
});

router.post('/save', async (ctx)=>{
    const body =  await ctx.request.body();
    const newTask = {
        todo:body.value.get('task'),
        id: new Date().valueOf()
    }
    todos.push(newTask);
    ctx.response.redirect('/');
});


app.use(router.routes());
app.use(router.allowedMethods());

//To serve static content we can use send method
app.use( async (ctx,next)=>{
    await send(ctx,ctx.request.url.pathname,{
        root: `${Deno.cwd()}/static`
    })
    await next();
});


await app.listen({port:3000});
console.log('Server running on port 2000');