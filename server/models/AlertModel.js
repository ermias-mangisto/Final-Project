const mongoose = require("mongoose");
const Alert = new mongoose.Schema(
  {
    sendUserId:{type:mongoose.Schema.Types.ObjectId,
      ref:'User'
      },
    postId: {type:mongoose.Schema.Types.ObjectId,
    ref:'Post'
    },
    receiverUserId: { type: String, require: true},
    type:{ type: String, require: true }//comment, deleted ,join ,accepted
  },
  { timestamps: true }
);
module.exports=mongoose.model('Alert',Alert)
