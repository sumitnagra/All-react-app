import React, { useEffect, useState } from "react";
import audio from './images/loud_alarm.mp3'
import './alarm.css'

const Alarm = () => {
    const [value, setvalue] = useState('')
    const [moreTime ,setMoretime]=useState(true)

    let tune = new Audio(audio)
    const time = value;
    var date = new Date(time)
    var now = new Date()
    var interval = date - now;

    const [count, setCount] = useState()
    const setAlarm = () => {
        setTimeout(() => {
            tune.play()
        }, interval);
        setInterval(timer, 1000)
    }
    const snooze=()=>{
        setMoretime(false)
        setTimeout(() => {
            tune.play()
        },1000*60*5);

        setInterval(timer, 1000)
        a=60*5;

    }
    
    var a = parseInt(interval / 1000)
    const timer = () => {
        if (a === 0) {
            clearInterval(timer)
        }
        else {
            a = a - 1;
            setCount(a)
        }
    
    }
    return (
        <>
        <div className="alarm">
            <audio src={audio} />
            <div className="jumbotron jumbotron-fluid " style={{paddingTop:"5rem"}}>
                <div className="container">
                    <h1 className="display-4"><input className="sm" type="text" value={value} onChange={(e) => { setvalue(e.target.value) }} placeholder=" YYYY-MM-DD HH:MM:SS" /></h1>
                    <h5>Use 24 hour time format</h5>
                    <p className="lead"><button type="button" className="btn btn-dark" onClick={setAlarm}>Set Alarm</button> <button className="btn btn-dark" onClick={snooze} disabled={moreTime} >Snooze</button></p>
                    <h5>Alarm will sound after {count} second</h5>
                </div>
            </div>
            </div>
        </>
    )}


export default Alarm;
