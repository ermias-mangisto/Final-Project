const express= require ('express')
const ReportRouter= express.Router()
const {Get,GetById,Update,Add,Delete}=require('../controllers/ReportController') 

ReportRouter.get("/",Get)
ReportRouter.get("/:id",GetById)
ReportRouter.post("/add",Add)
ReportRouter.put("/update/:id",Update )
ReportRouter.delete("/delete/:id", Delete)


module.exports = ReportRouter;