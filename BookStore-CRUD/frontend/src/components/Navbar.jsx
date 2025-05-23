import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{borderBottom:"1px solid white" }}>

      <nav className="navbar navbar-expand-lg bg-linear-gradient(135deg, #020024 0%, #090979 35%, #000033 100%)">
        <div className="container">
          <a className="navbar-brand text-light" to="#">
            BookStore
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link className="nav-item nav-link active text-light" to="/">
                  Home
              </Link>
              <Link className="nav-item nav-link active text-light" to="/books">
                  Books
              </Link>
              <Link className="nav-item nav-link active text-light" to="/addbooks">
                  AddBooks
              </Link>
              <Link className='nav-item nav-link active text-light' to='/register'>
                Register
              </Link>
             
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
