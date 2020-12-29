import { Context,Router } from "https://deno.land/x/oak/mod.ts";
import { getContacts } from "../Controller/contactController.ts";

const route = new Router();

route.get('/api/v1/contacts',getContacts);

export default route;