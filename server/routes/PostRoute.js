const express= require ('express')
const PostRouter= express.Router()
const {Get,GetById,GetByName,GetByProjectType,Update,Add,Delete}=require('../controllers/PostController') 

PostRouter.get("/",Get)
PostRouter.get("/:id",GetById)
PostRouter.get("/:name", GetByName)
PostRouter.get("/:type", GetByProjectType)
PostRouter.post("/add",Add)
PostRouter.put("/update/:id",Update )
PostRouter.delete("/delete/:id", Delete)


module.exports = PostRouter;