import { Context } from "https://deno.land/x/oak/mod.ts";
import { CreateDBConnection } from "../Helper/db.ts";
import { create, decode } from "https://deno.land/x/djwt@v2.0/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

export async function userLogin(
  ctx: Context<Record<string, any>>
) {
  try {
    const body = await ctx.request.body();
 

    if (body.type === "json") {
        const {email,password} =await body.value;
        const isUserLoggedIn = await CreateDBConnection.getUserCollection().findOne({email});
        if(!isUserLoggedIn){
            ctx.response.status = 400;
            ctx.response.body = {msg:"Un authorized error"};
        }
        const isMatched = bcrypt.compareSync(password, isUserLoggedIn!.password);
        if(isMatched){
            const jwt = await create(
                { alg: "HS512", typ: "JWT" },
                { id: isUserLoggedIn!._id },
                "secret"
              );
            ctx.response.body = {
                token:jwt ,
                success: true,
              };
        }
    }

  } catch (error) {
    console.log(error);
    ctx.throw(400, "Un authorized error");
  }
}
