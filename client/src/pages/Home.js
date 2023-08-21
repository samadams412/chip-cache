import React, { useState } from "react";
import "../index.css";
import Jumbotron from "../components/Jumbotron";
import FeaturedProducts from "../components/FeaturesProducts";
import Testimonials from "../components/Testimonials";

const Home = () => {

  return (
    <div className="container">
      <Jumbotron />
      <div className="pt-5 row">
        <FeaturedProducts/>
        <Testimonials/>
        </div>
      </div>
    
  );
};

export default Home;








