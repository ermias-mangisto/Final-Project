const express= require ('express')
const AlertRouter= express.Router()
const {Get,GetById,Update,Add,Delete,GetRequestsSent,DeleteRequestsSent}=require('../controllers/AlertController') 

AlertRouter.get("/",Get)
AlertRouter.get("/:id",GetById)
AlertRouter.get("/requests/:id",GetRequestsSent)
AlertRouter.post("/add",Add)
AlertRouter.put("/update/:id",Update )
AlertRouter.delete("/delete/:id", Delete)
AlertRouter.delete("/delete-requests/:postId", DeleteRequestsSent)


module.exports = AlertRouter;