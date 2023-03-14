import { ADDED, ADD_TO_CART } from "./actionTypes";
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
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? { ...existItem, qty: existItem.qty + 1 } : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...item, qty: 1 }],
        };
      }
    default:
      return state;
  }
};

export default productReducer;