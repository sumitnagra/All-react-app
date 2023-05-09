import { createSlice } from "@reduxjs/toolkit";

const Textslice = createSlice({
    name: 'letter',
    initialState: '',
    reducers: {
        toUpper: (state, action) => {
            return action.payload.toUpperCase();
        },
        toLower: (state, action) => {
            return action.payload.toLowerCase();
        },
        toCopy: (state, action) => {
            navigator.clipboard.writeText(action.payload);
        },
        removeSpace:(state,action)=>{
            return action.payload.split(/[ ]+/).join(' ')
        },
        reverse:(state,action)=>{
            return action.payload.split("").reverse().join("");
        }
    }
})

export const { selectText, toUpper, toLower, toCopy,removeSpace,reverse } = Textslice.actions;
export default Textslice.reducer;