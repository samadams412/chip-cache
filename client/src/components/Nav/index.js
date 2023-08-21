import React, { useState } from "react";
import Auth from "../../utils/auth";
// import './nav.css'
import { Link } from "react-router-dom";
import Cart from "../../components/Cart/index";
import '../../index.css'

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
      
        <div className="container-fluid nav__container">
          <a className="navbar-brand" href="/">E-Shop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className='gamer-font collapse navbar-collapse'
          id="navbarNavAltMarkup">
            <Link to="/Products" className="nav-link">Products</Link>
            {/* <a className="nav-link" href="/Products">Products</a> */}
            <Link to="/OrderHistory" className="nav-link">History</Link>
            <a className="nav-link" href="/" onClick={() => Auth.logout()}>Logout</a>
           
          </div>
      
          <Cart />
        </div>
      
      );
    } else {
      return (
        
        <div className="container-fluid nav__container">
          <a className="navbar-brand" href="/">E-shop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <Link to="/Products" className="nav-link">Products</Link>
          <Link to="/Login" className="nav-link">Login</Link>
          <Link to="/Signup" className="nav-link nav-link__right">Signup</Link>
          </div>
          <Cart />
        </div>
      );
    }
  }

  return (

    <nav class="navbar navbar-expand-lg" id="navContainer">
      {showNavigation()}
    </nav>

  );
}

export default Nav;