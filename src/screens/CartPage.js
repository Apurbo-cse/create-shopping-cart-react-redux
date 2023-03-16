import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "../components/CartItem";
import { removeFromCart } from "../redux/product/actions";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) =>
    state.products.filter((product) => product.cartQty > 0)
  );

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="container mt-5">
      <div className="row">
       
          <div className="col-md-8">
          {cartProducts.length > 0 ? (
            <>
              {cartProducts.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  onRemove={handleRemoveFromCart}
                />
              ))}
            </>
              ) : (
                <h3 className="text-center">Your cart is empty!</h3>
              )}

          </div>
      

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Cart Summary</h5>
              <p className="card-text">
                Total Items:{" "}
                {cartProducts.reduce((acc, curr) => acc + curr.cartQty, 0)}
              </p>
              <p className="card-text">
                Total Price: $
                {cartProducts.reduce(
                  (acc, curr) => acc + curr.price * curr.cartQty,
                  0
                )}
              </p>
              <button className="btn btn-primary">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
