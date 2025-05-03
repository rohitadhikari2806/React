const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.end("Home");
})

app.post("/Updated",(req,res)=>{
    res.end("Updated");
})

app.delete("/deleted",(req,res)=>{
    res.end("Deleted")
})

app.listen(2000,()=>{
    console.log("Running");  
})