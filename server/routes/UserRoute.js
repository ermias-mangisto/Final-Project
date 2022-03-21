const UserRouter=require('express').Router()
const {register,login, GetAll, GetById, GetByName, Update, Delete,GetAllCreatedPosts,GetAllJoinedPosts} = require('../controllers/UserController')
UserRouter.post('/',register);
UserRouter.post('/login',login);
UserRouter.get('/',GetAll);
UserRouter.get('/created/:id',GetAllCreatedPosts);
UserRouter.get('/joined/:id',GetAllJoinedPosts);
UserRouter.get('/:id',GetById);
UserRouter.get('/name/:firstName',GetByName);
UserRouter.put('/update/:id',Update);
UserRouter.delete('/delete/:id',Delete);
module.exports=UserRouter;