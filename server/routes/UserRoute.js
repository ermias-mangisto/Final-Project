const UserRouter=require('express').Router()
const {register,login} = require('../controllers/UserController')
UserRouter.post('/',register)
UserRouter.post('/login',login)

module.exports=UserRouter;