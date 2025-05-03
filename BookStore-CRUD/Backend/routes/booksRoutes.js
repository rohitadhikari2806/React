const express = require('express') ;
const bookModel = require('../models/booksModel');
const router = express.Router();


router.post("/add", async (req, res) => {
    try {
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save();
        res.status(200).json({ message: "Book added Successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});
 router.get("/getBooks", async(req,res)=>{
    let books;
    try {
       books  = await bookModel.find();
       res.status(200).json({books});
    } catch (error) {
        console.log(error);
        
    }
 })

 router.get("/getBooks/:id", async(req,res)=>{
    let book;
    const id = req.params.id;
    try {
       book = await bookModel.findById(id); 
       res.status(200).json({book});
    } catch (error) {
        console.log(error);
        
    }
 })


 router.put("/updateBooks/:id", async(req,res)=>{
    const id = req.params.id;
    const {bookname,description,author,image,price} = req.body;
    let book;
    try {
       book = await bookModel.findByIdAndUpdate(id,{bookname,description,author,image,price}); 
        // await book.save().then(()=>res.send(200).json({message:"Updated Successfully"}))
                await book.save().then(()=>res.json({message:"Updated Successfully"}))

       
    } catch (error) {
        console.log(error);
        
    }
 })

 router.delete("/deleteBook/:id", async(req,res)=>{
    const id = req.params.id;
    try {
        await bookModel.findByIdAndDelete(id).then(()=>res.status(201).json({message:"Deleted Successfully"})) 
    } catch (error) {
        console.log(error);
        
    }
 })




module.exports = router;