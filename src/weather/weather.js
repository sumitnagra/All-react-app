import { useState, useEffect } from 'react'
import './weather.css'
import Sun from '../images/23634-1-sun-hd.png'
import moon from '../images/pngwing.com.png'
import Cloudy from '../images/23702-1-weather-transparent.png'
import Haze from '../images/vecteezy_icon-cloud-with-sun_9267092_145.png'
import Mist from '../images/Mist-Transparent-Background.png';
import Smoke from '../images/pngfind.com-smoke-cloud-png-1762313.png'
import Rain from '../images/vecteezy_cute-weather-cloud-temperature-cartoon_17257793_588.png'
const Weather = () => {
  const [currentHour, setCurrentHour] =useState(new Date().getHours());
  const [city, setCity] = useState("delhi")
  const [info, setInfo] = useState({})

  const condition = {
    Clouds: Cloudy,
    Haze: Haze,
    Clear:currentHour > 19 ? moon :Sun,
    Mist: Mist,
    Smoke: Smoke,
    Rain: Rain,
    Thunderstorm: Rain,
  }
  const Data = async () => {
    try {
      const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=363902cae52b6ee6848bc923b7e7feea`)
      const parseData = await weather.json();
      const { main } = parseData.weather[0];
      const { temp, pressure, humidity } = parseData.main;
      let { speed } = parseData.wind;
      const { country, sunset, sunrise } = parseData.sys;
      const { name } = parseData;
      const newInfo = {
        main,
        temp,
        pressure,
        humidity,
        speed,
        country,
        sunset,
        sunrise,
        name
      }
      setInfo(newInfo)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    Data()
  }, [], 1000)
  const newWeather = () => {
    Data()
  }
useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHour(new Date().getHours());
    }, 60000);
  
    return () => clearInterval(interval);
  }, []);
  

  let sec = info.sunset;
  let date = new Date(sec * 1000);
  let sun = `${date.getHours() % 12}:${date.getMinutes()}:${date.getSeconds()}`

  let min = info.sunrise;

  let rise = new Date(min * 1000);
  let Sunrise = `${rise.getHours()}:${rise.getMinutes()}:${rise.getSeconds()}`
  let dates = new Date();
  let day = dates.getDate();
  let month = dates.getMonth()
  let year = dates.getFullYear()
  let today = `${day}/${month + 1}/${year}`;
  const style = {
    padding: "20px 10px 20px 10px"
  }
  const boder = {
    borderRight: "solid skyblue 2px",
    padding: "5px"
  }
  return (<>
    <div data-aos="fade-up">
      <div className='mainDiv'>
        <div className='searchBtn'>
          <input type="search" onChange={(e) => setCity(e.target.value)} placeholder='Search by city name' />
          <button className="btn btn-dark " onClick={newWeather}>Search</button>
        </div>
        <div className="card" style={{ width: "35rem", height: "300px", display: "flex" }}>
          <div style={{ height: "150px", width: "100%", margin: "5px" }}>

            <span style={{ fontSize: "50px", padding: "10px" }}>{info.main}</span>
            <img src={condition[info.main]} alt='img' style={{ height: "120px", width: "150px", padding: "10px" }} />
          </div>


          <div style={{ height: "70px", display: "flex" }} className='map'>
            <div style={{ padding: "5px", backgroundColor: "black", width: "60%", height: "100%", color: "white", fontSize: "45px", fontWeight: "lighter" }}>{info.temp}&deg;<span style={{ fontSize: "30px", padding: "10px" }}>{info.name}<span style={{ marginBottom: "50px", padding: "10px", fontSize: "15px" }}>{info.country}</span></span></div>
            <div style={{ padding: "10px", color: "white", backgroundColor: "skyblue", height: "100%", width: "40%", fontSize: "18px" }}>
              <div> Sunrise {Sunrise} AM</div>
              <div>{today}</div>
            </div>
          </div>
          <div style={{ padding: "10px", display: "flex" }}>
            <i className="fa-regular fa-sun fa-2xl" style={style} ></i>
            <div style={boder}>{sun} PM
              <div>Sunset</div></div>
            <i className="fa-solid fa-water fa-2xl" style={style}></i>
            <div style={boder}>{info.humidity}% <div>humidity</div></div>
            <i className="fa-solid fa-smog fa-2xl" style={style}></i>
            <div style={boder}> pressure <div>{info.pressure} mm</div> </div>
            <i className="fa-solid fa-wind fa-2xl" style={style}></i>
            <div>wind speed<div>{info.speed}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default Weather;