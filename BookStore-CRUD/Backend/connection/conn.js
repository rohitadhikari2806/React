const mongoose = require('mongoose');

const mongoDB=()=>{
    mongoose.connect("mongodb://localhost:27017/Bookstore-CRUD") .then((result) => {
        console.log("connected");
        
    }).catch((err) => {
        console.log(err);
        
    });
}

module.exports = mongoDB;