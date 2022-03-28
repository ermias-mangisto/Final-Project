const dotenv=require('dotenv');
dotenv.config();
const path=require('path');
const express=require('express');
const app=express();
const cors=require('cors')
app.use(cors());
const passport=require('passport');
require('./config/passport')(passport);
const port=process.env.PORT ;
app.use(express.json());


const PostRouter=require('./routes/PostRoute');
const CommentRouter=require('./routes/CommentRoute');
const AlertRouter=require('./routes/AlertRoute');
const ReportRouter=require('./routes/ReportRoute');
const ArchivedPostRouter=require('./routes/ArchivedPostRoute');
const UserRouter=require('./routes/UserRoute');


require('./Db/db');

app.use(passport.initialize());
app.use('/register',UserRouter);
app.use('/post',passport.authenticate("jwt",{session:false}),PostRouter);
app.use('/comment',passport.authenticate("jwt",{session:false}),CommentRouter);
app.use('/alert',passport.authenticate("jwt",{session:false}),AlertRouter);
app.use('/report',passport.authenticate("jwt",{session:false}),ReportRouter);
app.use('/archivedPost',passport.authenticate("jwt",{session:false}),ArchivedPostRouter);
app.listen(port);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.use(express.static('public'));
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
  }


