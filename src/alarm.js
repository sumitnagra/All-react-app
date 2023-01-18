import React, { useEffect, useState } from "react";
import audio from './images/loud_alarm.mp3'

const Alarm = () => {
    const [value, setvalue] = useState('')

    let tune = new Audio(audio)
    const time = value;
    var date = new Date(time)
    var now = new Date()
    var interval = date - now

    const [count, setCount] = useState()
    const setAlarm = () => {
       
        setTimeout(() => {
            tune.play()
        }, interval);
        setInterval(timer, 1000)
    }
    let a=  parseInt(interval / 1000)
    const timer=()=>{
            if(a===0){
                clearInterval(timer)
            }
            else{
                a=a-1;
                console.log(a)
                setCount(a)  
            }
        }

        return (
            <>
            <audio src={audio} />
            <div className="jumbotron jumbotron-fluid mt-5">
                <div className="container">
                    <h1 className="display-4"><input className="sm" type="text" value={value} onChange={(e) => { setvalue(e.target.value) }} placeholder="YYYY-MM-DD HH:MM:SS" /></h1>
<h5>Use 24 hour time format
                    <p className="lead"><button type="button" className="btn btn-secondary" onClick={setAlarm}>Set Alarm</button></p>
                    <h5>Alarm will sound after {count} second</h5>
                </div>
            </div>
        </>
    )
}

export default Alarm;
