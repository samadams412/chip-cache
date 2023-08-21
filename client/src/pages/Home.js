import React, { useState } from "react";
import "../index.css";
import Jumbotron from "../components/Jumbotron";
//Array of featured products for Home
const featuredProducts = [
  {
    name: "NVIDIA GeForce RTX 3080",
    image: "https://m.media-amazon.com/images/I/71CPFiLxiQL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
  },
  {
    name: "AOC 24G2E 24 Full HD 144Hz Gaming Monitor",
    image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/663180_541060_01_front_comping.jpg"
  },
  {
    name: "Razer Basilisk V3 X HyperSpeed Ergonomic Wireless Gaming Mouse",
    image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/664264_554717_01_front_comping.jpg"
  },  
  {
    name: "Seagate 16TB Seagate FireCuda Gaming Hub External HDD",
    image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/639781_305540_01_front_comping.jpg"
  },
  {
    name: "Alienware AW3423DW 34 2K WQHD 175Hz Curved Screen Gaming Monitor",
    image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/648332_390054_01_front_comping.jpg"
  },
  // Add more featured products here
];

const Home = () => {
  //Keeps track of current displayed product index
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const handleNextProduct = () => {
    //modulus operator helps stay inbound the array and loop through
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
  };

  const currentProduct = featuredProducts[currentProductIndex];

  return (
    <div className="container">
      <Jumbotron />
      <div className="pt-5 row">
        <div className="col">
          <h2 className="text-primary">Featured Products</h2>
          <div className="card">
            <img src={currentProduct.image} className="card-img-top" alt={currentProduct.name} />
            <div className="card-body">
              <h5 className="card-title">{currentProduct.name}</h5>
              
              <button className="btn btn-primary"><a href="/Products">Buy Now</a></button>
              <button className="btn btn-secondary mt-2" onClick={handleNextProduct}>
                Next Product
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <h2 className="text-primary">Testimonials</h2>
          {/* Testimonials cards */}
        </div>
      </div>
    </div>
  );
};

export default Home;








