import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1 className="pt-5 text-center">Welcome to E-Shop</h1>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Discover a Wide Range of Tech Products</h1>
          <p className="lead">Shop the latest tech products at unbeatable prices.</p>
          <a href="/products" className="btn btn-primary btn-lg">Shop Now</a>
        </div>
      </div>
      <div className="pt-5 row">
        <div className="col">
          <p>Column 1</p>
        </div>
        <div className="col">
          <p>Column 2</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
