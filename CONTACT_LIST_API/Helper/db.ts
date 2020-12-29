import { MongoClient, Bson } from "https://deno.land/x/mongo@v0.20.1/mod.ts";


// initMongoDb() {
//     const client = new MongoClient();
//     await client.connect("mongodb://localhost:27017");
// }

export class CreateDBConnection{
   static async initMongoDb(){
    const client = new MongoClient();
    try {
        await client.connect("mongodb://localhost:27017");
    } catch (error) {
        console.log(error);
    }
    }
}