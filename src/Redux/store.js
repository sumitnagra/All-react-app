import { configureStore } from "@reduxjs/toolkit";
import textReducer from './reducer'

const store=configureStore({
    reducer:{
        letter:textReducer,
    },
})

export default store