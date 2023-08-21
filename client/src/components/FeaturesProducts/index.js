import React from 'react'
import {useState} from 'react'
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

export default function FeaturedProducts() {
      //Keeps track of current displayed product index
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [animateOut, setAnimateOut] = useState(false);
  const [animationInProgress, setAnimationInProgress] = useState(false);
  const handleNextProduct = () => {
    if (animationInProgress) {
      return; // Don't allow clicking while animation is in progress
    }
  
    setAnimationInProgress(true);
  
    // Trigger animation by adding the class
    setAnimateOut(true);
  
    const animationDuration = 500; // Animation duration in milliseconds
  
    // Use setTimeout to update product and reset animation after the animation duration
    setTimeout(() => {
      // Update current product data
      // Reset animation
      setAnimateOut(false);
      setAnimationInProgress(false); // Animation is completed
    }, animationDuration);
  
    // Update current product index
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
  };
  const handleTransitionEnd = () => {
    // Animation transition has ended
    if (animateOut) {
      // Set animation class to false when fade-out animation ends
      setAnimateOut(false);
    }
  };

  const currentProduct = featuredProducts[currentProductIndex];
  return (
    <div className="col">
          <h2 className="text__primary">Featured Products</h2>
          <div className={`card featured__card ${animateOut ? 'fade-out-left' : ''}`} onTransitionEnd={handleTransitionEnd}>
            <img src={currentProduct.image} className="card-img-top" alt={currentProduct.name} />
            <div className="card-body text-center">
              <h5 className="card-title">{currentProduct.name}</h5>
              
              <button className="btn card__btn-2 my-3">Buy Now</button>
              <button className="btn card__btn-1 mx-3" onClick={handleNextProduct}>
                Next Product<span className="uil  uil-arrow-right"></span>
              </button>
            </div>
          </div>

        </div>
  )
}
