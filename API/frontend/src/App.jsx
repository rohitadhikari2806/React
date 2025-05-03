import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Products from './components/Products'
import AddProduct from './components/AddProduct'
import EditProuduct from './components/EditProuduct'
import Error from './components/Error'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const routes = createBrowserRouter([
    {
      path:'/admin',
      element:<Layout/>,
      errorElement:<Error/>,
      children:[
        {index:true,element:<Home/>},
        {path:'products',element:<Products/>},
        {path:'products/add',element:<AddProduct/>},
        {path:'products/edit/:id',element:<EditProuduct/>}

      ]
    }
  ])
  

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
