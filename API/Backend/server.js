const express = require('express');
const router = require('./router/pRouter.js');
const connectMongo = require('./db.js');
const cors = require('cors');

connectMongo();
const app = express();
app.use(express.json());
app.use(cors())


app.get("/test",(req,res)=>{
    res.end("Default");
})



app.use("/prod",router);

app.listen(2001,()=>{
    console.log("running");
})