const mongoose = require("mongoose");
const Comment = new mongoose.Schema(
  {
    userId:{type:mongoose.Schema.Types.ObjectId,
      ref:'User'
      },
    postId:{ type: String},
    commentText: { type: String, require: true }
    
  },
  { timestamps: true }
);
module.exports=mongoose.model('Comment',Comment)
