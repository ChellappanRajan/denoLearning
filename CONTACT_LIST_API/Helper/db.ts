import { MongoClient, Bson } from "https://deno.land/x/mongo@v0.20.1/mod.ts";
import { Collection } from "https://deno.land/x/mongo@v0.20.1/src/collection/collection.ts";
import { Database } from "https://deno.land/x/mongo@v0.20.1/src/database.ts";
import { ContactSchema } from '../Models/contachSchema.ts';
import { Auth } from '../Models/auth.ts';

export class CreateDBConnection {
  static client: MongoClient;
  static contactdataBase:Database;


  static async initMongoDb() {
    this.client = new MongoClient();
    try {
      await this.client.connect("mongodb://localhost:27017");
      this.contactdataBase =  this.createContactKeeperDB();

    } catch (error) {
      console.log(error, 'Error');
    }
  }
  static createContactKeeperDB(){
    return this.client.database('contactKeeper');
  }
 
  static getContactCollection(): Collection<ContactSchema> {
      return this.contactdataBase.collection<ContactSchema>('contacts');
  }
  static getUserCollection():Collection<Auth>{
    return this.contactdataBase.collection<Auth>('users');
  }
}

// http://man.hubwiz.com/docset/MongoDB.docset/Contents/Resources/Documents/docs.mongodb.org/manual/reference/command/createIndexes/index.html