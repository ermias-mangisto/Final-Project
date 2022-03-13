const mongoose = require("mongoose");
const Alert = new mongoose.Schema(
  {
    sendUserId: { type: String, require: true },
    postId: { type: String, require: true },
   receiverUserId: { type: String, require: true},
    type:{ type: String, require: true }//comment, deleted ,join ,accepted
  },
  { timestamps: true }
);
module.exports=mongoose.model('Alert',Alert)
