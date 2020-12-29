// Defining schema interface
export interface ContactSchema {
    _id: { $oid: string };
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
  