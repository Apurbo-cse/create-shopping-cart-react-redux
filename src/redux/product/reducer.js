import { ADDED } from "./actionTypes";
import initialState from "./initialState";


const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
};

const reducer =(state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text:action.payload,
                },
            ];

            default:
                return state;
        
    }
}

export default reducer;