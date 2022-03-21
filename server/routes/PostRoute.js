const express= require ('express')
const PostRouter= express.Router()
const {Get,GetById,GetByName,GetByProjectType,Update,Add,Delete}=require('../controllers/PostController') 

PostRouter.get("/",Get)
PostRouter.get("/name/:postName", GetByName)
PostRouter.get("/type/:projectType", GetByProjectType)
PostRouter.get("/:id",GetById)
PostRouter.post("/add/:id",Add)
PostRouter.put("/update/:id",Update )
PostRouter.delete("/delete/:id", Delete)


module.exports = PostRouter;