import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, increment, decrement } from "../redux/product/actions";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.cartQty);
  const { qty } = product;
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  const handleIncrement = () => {
    dispatch(increment(product.id));
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(decrement(product.id));
      setQuantity(quantity - 1);
    }
  };

  console.log("first", product.qty);

  return (
    <>
      <div className="row d-flex align-items-center border-2 shadow mb-2 p-0">
        <div className="col-md-2 p-2">
          <img src={product.image} alt={product.title} width={120} />
        </div>
        <div className="col-md-3">
          <p className="m-0 px-2 text-muted">{product.title}</p>
          <small className="m-0 px-2 text-muted">{product.category}</small>
        </div>
        <div className="col-md-4 ">
          <span className="btn mx-2 btn-danger py-1" onClick={handleDecrement}>
            -
          </span>
          <span className="border-1 border-warning p-2 ">{quantity}</span>
          {product.qty !== 0 ? (
            <span
              className="btn mx-2 btn-success py-1"
              onClick={handleIncrement}
            >
              +
            </span>
          ) : (
            <button className="btn mx-2 btn-success py-1" title="Stock empty">+</button>
          )}
        </div>
        <div className="col-md-2 ">
          <p className="m-0 px-2 text-muted">{product.price * quantity}</p>
        </div>
        <div className="col-md-1">
          <span className="btn btn-danger" onClick={handleRemoveFromCart}>
            <i className="fa-solid fa-trash"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default CartItem;
