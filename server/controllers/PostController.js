const Post=require('../models/PostModel')
const User=require('../models/UserModel')
const Get= async(req, res)=>{
    const {page,limit}=req.query;
  await Post.find().limit(limit).skip((page-1)*limit)
  .then((data)=>{res.send(data)})
  .catch((err)=>res.status(404).send({message: "err"}))
};

const GetById=async(req, res)=>{
   await Post.findById({_id:req.params.id})
    .then((data)=>{ res.send(data)})
    .catch((err)=>res.status(404).send({message: "err"}))
};

const GetByName=async(req, res)=>{
    const {pages,limit}=req.query;
   await Post.find({postName:req.params.postName}).limit(limit).skip((pages-1)*limit)
    .then((data)=>{ res.send(data)})
    .catch((err)=>res.status(404).send({message: "err"}))
};
const GetByProjectType=async(req, res)=>{
    const {pages,limit}=req.query;
   await Post.find({projectType:req.params.projectType}).limit(limit).skip((pages-1)*limit)
    .then((data)=>{ res.send(data)})
    .catch((err)=>res.status(404).send({message: "err"}))
};
const Add=async(req, res)=>{
<<<<<<< HEAD
await  Post.create(req.body)
  .then((data)=>{User.findOne({_id:req.params.id})
=======
 await  Post.create(req.body)
.then((data) => {res.send({success:true})})
  .then((data)=>{User.findOne({_id:req.params.id} )
>>>>>>> 45f9dcbe449a87b3e2cd47d1fe24be28061a905f
  .then((user)=>{user.cratedPost.push(data._id)
     user.save()})
   res.send(data)})
  .catch((err)=>res.send({message: "err"}))

};
const Update=async(req, res)=>{
  await  Post.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(Post.findOne({_id:req.params.id}).then((data)=>{res.send(data)}))
    .catch((err)=>res.status(404).send({message: "err"}))
 };
const Delete=async(req, res)=>{
   await Post.findByIdAndRemove({_id:req.params.id} )
    .then((data)=>{res.send(data)})
    .catch((err)=>res.status(404).send({message: "err"}))
};
module.exports ={Get,GetById,Update,Add,Delete,GetByProjectType,GetByName};