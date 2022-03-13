const mongoose = require("mongoose");
const Post = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    postName:{ type: String , require: true },
    postText : { type: String, require: true },
    NumberOfParticipants: { type:   Number, require: true },
    TechnologiesRequired:{ type: String, require: true },
    ProjectType:{ type: String, require: true },
   Participants:{ type:Array}

  },
  { timestamps: true }
);
module.exports=mongoose.model('Post',Post)
