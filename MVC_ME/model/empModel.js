const mongoose = require('mongoose');



const empSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    sal:{
        type:Number,
        required:true
    }
})



const empModel = mongoose.model("emp",empSchema);

module.exports = empModel;