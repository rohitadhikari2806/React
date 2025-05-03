const express = require('express');
const router = require('./empRouter/router.js');
const connectMongo = require('./dbs.js');

connectMongo();

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/test",(req,res)=>{
    res.end("default")
})

app.get("/",(req,res)=>{
    res.sendFile("./view/form.html",{root:__dirname})
})

app.use("/emp",router);

app.listen(2002,()=>{
    console.log("running");
    
})