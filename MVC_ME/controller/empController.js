const empModel = require('../model/empModel.js');

const getEmp = async(req,res)=>{
    try {
        const result = await empModel.find();
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}

const addEmp = async(req,res)=>{
    try {
        const data = new empModel({
            name:req.body.name,
            sal:req.body.sal
        })
        const result = await data.save();
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}

const updateEmp  =async (req,res)=>{
        try {
            const emp = await empModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
            console.log(emp);
            res.json(emp);
        } catch (error) {
            console.log(error);
        }
    
    
}

const deleteEmp = async(req,res)=>{
    try {
        const empId= await empModel.deleteOne({_id:req.params.id});
            console.log(empId);
            res.json(empId);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {getEmp,addEmp,updateEmp,deleteEmp}