const mongoose = require('mongoose');

const uSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
})



const uModel = mongoose.model("product",uSchema);

module.exports = uModel;