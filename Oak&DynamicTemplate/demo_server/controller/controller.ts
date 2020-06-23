
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

export  async function InsertBook(ctx:ctx){    
  const book = await  ctx.request.body();
  const success = await Books.create();
  ctx.response.body = {
    success:true
  };
} 