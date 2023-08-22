import React from "react";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid py-3 jumobotron__transparent">
    <div className="container-fluid">
      {/* <h1 className="display-4 jumbotron__title">Discover a Wide Range of Tech Products</h1> */}
      <p className="lead jumbotron__sub-title">Shop the latest tech products at unbeatable prices.</p>
      <a href="/products" className="btn jumbotron__btn align-items-center justify-content-center">
        <i className="uil uil-shopping-cart"></i> Shop Now
      </a>
    </div>
  </div>
  );
}

export default Jumbotron;