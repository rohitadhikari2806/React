const mongoose = require('mongoose');



const mongoConnect =()=>{
    mongoose.connect("mongodb://localhost:27017/MVC_You").then((result) => {
        console.log("connected");
        
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = mongoConnect;