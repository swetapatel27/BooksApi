const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');


//connect to mongdb
mongoose.connect("mongodb+srv://rkuuser:123@mycluster.jtfqi.mongodb.net/Student?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology: true}).then(
    ()=>{
        const app = express();
        app.use("/api",route);
        app.listen(process.env.PORT || 3000,()=>{
            console.log("server started..!!");
        })
    }
);
