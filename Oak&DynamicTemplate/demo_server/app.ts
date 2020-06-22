import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { connectDB } from './helper/db.ts';
import router from './router/router.ts'; 

const app = new Application();
connectDB();


app.use(router.routes());
app.use(router.allowedMethods());

console.log('Server Listening at port 3000');
await app.listen({port: 3000});