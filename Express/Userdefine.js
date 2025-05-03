const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


//userdefined middleware
function validateData(req,res,next){
    const data = req.body;
    const charreg = /[A-Za-z]+/
    const numreg = /[\d]+/
    if(!charreg.test(data.name)|| !numreg.test(data.sal)){
        return res.status(400).json({
            error:"data is invalid try again",
            message:"Name should contain all the characters and salary should contain all the numbers"
        })
    }

    next();
}


app.post("/data",validateData,(req,res)=>{
    const data = req.body;
    res.json({
        message : "data is inserted",
        data: data
    })
})

app.get("/",(req,res)=>{
    res.sendFile("./views/form.html",{root:__dirname});
})

app.listen(2000,()=>{
    console.log("connected");
})