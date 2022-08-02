import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../../components/counter/CounterSlice"

export default configureStore({
    reducer:{
        counter:counterReducer,
    }
})