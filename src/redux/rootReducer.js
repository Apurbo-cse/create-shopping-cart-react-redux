import { combineReducers } from "redux";
import reducer from "./product/reducer";

const rootReducer = combineReducers({
    todos: reducer,
})
export default rootReducer;