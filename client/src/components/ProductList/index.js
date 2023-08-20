import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import '../../index.css';

function ProductList() {
  const [state, dispatch] = useStoreContext();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; // Number of products per page

  const { currentCategory } = state;
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  const totalPages = Math.ceil(filterProducts().length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const currentProducts = filterProducts().slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container text-center my-2">
      <h2 className="text-center gamer-font" id="r-product">
        Products
      </h2>
      {state.products.length ? (
        <div className="row">
          {currentProducts.map((product) => (
            <div className="mb-3 col-sm-12 col-md-6 col-lg-4">
              <ProductItem
                key={product._id}
                _id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            </div>
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className={`page-link ${
              index + 1 === currentPage ? 'active' : ''
            }`}
            onClick={() => handlePageChange(index + 1)}
            key={index}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {loading ? <p>Loading</p> : null}
    </div>
  );
}

export default ProductList;
