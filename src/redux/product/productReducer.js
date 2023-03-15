import { ADDED, ADD_TO_CART, CLEAR_CART, DECREMENT, INCREMENT, REMOVE_FROM_CART } from "./actionTypes";
import initialState from "./initialState";

const nextProductId = (products) => {
  const maxId = products.reduce((maxId, product) => Math.max(product.id, maxId), -1);
  return maxId + 1;
};

const productReducer = (state = initialState.products, action) => {
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
          cartQty: 0,
        },
      ];
    case ADD_TO_CART:
      return state.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            qty: product.qty - 1,
            cartQty: product.cartQty + 1,
          };
        } else {
          return product;
        }
      });
      
    case REMOVE_FROM_CART:
      return state.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            qty: product.qty + product.cartQty,
            cartQty: 0,
          };
        } else {
          return product;
        }
      });
    case INCREMENT:
      return state.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            qty: product.qty - 1,
            cartQty: product.cartQty + 1,
          };
        } else {
          return product;
        }
      });
    case DECREMENT:
      return state.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            qty: product.qty + 1,
            cartQty: product.cartQty - 1,
          };
        } else {
          return product;
        }
      });
    case CLEAR_CART:
      return state.map((product) => ({
        ...product,
        qty: product.qty + product.cartQty,
        cartQty: 0,
      }));
    default:
      return state;
  }
};

export default productReducer;