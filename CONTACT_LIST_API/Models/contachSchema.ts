//https://docs.mongodb.com/manual/core/data-modeling-introduction/#references 

// Defining schema interface
export interface ContactSchema {
    _id: { $oid: string };
    user_id: string;
    name: string;
    email: string;
    phone:string;
    type: string;
    date: string;
}
