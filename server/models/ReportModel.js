
const mongoose = require("mongoose");
const Report = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    postId: { type: String, require: true },
    postUserId: { type: String, require: true},//קריאה של מי שיצר את הפוסט הבעייתי 
    text:{ type: String, require: true },//הטקס הוא מובנה 
  },
  { timestamps: true }
);
module.exports=mongoose.model('Report',Report)
