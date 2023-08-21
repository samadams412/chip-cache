import React from "react";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron jumbotron-fluid py-2 jumobotron__transparent">
    <div className="container">
      <h1 className="display-4">Discover a Wide Range of Tech Products</h1>
      <p className="lead jumbotron__sub-title">Shop the latest tech products at unbeatable prices.</p>
      <a href="/products" className="btn btn-lg jumbotron__btn">
        <i className="uil uil-shopping-cart"></i> Shop Now
      </a>
    </div>
  </div>
  );
}

export default Jumbotron;