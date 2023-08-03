import React from "react";
import './Advice.css'
import { useState } from "react";
import axios from "axios";
import Spinner from "../Notebook/component/context/spinner";
const Advice=()=>{
    const [advice,setadvice]=useState('Dont run in the merathon of crocks.')
    const [loading,setLoading]=useState(false)
    const open=()=>{
        try {
            if(!navigator.onLine)
            {alert("Internet is Down")}
                setLoading(true)
                axios.get('https://api.adviceslip.com/advice')
                .then((responce)=>{const free=responce.data.slip.advice;
                    setadvice(free)
                    setLoading(false)
                })
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <>
        <div className="main">
        <div className="Advice">
            <p className="p1">{advice}</p>
            <button className="getquote" onClick={open}>{loading?<Spinner margin="my-0" color="text-white"/>:"TAKE FREE ADVICE"}</button>
        </div>
        </div>
        </>
    )

}
export default Advice