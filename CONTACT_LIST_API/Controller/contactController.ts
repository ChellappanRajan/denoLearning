import { Context } from "https://deno.land/x/oak/mod.ts";
import { CreateDBConnection } from "../Helper/db.ts";

// https://github.com/eveningkid/denodb/issues/146
// deno run -c tsconfig.json --allow-net --allow-read --unstable app.ts
export async function getContacts(
  ctx: Context<Record<string, any>>
) {
  try {
    const id = ctx.response.headers.get('x-auth-token');
    const userCursor = await CreateDBConnection.getContactCollection().find({user_id:id});
    const contacts = await userCursor.toArray();
    ctx.response.body = {
      contacts: contacts,
      success: true,
    };
  } catch (error) {
    console.log(error);
    ctx.response.body = error;
    ctx.throw(400, "Un authorized error");
  }
}

export async function createContacts(
  ctx: Context<Record<string, any>>
) {
  try {
    const body = await ctx.request.body();
    const id = ctx.response.headers.get('x-auth-token');

    if (body.type === "json") {
      const { name, email, phone, type, date } = await body.value;
      const getContact = await CreateDBConnection.getContactCollection()
        .insertOne({
          user_id:id,
          name,
          email,
          phone,
          type,
          date,
        });
      ctx.response.status = 201;
      ctx.response.body = {
        contacts: getContact,
        msg: "Contacts Created Successfully",
      };
    }
  } catch (error) {
    console.log(error);
    ctx.throw(400, "Un authorized error");
  }
}
