import { ADDED, ADD_TO_CART } from "./actionTypes";
import initialState from "./initialState";

const nextProductId = (products) => {
    const maxId = products.reduce((maxId, product) => Math.max(product.id, maxId), -1);
    return maxId + 1;
};

const productReducer =(state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {

        case ADDED:
            return [
                ...state,
                {
                    id: nextProductId(state),
                    title:action.payload.title,
                    category:action.payload.category,
                    image:action.payload.image,
                    price:action.payload.price,
                    qty:action.payload.qty,
                    
                },
            ];

            default:
                return state;
        
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }

        
    }
}

export default productReducer;