import { MongoClient, Bson } from "https://deno.land/x/mongo@v0.20.1/mod.ts";
import { Collection } from "https://deno.land/x/mongo@v0.20.1/src/collection/collection.ts";
import { Database } from "https://deno.land/x/mongo@v0.20.1/src/database.ts";
import { ContactSchema } from '../Models/contachSchema.ts';


export class CreateDBConnection {
  static client: MongoClient;
  static dataBase:Database;
  static async initMongoDb() {
    this.client = new MongoClient();
    try {
      await this.client.connect("mongodb://localhost:27017");
      this.dataBase =  this.createContactKeeper();
    } catch (error) {
      console.log(error, 'Error');
    }
  }
  static createContactKeeper(){
    return this.client.database('contactKeeper');
  }
  static getContactCollection(): Collection<ContactSchema> {
      return this.dataBase.collection<ContactSchema>('contacts');
  }
}
