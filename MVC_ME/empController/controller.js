const eModel = require('../empModel/model.js');

const getEmps = async(req,res)=>{
    try {
        const result = await eModel.find();
        res.json(result);
    } catch (error) {
        console.log(error);
        
    }
}

const addEmps = async(req,res)=>{
    try {
        const data = new eModel({
            name:req.body.name,
            salary:req.body.salary
        })
        const result = await data.save();
        res.json(result);
        
    } catch (error) {
        console.log(error);
        
    }
}

const updateEmps = async(req,res)=>{
    try {
        const emp = await eModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        console.log(emp);
        res.json(emp);
    } catch (error) {
        console.log(error);
    }
}

const deleteEmps = async(req,res)=>{
    try {
        const empID = await eModel.deleteOne({_id:req.params.id})
        console.log(empID);
        res.json(empID)
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {getEmps,addEmps,updateEmps,deleteEmps}