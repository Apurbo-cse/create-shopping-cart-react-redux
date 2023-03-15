import { ADDED, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, INCREMENT, DECREMENT } from "./actionTypes";

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

export const addToCart = (productId) => {
  return {
    type: ADD_TO_CART,
    payload: {
      productId,
    },
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      productId,
    },
  };
};

export const increment = (productId) => {
  return {
    type: INCREMENT,
    payload: {
      productId,
    },
  };
};

export const decrement = (productId) => {
  return {
    type: DECREMENT,
    payload: {
      productId,
    },
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
