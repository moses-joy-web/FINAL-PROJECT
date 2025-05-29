import React from 'react';
import './Navbar.css';
import logo from '../src/assets/pic6.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    
    <div className="d-flex">
        <div className='col-7 nav'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-light jj">
  <div class="container-fluid gap">
    <img src={logo} alt="" className='mx-3 logos' style={{width: '20%'}}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav gaps">
        <li className="nav-item shadow-sm rounded small" style={{ boxShadow: "0px 4px 6px #28a745" }}>
          <a className="nav-link active" style={{ color: '#e68c3a' }} aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/About">About</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Plan</a>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link disabled" aria-disabled="true">Tracker</a> */}
          <a class="nav-link" href="true">Tracker</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
  <div className='col-4 d-flex justify-content-end align-items-center  '>
    <button className='btn btn-outline-light mx-2' >Log In</button>
    <button className='btn text-light' style={{backgroundColor: '#e68c3a'}}>Sign Up</button>
  </div>
</div>


    </>
  )
}

export default Navbar
