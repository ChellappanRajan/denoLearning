import { Context,Router } from "https://deno.land/x/oak/mod.ts";
import { getContacts,createContacts } from "../Controller/contactController.ts";
import { createUser,getUser } from "../Controller/auth.ts";
import { token } from '../Middleware/token.ts';
import { composeMiddleware as compose } from "https://deno.land/x/oak/mod.ts";
import { userLogin } from '../Controller/userLogin.ts';

const route = new Router();

route.get('/api/v1/contacts',token,getContacts);
route.post('/api/v1/contacts',token,createContacts);


route.get('/api/v1/auth',token,getUser);
route.post('/api/v1/auth',createUser);

route.post('/api/v1/login', userLogin);



export default route;