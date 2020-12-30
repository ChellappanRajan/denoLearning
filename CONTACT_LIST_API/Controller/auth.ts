import { Context } from "https://deno.land/x/oak/mod.ts";
import { CreateDBConnection } from "../Helper/db.ts";
import { create, decode } from "https://deno.land/x/djwt@v2.0/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import { Bson } from "https://deno.land/x/mongo@v0.20.1/deps.ts";

export async function getUser(
  ctx: Context<Record<string, any>>,
  next: () => Promise<void>
) {
  try {
      const body = await ctx.request.body();
      const id = ctx.response.headers.get('x-auth-token');
      const user = await CreateDBConnection.getUserCollection().findOne({_id: new Bson.ObjectId(id) },{projection:{password:0}});
      ctx.response.body = {
      ...user,
      success: true,
    };
  } catch (error) {
    ctx.throw(400, "Un authorized error");
  }
}

export async function createUser(
  ctx: Context<Record<string, any>>,
  next: () => Promise<void>
) {
  try {
    const body = await ctx.request.body();
    if (body.type === "json") {
      let { password } = await body.value;
      const { email } = await body.value;
      
      const user = await CreateDBConnection.getUserCollection().findOne({email});

      if (user) {
        ctx.response.status = 400;
          ctx.response.body = {
            msg:"User already exists"
          }
          return;
      }

      password = await bcrypt.hash(password);

      const insertedUserId = await CreateDBConnection.getUserCollection().insertOne(
        {
          email,
          password,
        }
      );

      const jwt = await create(
        { alg: "HS512", typ: "JWT" },
        { id: insertedUserId },
        "secret"
      );

      ctx.response.status = 201;
      ctx.response.body = {
        token: jwt,
      };
    }
  } catch (error) {
    ctx.throw(400, "Error");
  }
}
