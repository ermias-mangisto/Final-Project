const mongoose = require("mongoose");
const Alert = new mongoose.Schema(
  {
    sendUserId: { type: String, require: true },
    postId: {type:mongoose.Schema.Types.ObjectId,
      ref:'Post'
      },
      receiverUserId: {type:mongoose.Schema.Types.ObjectId,
        ref:'User'
        },
    type:{ type: String, require: true }//comment, deleted ,join ,accepted
  },
  { timestamps: true }
);
module.exports=mongoose.model('Alert',Alert)
