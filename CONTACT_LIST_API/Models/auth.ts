// Defining auth schema interface
export interface Auth {
    _id: { $oid: string };
    name: string;
    password:string;
}
