import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

const Products = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <CategoryMenu />
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Products;
