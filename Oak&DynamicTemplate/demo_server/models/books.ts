import {getCollection} from '../helper/db.ts';

export class Books{
    static async create() {
       const insert = await getCollection().insertOne({
            username: "user1",
            password: "pass1"
        });

        return insert;
    }
    static async getAllBooks() {
        const books = await getCollection().find();
        return books;
    }
}