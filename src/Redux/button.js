import React from "react";
import { useDispatch } from "react-redux";
const Shop=()=>{
    const dispatch=useDispatch()
    const add=()=>{
        dispatch({
            type:"increment"
        })
    }
    const sub=()=>{
        dispatch({
            type:"decrement"
        })
    }
    const subByvalue=()=>{
        dispatch({
            type:"decrementByvalue",
            payload:25
        })
    }
    return(
        <>
    <button onClick={add}>Increment</button>
    <button onClick={sub}>decrement</button>
    <button onClick={subByvalue}>decrementByvalue</button>
        </>
    )

}
export default Shop;
