import { ADDED, ADD_TO_CART } from "./actionTypes";

export const added = (title, category, image, price, qty) => {
  return {
    type: ADDED,
    payload: {
      title,
      category,
      image,
      price,
      qty,
    },
  };
};


export const addToCart = (title, category, image, price, qty) => {
  return {
    type: ADD_TO_CART,
    payload: {
      title,
      category,
      image,
      price,
      qty,
    },
  }
}