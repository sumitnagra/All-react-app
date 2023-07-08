import React, { useEffect, useState } from "react";
import audio from '../images/loud_alarm.mp3'
import './alarm.css'

const Alarm = () => {
    const [inputTime, setInputTime] = useState('')
    const [inputDate, setInputDate] = useState('')
    const [moreTime, setMoretime] = useState(true)

    const tune = new Audio(audio)
    const time = `${inputDate} ${inputTime}`;
    var date = new Date(time)
    var now = new Date()
    var interval = date - now;

    const [count, setCount] = useState()
    const setAlarm = () => {
        if (interval > 0) {
            setTimeout(() => {
                tune.play()
            }, interval)
            setInterval(timer, 1000)
        }else{
            alert("The time is already passed")
        }
    }
    const snooze = () => {
        setMoretime(false)
        setTimeout(() => {
            tune.play()
        }, 1000 * 60 * 5);

        setInterval(timer, 1000)
        a = 60 * 5;

    }

    var a = parseInt(interval / 1000)
    const timer = () => {
        if (a === 0) {
            clearInterval(timer)
            moreTime = false;
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
                <div className="jumbotron jumbotron-fluid " style={{ paddingTop: "3rem", width: "90%" }}>
                    <div className="container">
                        <div className="datetime"><h5>Select Date</h5><input type="date" className="date" value={inputDate} onChange={(e) => setInputDate(e.target.value)}/><h5> Select Time</h5><input className="time" type="time" value={inputTime} onChange={(e) => { setInputTime(e.target.value) }} /></div>
                        <p className="lead"><button type="button" className="btn btn-dark" onClick={setAlarm}>Set Alarm</button> <button className="btn btn-dark" onClick={snooze} disabled={!moreTime}>Snooze</button></p>
                        <h5>Alarm will sound after {count} second</h5>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Alarm;
