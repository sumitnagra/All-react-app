import React from "react";
import './Advice.css'
import { useState } from "react";
import axios from "axios";
const Advice=()=>{
    const [advice,setadvice]=useState('Dont run in the merathon of crocks.')
    const open=()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((responce)=>{const free=responce.data.slip.advice;
            setadvice(free)
        })
        .catch(error=>console.log(error))
    }
    
    return(
        <>
        <div className="main">
        <div className="Advice">
            <p>{advice}</p>
            <button onClick={open}>GIVE ME ADVICE!</button>
        </div>
        </div>
        </>
    )

}
export default Advice