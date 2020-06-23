import { Router } from "https://deno.land/x/oak/mod.ts";
import { GetBooks } from '../controller/controller.ts';
const router = new Router();



router.get('/', GetBooks);
// router.get('/books/:bookid', GetData);


export default router;