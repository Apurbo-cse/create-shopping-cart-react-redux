import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const products = useSelector((state) => state.products);

  // Filter products that have been added to the cart
  const cartProducts = products.filter((product) => product.cartQty > 0);

  return (
    <div className="container py-5">
      {cartProducts.length > 0 ? (
        <div className="row">
          <div className="col-12 mb-4">
            <h1 className="display-4">Shopping Cart</h1>
          </div>
          <div className="col-12 col-md-8">
            {cartProducts.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
          <div className="col-12 col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Order Summary</h5>
                <hr />
                <p className="card-text">
                  Total Items:{" "}
                  <span className="fw-bold">{cartProducts.length}</span>
                </p>
                <p className="card-text">
                  Total Quantity:{" "}
                  <span className="fw-bold">
                    {cartProducts.reduce(
                      (totalQty, product) => totalQty + product.cartQty,
                      0
                    )}
                  </span>
                </p>
                <p className="card-text">
                  Total Price:{" "}
                  <span className="fw-bold">
                    $
                    {cartProducts
                      .reduce(
                        (totalPrice, product) =>
                          totalPrice + product.cartQty * product.price,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </p>
                <button className="btn btn-primary">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="display-4">Your Cart is Empty</h1>
        </div>
      )}
    </div>
  );
};

export default CartPage;
