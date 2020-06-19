import { Router } from "https://deno.land/x/oak/mod.ts";
import { renderFileToString } from "https://deno.land/x/dejs@0.7.0/mod.ts";

import { Todos } from "../models/todo.ts";
const router = new Router();

router.get("/", async (ctx, next) => {
  //Template used here is taken from code pen..
  //https://codepen.io/barkins/pen/aEriL
  const body = await renderFileToString(
    `${Deno.cwd()}/views/app.ejs`,
    { title: "Todo App", todos: Todos.getAllTodos() },
  );
  ctx.response.body = body;
  next();
});

router.post("/save", async (ctx) => {
  console.log("Save.........");
  const body = await ctx.request.body();
  const newTask = {
    todo: body.value.get("task"),
    id: new Date().valueOf(),
  };
  Todos.addTodo(newTask);
  ctx.response.redirect("/");
});

router.post("/update", async (ctx) => {
  const formValue = await ctx.request.body();
  const id = formValue.value.get("id");
  console.log(id);
  let update;
  if (id) {
    Todos.UpdateTodo(+id, formValue.value.get("update"));
  }
  ctx.response.redirect("/");
});

// router.get("/:id", async (ctx) => {
//   const { id } = ctx.params;
//   let findById;
//   try {
//     if (id) {
//       findById = Todos.findTodoById(+id);
//     }
//     const body = await renderFileToString(`${Deno.cwd()}/views/show_todo.ejs`, {
//       title: "Single Todo",
//       todo: findById,
//     });
//     ctx.response.body = body;
//   } catch (error) {
//     console.error(error);
//   }
// });

export default router;
