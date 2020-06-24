import { Client } from "https://deno.land/x/postgres@v0.4.2/mod.ts";

async function main() {
  const client = new Client({
    user: "postgres",
    database: "deno_api",
    hostname: "localhost",
    port: 5432,
    password:"password"
  });
  try {
    await client.connect();
    const result = await client.query("SELECT * FROM courses;");
    console.log(result.rows);
  } catch (error) {
      console.log(error, 'erro');
  }

  await client.end();
}

main();