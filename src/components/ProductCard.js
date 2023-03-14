/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const ProductCard = ({product}) => {
 const {title} = product;
  return (
  <>
    <div class="col-md-3 mb-3">
      <div class="card w-100 p-3">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
        <p>{title}</p>
        <button class="btn btn-danger">Add to cart</button>
      </div>
    </div>
  </>
  );
};

export default ProductCard;
