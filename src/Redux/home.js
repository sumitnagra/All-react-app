import React from "react";
import { useSelector } from "react-redux";
import Shop from "./button";
import Navbar from "./navbar";

const Home=()=>{
const {value}=useSelector(state=>state.coustom)
    return(
        <>
        <h1>{value}</h1>
        <Shop/>
        <Navbar/>
        </>
    )
}

export default Home