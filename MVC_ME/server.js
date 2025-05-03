const express = require('express');
const router = require('./router/empRouter');
const connectMongo = require('./db.js');

connectMongo();
const app = express();
app.use(express.json());

app.get("/test",(req,res)=>{
    res.end("Default");
})



app.use("/emp",router);

app.listen(2001,()=>{
    console.log("running");
})