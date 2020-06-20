import { Router } from "https://deno.land/x/oak/mod.ts";
import { renderFileToString } from "https://deno.land/x/dejs@0.7.0/mod.ts";

import { allTodos, save, update } from '../controller/todo_controller.ts';
const router = new Router();

router.get("/",allTodos);

router.post("/save", save);

router.post("/update",update);

//FIXME():sometime panic
// router.get("/:id", async (ctx) => getById);

export default router;
