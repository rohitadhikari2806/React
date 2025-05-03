const express = require('express');
const app = express();
const connectMongo = require('./connection/conn.js');
const bookRoute = require('./routes/booksRoutes.js');
const cors = require('cors');

connectMongo()
// app.get("/",(req,res)=>{
//     res.send("Hello");
// })
app.use(cors())
app.use(express.json())
app.use("/api/v1",bookRoute)


// app.get("/aboutus ",(req,res)=>{
//     res.send("aboutus");
// })
app.listen(3000,()=>{
    console.log("Server is running");
})