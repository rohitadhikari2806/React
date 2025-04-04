import './App.css'
import Q2 from './components/Q2'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Q4 from './components/Q4'
import Q3 from './components/Q3'
import Q5 from './components/Q5'
import Q6 from './components/Q6'
import Q7 from './components/Q7'
import Q8 from './components/Q8'
import Q1 from './components/Q1'
import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import ErrorPage from './component/ErrorPage';
import'./component/Style.css'
import Home from "./Q9/Home";
import BlogList from "./Q9/BlogList";
import BlogPost from "./Q9/BlogPost";
import Contact from "./Q9/Contact";
import Navbar from './Q10/Navebar';
import Hero from './Q10/Hero';
import Contacts from './Q10/Contacts';
import Projects from './Q10/Projects';


function App() {
  const Routes =createBrowserRouter([
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
      <Q1/>
      <Q2/>
      <Q3/>
      <Q4/>
      <Q5/>
      <Q6/>
      <Q7/>
      <Q8/>
      <RouterProvider router={Routes}/>
      {/* <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:postId" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router> */}
    {/* <Navbar/>
    <Hero/>
    <Contacts/>
    <Projects/> */}
    </>
  )
}

export default App
