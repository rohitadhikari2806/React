// import './App.css';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import AddBooks from './pages/AddBooks';
// import Books from './pages/Books';
// import Home from './pages/Home';

// import {
//   BrowserRouter as Router,Routes,Route} from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <Navbar/>  
//       <Routes>
//         <Route exact path='/' element={<Home/>}/>
//         <Route path='/books' element={<Books/>}/>
//         <Route path='/addbooks' element={<AddBooks/>}/>
//       </Routes>
//       <Footer/>
//     </Router>
    
//   );
// }

// export default App;

import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AddBooks from './pages/AddBooks';
import Register from './pages/Register';
import Books from './pages/Books';
import Home from './pages/Home';
import UpdateBook from './pages/UpdateBook'; // ✅ Import update component

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/addbooks' element={<AddBooks />} />
        <Route path='/update/:id' element={<UpdateBook />} /> {/* ✅ Add this */}
        <Route path="/register" element={<Register />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
