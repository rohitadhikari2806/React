const mongoose = require('mongoose');

const pSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    amt:{
        type:Number,
        required:true
    }
})



const pModel = mongoose.model("product",pSchema);

module.exports = pModel;