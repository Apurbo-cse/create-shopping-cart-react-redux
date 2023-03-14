import { combineReducers } from "redux";
import reducer from "./product/reducer";

const rootReducer = combineReducers({
    products: reducer,
})
export default rootReducer;