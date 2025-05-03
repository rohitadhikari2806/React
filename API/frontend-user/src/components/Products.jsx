import axios from 'axios';
import React, { useState , useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Products = () => {
    const [users1,setUsers1] = useState([]);
    const navigate = useNavigate()

    useEffect(()=>{
        axios
        .get('http://localhost:2001/user/')
        .then((res)=> setProducts1(res.data))
        .catch((err)=>console.log(err)
        )
    })

    const delUser=(id)=>{
        axios.delete(`http://localhost:2001/user/delete/${id}`)
        .then((result) =>navigate('/admin/users') )
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
                        <th scope="col">User Name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users1.map((user)=>(

                        <tr className="" key={user._id}>
                        
                        <td scope="row">{user.name}</td>
                        <td>{user.amt}</td>
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
                            onClick={()=>delUser(user._id)}
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
