const pModel = require('../model/uModel.js');

const getUser = async(req,res)=>{
    try {
        const result = await uModel.find();
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}

const getOneUser = async(req,res)=>{
   
        const {id} = req.params;
        const result = await uModel.findById(id);
        res.json(result)
   
}

const addUser = async(req,res)=>{
    try {
        const data = new uModel({
            name:req.body.name,
            age:req.body.age
        })
        const result = await data.save();
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}

const updateUser  =async (req,res)=>{
        try {
            const pro = await uModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
            console.log(pro);
            res.json(pro);
        } catch (error) {
            console.log(error);
        }
    
    
}

const deleteUSer = async(req,res)=>{
    try {
        const uId= await uModel.deleteOne({_id:req.params.id});
            console.log(uId);
            res.json(uId);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {getUser,addUser,updateUser,deleteUSer,getOneUser}