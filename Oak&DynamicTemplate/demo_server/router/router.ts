import { Router } from "https://deno.land/x/oak/mod.ts";
import { GetData } from '../controller/controller.ts';
const router = new Router();



router.get('/', GetData);



export default router;