import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import { renderFileToString } from "https://deno.land/x/dejs@0.7.0/mod.ts";


type ctx = RouterContext<Record<string | number, string | undefined>, Record<string, any>>;
type next = () => Promise<void>;
import { Todos } from "../models/todo.ts";

export async function allTodos(ctx: ctx, next:next){
    const body = await renderFileToString(
        `${Deno.cwd()}/views/app.ejs`,
        { title: "Todo App", todos: Todos.getAllTodos() },
      );
        ctx.response.body = body
        next();
} 

export async function save(ctx: ctx){
        console.log("Save.........");
        const body = await ctx.request.body();
        const newTask = {
          todo: body.value.get("task"),
          id: new Date().valueOf(),
        };
        Todos.addTodo(newTask);
        ctx.response.redirect("/");
}

export async function update(ctx:ctx){

    const formValue = await ctx.request.body();
    const id = formValue.value.get("id");
    console.log(id);
    let update;
    if (id) {
      Todos.UpdateTodo(+id, formValue.value.get("update"));
    }
    ctx.response.redirect("/");
}

export async function getById(ctx:ctx) {
      const { id } = ctx.params;
      let findById;
      try {
        if (id) {
          findById = Todos.findTodoById(+id);
        }
        const body = await renderFileToString(`${Deno.cwd()}/views/show_todo.ejs`, {
          title: "Single Todo",
          todo: findById,
        });
        ctx.response.body = body;
      } catch (error) {
        console.error(error);
      }
    }
