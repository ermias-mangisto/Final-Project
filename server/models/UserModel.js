const mongoose = require("mongoose");
const User = new mongoose.Schema(
  {
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    image:{type: String , default:""},
    summary: {type: String},
    password:{ type: String, require: true },
    lastLogin: { type: Date, default: Date.now },
    isLogin: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    phoneNumber: { type: Number, require: true ,unique: true },
    cratedPost:[{type:mongoose.Schema.Types.ObjectId,
    ref:'Post'
    }],
    joinedPost:[{type:mongoose.Schema.Types.ObjectId,
      ref:'Post'
      }]
  },
  { timestamps: true }
);
module.exports=mongoose.model('User',User);


