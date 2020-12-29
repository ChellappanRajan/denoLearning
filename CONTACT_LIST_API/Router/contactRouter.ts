import { Context,Router } from "https://deno.land/x/oak/mod.ts";
import { getContacts,createContacts } from "../Controller/contactController.ts";

const route = new Router();

route.get('/api/v1/contacts',getContacts);
route.post('/api/v1/contacts',createContacts);


export default route;