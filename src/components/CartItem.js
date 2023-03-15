import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/product/actions";


const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.title} />
      <div className="cart-item-details">
        <h4>{product.title}</h4>
        <p>{product.category}</p>
        <p>Quantity: {product.cartQty}</p>
        <p>Price: ${product.price}</p>
        <button className="btn btn-danger" onClick={handleRemoveFromCart}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;