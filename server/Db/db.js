const mongoose=require('mongoose');

const ConnectionString=process.env.STRING_CONNECTION;
mongoose.connect(ConnectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log('connected'))
.catch((err)=>console.log('err'));
module.exports=mongoose.connection;