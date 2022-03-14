const dotenv=require('dotenv');
dotenv.config();
const path=require('path');
const express=require('express');
const app=express();
const cors=require('cors')
const passport=require('passport');
app.use(cors());
app.use(express.json());
const port=process.env.PORT ;
require('./Db/db');
const PostRouter=require('./routes/PostRoute');
const CommentRouter=require('./routes/CommentRoute');
const AlertRouter=require('./routes/AlertRoute');
const ReportRouter=require('./routes/ReportRoute');
const ArchivedPostRouter=require('./routes/ArchivedPostRoute');
const UserRouter=require('./routes/UserRoute');
require('./config/passport')(passport);
app.use(passport.initialize())
app.use('/register',UserRouter);
app.use('/post',PostRouter);
app.use('/comment',CommentRouter);
app.use('/alert/',AlertRouter);
app.use('/report',ReportRouter);
app.use('/archivedPost',ArchivedPostRouter);
app.listen(port);
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
//     app.use(express.static('public'));
//     app.get('*', (req, res)=>{
//         res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//     });
//   }


