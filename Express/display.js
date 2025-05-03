const express = require('express');

const app= express();

app.get("/",(req,res)=>{
    res.sendFile('./views/home.html',{root:__dirname})
})

app.get("/aboutus",(req,res)=>{
    res.sendFile('./views/aboutus.html',{root:__dirname})
})



app.listen(2050,()=>{
    console.log("running");
    
})

