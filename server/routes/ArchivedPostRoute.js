const express= require ('express')
const ArchivedPostRouter= express.Router()
const {Get,GetById,GetByName,GetByProjectType,Update,Add,Delete}=require('../controllers/ArchivedPostController') 

ArchivedPostRouter.get("/",Get)
ArchivedPostRouter.get("/type/:projectType", GetByProjectType)
ArchivedPostRouter.get("/name/:postName", GetByName)
ArchivedPostRouter.get("/:id",GetById)
ArchivedPostRouter.post("/add",Add)
ArchivedPostRouter.put("/update/:id",Update )
ArchivedPostRouter.delete("/delete/:id", Delete)


module.exports = ArchivedPostRouter;    