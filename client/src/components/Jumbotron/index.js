import React from "react";
import { logo2 } from "../../assets/images";
import "../../index.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid py-3">
      <div className="container-fluid">
        <div className="row flex-column flex-md-row"> {/* Changed to "flex-column flex-md-row" */}
          <div className="col-md-5 col-sm-12"> {/* Adjusted column class */}
            <img className="logo__home" src={logo2} alt="logo" />
          </div>
          <div className="col-md-4 col-sm-12 mt-3 mt-md-0"> {/* Adjusted column class and added margin-top */}
            <a href="/products" className="btn jumbotron__btn">
              <i className="uil uil-shopping-cart"></i> Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
