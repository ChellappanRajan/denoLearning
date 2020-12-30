import { Context } from "https://deno.land/x/oak/mod.ts";
import { create, decode } from "https://deno.land/x/djwt@v2.0/mod.ts";

export async function token(ctx: Context<Record<string, any>>,next: () => Promise<void> ) {
    const jwtToken =
    ctx.request.headers.get("Authorization")?.split(" ").pop() || "";

  if (jwtToken) {
    ctx.response.body = {
      msg: "No token, authorization denied",
    };
    ctx.response.status = 401;
  }

  const { payload, signature, header } = decode(jwtToken);
  
  ctx.response.headers.set("x-auth-token", (payload?.id as string  || ''));

  await next();
}
