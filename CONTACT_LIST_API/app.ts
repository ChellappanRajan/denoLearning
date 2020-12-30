import { Application,Context,Router } from "https://deno.land/x/oak/mod.ts";
import { CreateDBConnection } from "./Helper/db.ts";
import route from './Router/contactRouter.ts';

const app = new Application();
CreateDBConnection.initMongoDb();




app.use(route.routes());
app.use(route.allowedMethods());

await app.listen({ port: 8000 });
