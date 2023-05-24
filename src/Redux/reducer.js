import { createSlice } from "@reduxjs/toolkit";

const Textslice = createSlice({
    name: 'letter',
    initialState: '',

    reducers: {
        toUpper: (state, action) => {
            return JSON.stringify(action.payload);
        },
        toLower: (state, action) => {
            return JSON.parse(action.payload);
        },
        toCopy: (state, action) => {
            navigator.clipboard.writeText(action.payload);
        },
        removeSpace: (state, action) => {
            return action.payload.split(/[ ]+/).join(' ')

        },
        reverse: (state, action) => {
            return action.payload.split("").reverse().join("");
        },
        jsonstring: (state, action) => {
            return JSON.stringify(action.payload);
        },
        convertStringToJson: (state, action) => {
            const obj = JSON.parse(action.payload)
            return obj;
        },
    },
},
)
export const { selectText, toUpper, toLower, toCopy, removeSpace, reverse, jsonstring, convertStringToJson } = Textslice.actions;
export default Textslice.reducer;