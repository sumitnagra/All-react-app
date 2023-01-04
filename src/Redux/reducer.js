import { createReducer } from "@reduxjs/toolkit";
const state={
    value:0,
};
export const costumeReducer=createReducer(state,{
  
    increment:(state,action)=>{
        state.value=state.value+1;
    },
decrement:(state,action)=>{
    state.value-=1;
},
decrementByvalue:(state,action)=>{
    state.value+=action.payload;
}
})