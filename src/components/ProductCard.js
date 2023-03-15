/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const ProductCard = ({product}) => {

 const {title,category, image, qty} = product;

  return (
  <>
    <div class="col-md-3 mb-3">
      <div class="card w-100 p-3">
        <img src={image}/>
        <p className="mb-0">{title}</p>
        <div className="d-flex justify-content-between align-items-center mt-0">
          <div><small className="text-muted">{category}</small></div>
          <div><small className="text-muted">QTY {qty}</small></div>
        </div>
        <button class="btn btn-danger mt-2" >Add to cart</button>
      </div>
    </div>
  </>
  );
};

export default ProductCard;
