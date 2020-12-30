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

// const ContactSchema = mongoose.Schema({
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'users'
//     },
//     name: {
//       type: String,
//       required: true
//     },
//     email: {
//       type: String,
//       required: true
//     },
//     phone: {
//       type: String
//     },
//     type: {
//       type: String,
//       default: 'personal'
//     },
//     date: {
//       type: Date,
//       default: Date.now
//     }
//   });
  