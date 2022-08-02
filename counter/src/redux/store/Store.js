import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../../components/counter/CounterSlice"
import todoReducer from "../../components/todo/TodoSlice"

export default configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer
    }
})