const Users = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {
    register: async (req, res) => {
        if (await Users.exists({ email: req.body.email })) return res.status(400).send({ message: "email already exists" })

        bcrypt.hash(req.body.password, 10, async (err, hash) => {
            if (err) return res.status(500).send({ message: ' hash error' });
            req.body.password = hash;
            console.log(req.body)
            await Users.create(req.body)
                .then(result => res.status(200).send({ message: 'success', result, success: true }))
                .catch(err => res.status(500).send({ message: err.message }))
        })
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        const user = await Users.findOne({ email: email });
        if (user == null) {
            return res.status(400).json({ message: "one of the details is incorrect" })
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ message: "error" });
            if (!isMatch) return res.status(403).json({ message:"one of the details is incorrect" });
            jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: "12d" }, (err, token) => {
                if (err) return res.status(500).json({ message: "error" })
                res.status(200).json({ message: "login successful", token, success: true })
            })

        })
    },
    GetAll: async (req, res) => {
        const { page, limit } = req.query;
        await Users.find().limit(limit).skip((page - 1) * limit)
            .then((data) => { res.send(data) })
            .catch((err) => res.status(404).send({ message: err.message }))
    },
    GetAllCreatedPosts: async (req, res) => {
    const posts= await Users.findOne({ _id: req.params.id }).populate("cratedPost")
       res.send(posts.cratedPost)
    },
    GetAllJoinedPosts: async (req, res) => {
    const posts= await Users.findOne({ _id: req.params.id }).populate("joinedPost")
       res.send(posts.joinedPost)
    },
    GetById: async (req, res) => {
        await Users.findById({ _id: req.params.id })
            .then((data) => { 
                
                res.send(data) })
            .catch((err) => res.status(404).send({ message: err.message }))
    },
    GetByName: async (req, res) => {
        const { page, limit } = req.query;
        await Users.find({ firstName: req.params.firstName }).limit(limit).skip((page - 1) * limit)
            .then((data) => { res.send(data) })
            .catch((err) => res.status(404).send({ message: err.message }))
    },
    Update: async (req, res) => {
        await Users.findByIdAndUpdate({ _id: req.params.id }, req.body)
            .then(data => res.send(data))
            .catch((err) => res.status(404).send({ message: err.message }))        

    },
    Delete: async (req, res) => {
        await Users.findByIdAndRemove({ _id: req.params.id })
            .then((data) => { res.send(data) })
            .catch((err) => res.status(404).send({ message: err.message }))
    }
}