const ArchivedPost = require("../models/ArchivedPostModel");

const Get = async (req, res) => {
  const { page, limit } = req.query;
  await ArchivedPost.find()
    .limit(limit)
    .skip((page - 1) * limit)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ message: "err789" }));
};

const GetById = async (req, res) => {
  await ArchivedPost.findById({ _id: req.params.id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ message: "err123" }));
};

const GetByUserId = async (req, res) => {
  await ArchivedPost.find(
    participants.find((item) => item == req.params.userId)
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ message: "err123" }));
};

const GetByName = async (req, res) => {
  const { page, limit } = req.query;
  await ArchivedPost.find({ postName: req.params.postName })
    .limit(limit)
    .skip((page - 1) * limit)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ message: "errtretre" }));
};

const GetByProjectType = async (req, res) => {
  const { page, limit } = req.query;
  await ArchivedPost.find({ projectType: req.params.projectType })
    .limit(limit)
    .skip((page - 1) * limit)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ message: "err" }));
};

const Add = async (req, res) => {
  await ArchivedPost.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.send({ message: "err" }));
};

const Update = async (req, res) => {
  await ArchivedPost.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(
      ArchivedPost.findOne({ _id: req.params.id }).then((data) => {
        res.send(data);
      })
    )
    .catch((err) => res.status(404).send({ message: "err" }));
};

const Delete = async (req, res) => {
  await ArchivedPost.findByIdAndRemove({ _id: req.params.id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ message: "err" }));
};

module.exports = {
  Get,
  GetById,
  Update,
  Add,
  Delete,
  GetByProjectType,
  GetByName,
  GetByUserId,
};
