import {
    ADD_TODO_FAILURE,
    ADD_TODO_SUCCESS,
    ADD_TODO_STARTED
} from "./action";

const initialState = {
    loading: false,
    todos: [],
    error: null
}

/*
Selebihnya sama kita membuat reducer seperti menggunakan redux tanpa thunk
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO_STARTED:
            return {
                ...state,
                loading: true
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                todos: [...state.todos, action.payload]
            }
        case ADD_TODO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}
