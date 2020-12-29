import { Context } from "https://deno.land/x/oak/mod.ts";
import { CreateDBConnection } from '../Helper/db.ts';

export async function getContacts(ctx:Context<Record<string, any>>, next: () => Promise<void>){
    try {
        const getContact = await CreateDBConnection.getContactCollection().find( );
        const contacts = await getContact.toArray();
        ctx.response.body = {
            contacts:contacts,
            success: true
        };
    } catch (error) {
        ctx.throw(400,'Un authorized error');
    }
}


export async function createContacts(ctx:Context<Record<string, any>>, next: () => Promise<void>){
   try {
    const body = await ctx.request.body();
    if(body.type === 'json'){
        const {name,email,phone,type,date} = await body.value;
        const getContact = await CreateDBConnection.getContactCollection().insertOne({
            name,
            email,
            phone,
            type,
            date
        });
        ctx.response.status = 201;
        ctx.response.body = {
            contacts:getContact,
            msg:'Contacts Created Successfully'
        };
    }
   } catch (error) {
       console.log(error);
       ctx.throw(400,'Un authorized error');
   }
  
}