import { MongoClient, Collection } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

let collection:Collection;

export function connectDB() {
    const URL = "mongodb://localhost:27017";
    const client = new MongoClient();
    client.connectWithUri(URL);
    const db = client.database('sampledatabase');
    collection = db.collection('data');
}


export function getCollection(){
    return collection;
}

