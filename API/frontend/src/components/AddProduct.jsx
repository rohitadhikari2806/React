import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddProduct = () => {
const[product,setProuct]=useState([])

const navigate = useNavigate()

const addProduct =()=>{
    axios.post(`http://localhost:2001/prod/add`,product)
    .then((res) =>navigate('/admin/products'))
    .catch((err) => console.log(err))
    
}



  return (

    <>
     <div
        className="container"
     >
        <div
            className="row justify-content-center align-items-center g-2"
        >
            <div className="col">
                <div className="card">
                    <div className="card-body">
                       <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="formId1"
                            id="formId1"
                            placeholder=""
                            onChange={(e)=>setProuct({...product,name:e.target.value})}
                        />
                        <label htmlFor="formId1">Name</label>
                       </div>
                       
                       <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="formId1"
                            id="formId1"
                            placeholder=""
                            onChange={(e)=>setProuct({...product,amt:e.target.value})}
                        />
                        <label htmlFor="formId1">Amount</label>
                       </div>
                       <button
                        type="button"
                        className="btn btn-primary"
                        onClick={addProduct}
                       >
                        Button
                       </button>
                       
                       
                    </div>
                </div>
                
            </div>
            
        </div>
        
     </div>
     
    </>
  )
}

export default AddProduct
