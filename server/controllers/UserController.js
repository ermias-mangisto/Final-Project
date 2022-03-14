const Users = require('../models/UserModel');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
module.exports ={
register : async (req,res)=>{
    if(await Users.exists({email:req.body.email}))return res.status(400).send({message:"email already exists"})
   
    bcrypt.hash(req.body.password,10,async(err,hash)=>{
        if(err)return res.status(500).send({message:' hash error'});
        req.body.password=hash;
        console.log(req.body)
  await Users.create(req.body)
    .then(result => res.status(200).send({message:'success',result,success:true}))
    .catch(err=>res.status(500).send({message:err.message})) 
})
},
login: async(req, res)=>{
    const {email,password}=req.body;
    const user = await Users.findOne({email:email});
    if(user==null){
    return res.status(400).json({message:"user does not exist"})}
   bcrypt.compare(password,user.password,(err,isMatch)=>{
    if(err)return res.status(500).json({message:"error"});
    if(!isMatch)return res.status(403).json({message:"password is incorrect"});
   jwt.sign({user},process.env.SECRET_KEY ,{expiresIn:"1h"},(err,token)=>{
        if(err)return res.status(500).json({message:"error"})
        res.status(200).json({message:"login successful",token,success:true})
    })

    });
   
   
}

};