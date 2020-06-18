import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { renderFileToString } from 'https://deno.land/x/dejs@0.7.0/mod.ts';

const app = new Application();
const router = new Router();

const todos: Array<{id: number, todo: string}> = [];


router.get('/', async (ctx,next)=>{
    //Template used here is taken from code pen..
    //https://codepen.io/barkins/pen/aEriL
    const body =  await renderFileToString(`${Deno.cwd()}/views/app.ejs`, {title: 'Todo App', todos});
    ctx.response.body = body;
// next();
 
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


router.get('/:id', async (ctx)=>{
    const {id} = ctx.params;
    let findById;
    if(id){
        findById = todos.find(item=>item.id == +id);
    }
    const body = await renderFileToString(`${Deno.cwd()}/views/show_todo.ejs`,{
        title: 'Single Todo',
        todo:findById
    });
    ctx.response.body = body;
});


router.post('/update', async (ctx)=>{
    const formValue = await ctx.request.body();
    const id = formValue.value.get('id');
    console.log(id);
    let update;
    if(id){
        let index = todos.findIndex(item=>item.id == +id);
        todos[index].todo = formValue.value.get('update') 
    }
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


console.log('Server running on port 3000');
await app.listen({port:3000});