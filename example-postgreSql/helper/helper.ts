import { Client } from "https://deno.land/x/postgres@v0.4.2/mod.ts";
let client:Client;
export async function dbConnection() {
    client = await new Client({
      user: "postgres",
      database: "deno_api",
      hostname: "localhost",
      port: 5432,
      password:"password"
    });

    await client.connect();

    // await client.end();
  }


  export function getClient(){
    return client;
  }
