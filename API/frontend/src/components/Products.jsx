import axios from 'axios';
import React, { useState , useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Products = () => {
    const [products1,setProducts1] = useState([]);
    const navigate = useNavigate()

    useEffect(()=>{
        axios
        .get('http://localhost:2001/prod/')
        .then((res)=> setProducts1(res.data))
        .catch((err)=>console.log(err)
        )
    })

    const delProduct=(id)=>{
        axios.delete(`http://localhost:2001/prod/delete/${id}`)
        .then((result) =>navigate('/admin/products') )
        .catch((err) => console.log(err))
    }
  return (
    <div>
      <NavLink
        name=""
        id=""
        className="btn btn-primary"
        to="add"
        role="button"
        >Button</NavLink>

        <div
            className="table-responsive"
        >
            <table
                className="table table-primary"
            >
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products1.map((product)=>(

                        <tr className="" key={product._id}>
                        
                        <td scope="row">{product.name}</td>
                        <td>{product.amt}</td>
                        <td>
                        <NavLink
                        name=""
                        id=""
                        className="btn btn-primary"
                        to="edit/:id"
                        role="button"
                        >Edit</NavLink >

                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={()=>delProduct(product._id)}
                        >
                            Delete
                        </button>
                        
                        </td>
                    </tr>
                    ))}
                    
                    
                    
                </tbody>
            </table>
        </div>
              
    </div>
  )
}

export default Products
