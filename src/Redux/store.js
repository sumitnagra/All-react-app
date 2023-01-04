import { configureStore } from "@reduxjs/toolkit";
import { costumeReducer } from "./reducer";

const store= configureStore({
reducer:{
    coustom:costumeReducer
},
})

export default store;