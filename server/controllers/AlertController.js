const Alert = require("../models/AlertModel");

//GET
let Get = async (req, res) => {
    await Alert.find().populate("postId sendUserId receiverUserId")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ massage: error }));
};

//GET:ID
let GetById = async (req, res) => {
  await Alert.findById({_id:req.params.id}).populate("postId sendUserId receiverUserId")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ massage: error }));
};
let GetRequestsSent = async (req, res) => {
 const requests =await Alert.find({sendUserId:req.params.id ,type:"join"}).populate("postId receiverUserId")
  res.send(requests)
};
//POST
let Add = async (req, res) => {
  await Alert.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ massage: error }));
};

//PUT
let Update = async(req, res) => {
await Alert.findByIdAndUpdate({_id:req.params.id}, req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ massage: error }));
};

let DeleteRequestsSent = async (req, res) => {
 await Alert.deleteMany({postId:req.params.postId ,type:"join"})
 .then((data) => {
  res.send(data);
})
.catch((err) => res.status(404).send({ massage: error }));
 };
//DELETE
let Delete = async(req, res) => {
 await Alert.findByIdAndRemove({_id:req.params.id}).then((data) => {
    res.send(data);
  })
  .catch((err) => res.status(404).send({ massage: error }));
};

module.exports = {
  Get,
  GetById,
  Add,
  Update,
  Delete,
  GetRequestsSent,
  DeleteRequestsSent
};