const express = require('express');
const mongoose = require('mongoose');

mongoose.connect ("mongodb://localhost:27017/Rest_api") .then((result) => {
    console.log("connected");
}).catch((err) => {
    console.log(err);
});

const eSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    sal:{
        type:Number,
        required:true
    }
});

const eModel = mongoose.model("emp",eSchema);

const app = express();
app.use(express.json());

app.get("/",async(req,res)=>{
    const result = await eModel.find();
    console.log(result);
    res.json(result);
})

// app.post("/emp/add",async(req,res)=>{
//     const data = new eModel({
//         name:req.body.name,
//         sal:req.body.sal
//     })
//     const result = await data.save();
//     console.log(result);
//     res.json(result);

// })

// app.put("/emp/update",async(req,res)=>{
//     const result = await eModel.updateOne({
//         name:req.body.name,
//         sal:req.body.sal
// });//wrong one
//     console.log(result);
//     res.json(result);
// })

app.put("/emp/update/:id",async(req,resp)=>{
    try {
        const emp = await eModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        console.log(emp);
        resp.json(emp);
    } catch (error) {
        console.log(error);
    }
})

// app.put("/emp/delete",async(req,res)=>{
//     const result = await eModel.deleteOne({
//         name:req.body.name,
// });
//     console.log("deleted");
//     res.json(result);
// })
//or
app.delete("/emp/delete/:id",async(req,resp)=>{
    try {
        const empId= await empModel.deleteOne({_id:req.params.id});
        console.log(empId);
        resp.json(empId);
    } catch (error) {
        console.log(error);
    }
})



app.listen(2035,()=>{
    console.log("running");
    
})



