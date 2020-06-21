
import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import collection from '../helper/db.ts';

type ctx =  RouterContext<Record<string | number, string | undefined>, Record<string, any>>

export  async function GetData(ctx:ctx){
console.log(ctx.request.url.pathname);
           // insert
const insertId = await collection!.insertOne({
    username: "user1",
    password: "pass1",
});


} 