// import React, {useState} from 'react'
// import FeaturedProducts from '../FeaturesProducts';

// const featuredProducts = [
//     {
//       name: "NVIDIA GeForce RTX 3080",
//       image: "https://m.media-amazon.com/images/I/71CPFiLxiQL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
//     },
//     {
//       name: "AOC 24G2E 24 Full HD 144Hz Gaming Monitor",
//       image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/663180_541060_01_front_comping.jpg"
//     },
//     {
//       name: "Razer Basilisk V3 X HyperSpeed Ergonomic Wireless Gaming Mouse",
//       image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/664264_554717_01_front_comping.jpg"
//     },  
//     {
//       name: "Seagate 16TB Seagate FireCuda Gaming Hub External HDD",
//       image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/639781_305540_01_front_comping.jpg"
//     },
//     {
//       name: "Alienware AW3423DW 34 2K WQHD 175Hz Curved Screen Gaming Monitor",
//       image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/648332_390054_01_front_comping.jpg"
//     },
//     // Add more featured products here
//   ];

//   const FeaturedProductsList = () => {
//     const [startIndex, setStartIndex] = useState(0);
  
//     const handlePrevProduct = () => {
//       setStartIndex((prevStartIndex) => (prevStartIndex - 1 + featuredProducts.length) % featuredProducts.length);
//     };
  
//     const handleNextProduct = () => {
//       setStartIndex((prevStartIndex) => (prevStartIndex + 1) % featuredProducts.length);
//     };
  
//     const displayedProducts = [
//       featuredProducts[(startIndex - 1 + featuredProducts.length) % featuredProducts.length],
//       featuredProducts[startIndex],
//       featuredProducts[(startIndex + 1) % featuredProducts.length],
//     ];
  
//     const shouldShowOneCard = window.innerWidth <= 576; // Adjust the breakpoint as needed

//     return (
//       <div className="featured-products-container my-0">
//         <div className="navigation-arrows">
//           <button className="btn arrow-button" onClick={handlePrevProduct}>
//             <i className="uil uil-arrow-left"></i>
//           </button>
//         </div>
//         <div className="row justify-content-center">
//           {shouldShowOneCard ? (
//             <div className="col-12">
//               <FeaturedProducts product={featuredProducts[startIndex]} />
//             </div>
//           ) : (
//             displayedProducts.map((product, index) => (
//               <div key={index} className="col-md-4 col-sm-12">
//                 <FeaturedProducts product={product} />
//               </div>
//             ))
//           )}
//         </div>
//         <div className="navigation-arrows">
//           <button className="btn arrow-button" onClick={handleNextProduct}>
//             <i className="uil uil-arrow-right"></i>
//           </button>
//         </div>
//       </div>
//     );
//   };


  
//   export default FeaturedProductsList;