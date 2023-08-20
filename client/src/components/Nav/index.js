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
      
        <div className="container-fluid">
          <a className="navbar-brand" href="/">E-Shop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className='gamer-font collapse navbar-collapse'
          id="navbarNavAltMarkup">
            <a className="nav-link" href="/OrderHistory">Products</a>
            <a className="nav-link" href="/OrderHistory">Order History</a>
            <a className="nav-link" href="/" onClick={() => Auth.logout()}>Logout</a>
           
          </div>
      
          <Cart />
        </div>
      
      );
    } else {
      return (
        
        <div className="container-fluid">
          <a className="navbar-brand" href="/">E-Shop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse gamer-font" id="navbarNavAltMarkup">
          <a className="nav-link" href="/Products">Products</a>
            <a className="nav-link" href="/Login">Login</a>
            <a className="nav-link" href="/Signup">Signup</a>
          </div>
          <Cart />
        </div>
      );
    }
  }

  return (

    <nav class="navbar navbar-expand-lg bg-light" id="navContainer">
      {showNavigation()}
    </nav>

  );
}

export default Nav;