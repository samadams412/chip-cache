import React, { useState } from "react";
import "../index.css";
import Jumbotron from "../components/Jumbotron";
import FeaturedProducts from "../components/FeaturesProducts";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
const Home = () => {

  return (
    <>
    <Jumbotron />
    <div className="container">
      {/* <Hero/> */}
      
      <div className="pt-5 row">
        <FeaturedProducts/>
        <Testimonials/>
        </div>
      </div>
      </>
  );
};

export default Home;








