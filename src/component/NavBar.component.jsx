import React from 'react'
import '../App.css';
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
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Support</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Hire</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
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