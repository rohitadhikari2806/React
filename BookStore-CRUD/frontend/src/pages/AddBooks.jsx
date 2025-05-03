import React, { useState } from "react";
import axios from "axios";

const AddBooks = () => {
    const[Data,setData]= useState({
        bookname:"",
        description:"",
        author:"",
        price:"",
        image:""

    })
    const change =(e)=>{
        const {name,value} = e.target; 
        setData({...Data,[name]:value});
    }
    const submit =async (e)=>{
        
        await axios
        .post("http://localhost:3000/api/v1/add",Data)
        .then((res)=>console.log(res.data.message))
        setData({
            bookname:"",
            description:"",
            author:"",
            price:"",
            image:""
    
        })
    }
    console.log(Data);
    
  return (
    <div className="bd-dark d-flex justify-content-center align-item-center" style={{minHeight:"91.5vh"}}>
        <div className="container p-5">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label text-white">
          BookName
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Book name"
          name="bookname"
          value={Data.bookname}
          onChange={change}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label text-white">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Decription of the book"
          name="description"
          value={Data.description}
          onChange={change}

        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label text-white">
          Author
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Author of the book"
          name="author"
          value={Data.author}
          onChange={change}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label text-white">
          Image
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Image URL"
          name="image"
          value={Data.image}
          onChange={change}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label text-white">
          Price
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Price of the book"
          name="price"
          value={Data.price}
          onChange={change}
        />
      </div>

      <button className="btn btn-primary"  onClick={submit}>Submit</button>
      
      </div>
    </div>
  );
};

export default AddBooks;
