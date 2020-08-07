import { Router, RouterContext } from "https://deno.land/x/oak/mod.ts";
import { renderFileToString } from "https://deno.land/x/dejs/mod.ts";

export const router = new Router();
type ctx = RouterContext<
  Record<string | number, string | undefined>,
  Record<string, any>
>;

router
  .get("/", async (ctx: ctx) => {
    const htmlResponse = await renderFileToString(
      `${Deno.cwd()}/views/app.ejs`,
      {},
    );
    ctx.response.body = htmlResponse;
  }).get("/add", async (ctx: ctx) => {
    const htmlResponse = await renderFileToString(
      `${Deno.cwd()}/views/add.ejs`,
      {},
    );

    ctx.response.body = htmlResponse;
  }).get("/about",async (ctx)=>{
    const htmlResponse = await renderFileToString(
      `${Deno.cwd()}/views/about.ejs`,
      {},
    );

    ctx.response.body = htmlResponse;
  });

export default router;
