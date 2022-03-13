const Post=require('../models/PostModel')
const Get= async(req, res)=>{
    const {pages,limit}=req.query;
  await Post.find().limit(limit).skip((pages-1)*limit)
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
   await Post.filter({postName:req.params.Name}).limit(limit).skip((pages-1)*limit)
    .then((data)=>{ res.send(data)})
    .catch((err)=>res.status(404).send({message: "err"}))
};
const GetByProjectType=async(req, res)=>{
    const {pages,limit}=req.query;
   await Post.filter({ProjectType:req.params.type}).limit(limit).skip((pages-1)*limit)
    .then((data)=>{ res.send(data)})
    .catch((err)=>res.status(404).send({message: "err"}))
};
const Add=async(req, res)=>{
  await  Post.create(req.body)
    .then((data)=>{res.send(data)})
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