
import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import { Books } from '../models/books.ts';

type ctx =  RouterContext<Record<string | number, string | undefined>, Record<string, any>>

export  async function GetBooks(ctx:ctx){    
  const books = await  Books.getAllBooks();
  console.log(books);
  ctx.response.body = {
    books,
    success:true
  };
} 