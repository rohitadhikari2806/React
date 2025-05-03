const pModel = require('../model/pModel.js');

const getProd = async(req,res)=>{
    try {
        const result = await pModel.find();
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}

const getOneProd = async(req,res)=>{
   
        const {id} = req.params;
        const result = await pModel.findById(id);
        res.json(result)
   
}

const addProd = async(req,res)=>{
    try {
        const data = new pModel({
            name:req.body.name,
            amt:req.body.amt
        })
        const result = await data.save();
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}

const updateProd  =async (req,res)=>{
        try {
            const pro = await pModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
            console.log(pro);
            res.json(pro);
        } catch (error) {
            console.log(error);
        }
    
    
}

const deleteProd = async(req,res)=>{
    try {
        const pId= await pModel.deleteOne({_id:req.params.id});
            console.log(pId);
            res.json(pId);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {getProd,addProd,updateProd,deleteProd,getOneProd}