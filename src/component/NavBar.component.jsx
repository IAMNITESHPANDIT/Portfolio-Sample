import React from 'react'
import '../App.css';
import {Link} from "react-router-dom";
import Hire from './NavbarComponent/hire.component';
import About from './NavbarComponent/hire.component';
import Support from './NavbarComponent/hire.component';
import Main from './main.component';

function NavBar() {
  return (
    <div>
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Code With <span className='logo'>Nitesh</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-lg-auto text-center">
        <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>  
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/support">Support</Link>  
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/hire">Hire</Link>  
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>  
        </li>   
      </ul>
    </div>
  </div>
</nav>
</>
    </div>
  )
}

export default NavBar