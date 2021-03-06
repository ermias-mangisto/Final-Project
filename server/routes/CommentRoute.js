const express= require ('express')
const CommentRouter= express.Router()
const {GetByPost,Get,GetById,Update,Add,Delete}=require('../controllers/CommentController') 

CommentRouter.get("/",Get)
CommentRouter.get("/postId/:postId",GetByPost)
CommentRouter.get("/:id",GetById)
CommentRouter.post("/add",Add)
CommentRouter.put("/update/:id",Update )
CommentRouter.delete("/delete/:id", Delete)


module.exports = CommentRouter;