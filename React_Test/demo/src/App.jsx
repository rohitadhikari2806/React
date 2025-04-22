import Dark_Light from "./component1/Dark_Light"
import Inc_Dec from "./component1/Inc_Dec"
import'./App.css'
import Login_Logout from "./component1/Login_Logout"
import Dashboard from "./component1/Dashboard"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import ErrorPage from './component/ErrorPage';
import'./component/Style.css'
import Cardq7 from "./component1/Cardq7"
import Hover from "./component1/Hover"
import UserForm from "./Q1/UserForm"




function App() {
  const Routes= createBrowserRouter([
    {
     path:'/', 
     element:<Layout/>,
     errorElement:<ErrorPage/>,
     children:[
      {index:true,element:<Home/> },
      { path: 'about', element: <About /> },
      {path:'contact',element:<Contact/>}
     ]
    }
   ])


  return (
    <>
    <UserForm/>
    <hr />
      <Inc_Dec/>
      <hr />
      <Dark_Light/>
      <hr />
      <Login_Logout/>
      <hr />
      <Dashboard/>
      <hr />
      <RouterProvider router={Routes}/>
      <hr />
      <Cardq7/>
      <hr />
      <Hover/>
      <hr />
      
      
      

    </>
  )
}

export default App
