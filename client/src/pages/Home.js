import React from "react";
import "../index.css";
import Jumbotron from "../components/Jumbotron";
const Home = () => {
  return (
    <div className="container">
     <Jumbotron/>
      <div className="pt-5 row">
        <div className="col">
          <h2 className="text-primary">Featured Products</h2>
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Product 1" />
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              <p className="card-text">A great tech product with amazing features.</p>
              <a href="#" className="btn btn-primary">Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col">
          <h2 className="text-primary">Testimonials</h2>
          <div className="card">
            <div className="card-body">
              <p className="card-text">"I love E-Shop! The prices are unbeatable, and the quality is top-notch."</p>
              <p className="card-text">- Jane Doe</p>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <p className="card-text">"E-Shop has made shopping for tech products a breeze. Highly recommended!"</p>
              <p className="card-text">- John Smith</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

