const Report = require("../models/ReportModel");

//GET
let Get = async (req, res) => {
    const {page,limit}=req.query;
    await Report.find().populate("postId userId").limit(limit).skip((page-1)*limit)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ massage: error }));
};

//GET:ID
let GetById = async (req, res) => {
  await Report.findById({_id:req.params.id})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ massage: error }));
};
//POST
let Add = async (req, res) => {
  await Report.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ massage: error }));
};

//PUT
let Update =async (req, res) => {
await  Report.findByIdAndUpdate({_id:req.params.id}, req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ massage: error }));
};

//DELETE
let Delete = async(req, res) => {
await  Report.findByIdAndRemove({_id:req.params.id}).then((data) => {
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
};