const mongoose = require("mongoose");
const Post = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    postName: { type: String, require: true },
    postText: { type: String, require: true },
    numberOfParticipants: { type: Number, require: true },
    technologiesRequired: { type: String, require: true },
    projectType: { type: String, require: true },
    participants: { type: Array },
    archivePost :{type: Boolean , default:false},
    likes:{type: Array ,required: true}
  },
  { timestamps: true }
);
module.exports = mongoose.model("Post", Post);
