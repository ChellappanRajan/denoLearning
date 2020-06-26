import { dbConnection } from './helper/helper.ts';
import { Application } from "https://deno.land/x/oak/mod.ts";

import router from './router/router.ts'



const application = new Application();

  application.use( async (ctx, next)=>{
    try {
      const client = await dbConnection();
      console.log('Connected to DB.');
     await next();
    } catch (error) {
      console.log(error, 'Error.');
    }
  });

application.addEventListener('listen',({hostname,port,secure})=>{
  console.log(`Listening on:${port}`);
});



//Connecting router middlewares
application.use(router.allowedMethods());
application.use(router.routes());



const listen = await application.listen({port: 8000});



