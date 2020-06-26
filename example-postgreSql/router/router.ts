import { Router } from "https://deno.land/x/oak/mod.ts";
import { getAllCourses } from '../controller/controller.ts';

const router = new Router();

router.get('/',getAllCourses);



export default router;
