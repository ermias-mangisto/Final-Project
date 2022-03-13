const express= require ('express')
const ArchivedPostRouter= express.Router()
const {Get,GetById,GetByName,GetByProjectType,Update,Add,Delete}=require('../controllers/ArchivedPostController') 

ArchivedPostRouter.get("/",Get)
ArchivedPostRouter.get("/:id",GetById)
ArchivedPostRouter.get("/:name", GetByName)
ArchivedPostRouter.get("/:type", GetByProjectType)
ArchivedPostRouter.post("/add",Add)
ArchivedPostRouter.put("/update:id",Update )
ArchivedPostRouter.delete("/delete:id", Delete)


module.exports = ArchivedPostRouter;