import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/product/actions";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <>
    
      <div className="row d-flex align-items-center border-2 shadow mb-2 p-0">
        <div className="col-md-2 p-2"><img src={product.image} alt={product.title} width={120}/></div>
        <div className="col-md-3">
            <p className="m-0 px-2 text-muted">{product.title}</p>
            <small className="m-0 px-2 text-muted">{product.category}</small>
        </div>
        <div className="col-md-4 ">
            <button className="btn mx-2">-</button><span className="border-1 border-warning bg-info p-2 ">10</span><button className="btn mx-2">+</button>
        </div>
        <div className="col-md-2 ">
        <p className="m-0 px-2 text-muted">{product.price}</p>
        </div>
        <div className="col-md-1">
        <button className="btn btn-danger" onClick={handleRemoveFromCart}>
        <i class="fa-solid fa-trash"></i>
          </button>
        </div>

      </div>
    </>
  );
};

export default CartItem;
