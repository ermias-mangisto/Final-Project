
const mongoose = require("mongoose");
const Report = new mongoose.Schema(
  {
    userId: {type:mongoose.Schema.Types.ObjectId,
      ref:'User'
      },
    postId: {type:mongoose.Schema.Types.ObjectId,
      ref:'Post'
      },
    postUserId: { type: String, require: true},//קריאה של מי שיצר את הפוסט הבעייתי 
    text:{ type: String, require: true },//הטקס הוא מובנה 
  },
  { timestamps: true }
);
module.exports=mongoose.model('Report',Report)
