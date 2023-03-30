import axios from 'axios';

export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_STARTED = "ADD_TODO_STARTED";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";

const addTodoStarted = () => ({
    type: ADD_TODO_STARTED
})

const addTodoSuccess = (todo) => ({
    type: ADD_TODO_SUCCESS,
    payload: {
        ...todo
    }
})

const addTodoFailure = (error) => ({
    type: ADD_TODO_FAILURE,
    payload: {
        error
    }
})

/*
Action ini yang dipanggil di component
seperti -> dispatch(addTodo)

selain state untuk menampung data kita juga perlu menyiapkan state
untuk menyimpan status loading dan error
 */
export const addTodo = ({title, userId}) => {
    return (dispatch, getState) => {
        dispatch(addTodoStarted())
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            userId,
            completed: false
        })
            .then(res => dispatch(addTodoSuccess(res.data)))
            .catch(err => dispatch(addTodoFailure(err.message)))
    }
}
