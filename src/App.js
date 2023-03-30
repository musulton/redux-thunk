import React from "react";
import {connect} from "react-redux";
import {addTodo} from "./action";

const App = (props) => {
    React.useEffect(() => {
        props.addTodo({
            title: "title", userId: "123"
        })
    }, [])

    console.log(props.state)
    return null
}

const mapState = (state) => ({
    state: state
})

const mapDispatch = (dispatch) => ({
    addTodo: (payload) => dispatch(addTodo(payload))
})

export default connect(mapState, mapDispatch)(App);
