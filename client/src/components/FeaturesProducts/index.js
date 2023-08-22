import React from 'react';

const FeaturedProducts = ({ product }) => {
  return (
    <div className="col-md-4">
      <div className="card featured__card featured-product-card">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body text-center">
          <h5 className="featured-product-card-title">{product.name}</h5>
          <button className="btn card__btn-2 my-3">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
