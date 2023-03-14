import { ADDED } from "./actionTypes";

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
