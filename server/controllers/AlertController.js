const Alert = require("../models/AlertModel");

//GET
let Get = async (req, res) => {
    await Alert.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ massage: error }));
};

//GET:ID
let GetById = async (req, res) => {
  await Alert.findById({_id:req.params.id})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ massage: error }));
};
let GetRequestsSent = async (req, res) => {
  await Alert.find({sendUserId:req.params.id ,type:"join"})
  .then((data)=>res.send(data))
    .catch((err) => res.status(404).send({ massage: error }));
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
  GetRequestsSent
};