import React, { useState } from "react";
import "../index.css";
import Jumbotron from "../components/Jumbotron";
import FeaturedProductsList from "../components/FeaturedProductsLIst";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
const Home = () => {

  return (
    <>
    <Jumbotron />
    <div className="container">
      {/* <Hero/> */}
      
      <div className="pt-5 row">
        <FeaturedProductsList/>
    
        </div>
        <div className="pt-5 row">
        
        <Testimonials/>
        </div>
      </div>
      </>
  );
};

export default Home;








