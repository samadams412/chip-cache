import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import "../../index.css";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="card product__card h-100 d-flex flex-column justify-content-between align-items-center" style={{ maxWidth: "200px" }}>
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={image}
          className="card-img-top"
          style={{ height: "150px", objectFit: "contain" }}
        />
      </Link>
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price.toFixed(2)}</p>
        <button
          onClick={addToCart}
          type="button"
          className="btn add-to-cart__btn mt-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;



