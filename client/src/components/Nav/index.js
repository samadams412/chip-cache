import React, { useEffect, useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Cart from "../../components/Cart/index";
import '../../index.css'

function Nav() {
  const [scroll, setScroll] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
      
        <div className={`container-fluid nav__container ${scroll ? 'scroll' : ""}`}>
          <a className="navbar-brand" href="/">CC</a>
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
        
        <div className={`container-fluid nav__container ${scroll ? 'scroll' : ""}`}>
          <a className="navbar-brand" href="/">Home</a>
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