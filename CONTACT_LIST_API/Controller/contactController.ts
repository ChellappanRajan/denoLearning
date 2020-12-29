import { Context,Router } from "https://deno.land/x/oak/mod.ts";

export async function getContacts(ctx:Context<Record<string, any>>, next: () => Promise<void>){
    ctx.response.body = 'Hello Contact';
}