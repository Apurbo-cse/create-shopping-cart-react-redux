
import { ADDED, ADD_TO_CART, REMOVE_FROM_CART,  } from "./actionTypes";
import initialState from "./initialState";

const nextProductId = (products) => {
  const maxId = products.reduce((maxId, product) => Math.max(product.id, maxId), -1);
  return maxId + 1;
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextProductId(state),
          title: action.payload.title,
          category: action.payload.category,
          image: action.payload.image,
          price: action.payload.price,
          qty: action.payload.qty,
        },
      ];

    case ADD_TO_CART:
      return state.map((product) =>
        product.id === action.payload.id ? { ...product, qty: product.qty - 1 } : product
      );

    case REMOVE_FROM_CART:
      return state.map((product) =>
        product.id === action.payload.id ? { ...product, qty: product.qty + 1 } : product
      );

    default:
      return state;
  }
};

export default productReducer;