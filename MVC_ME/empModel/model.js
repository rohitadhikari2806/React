const mongoose = require('mongoose');

const eSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
})

const eModel = mongoose.model("e",eSchema);

module.exports= eModel;
