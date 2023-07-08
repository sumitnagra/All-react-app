import { useState, useEffect } from 'react'
import Spinner from '../Notebook/component/context/spinner'
import './weather.css'
import Sun from '../images/23634-1-sun-hd.png'
import moon from '../images/pngwing.com.png'
import Cloudy from '../images/23702-1-weather-transparent.png'
import Haze from '../images/vecteezy_icon-cloud-with-sun_9267092_145.png'
import Mist from '../images/Mist-Transparent-Background.png';
import Smoke from '../images/pngfind.com-smoke-cloud-png-1762313.png'
import Rain from '../images/vecteezy_cute-weather-cloud-temperature-cartoon_17257793_588.png'
const Weather = () => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [city, setCity] = useState("delhi")
  const [info, setInfo] = useState({})
  const [loading, setloading] = useState(false)

  const condition = {
    Clouds: Cloudy,
    Haze: Haze,
    Clear: currentHour > 19 ? moon : Sun,
    Mist: Mist,
    Smoke: Smoke,
    Rain: Rain,
    Thunderstorm: Rain,
    Dust: Mist
  }
  const Data = async () => {
    try {
      setloading(true)
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
      setloading(false)
    } catch (error) {
    alert("Something went wrong check or city name")
      console.log(error)
      setloading(false)
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
    padding: "30px 10px 30px 10px"
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
          <button className="btn btn-dark " onKeyDown={newWeather} onClick={newWeather}>Search</button>
        </div>
        <div className="card" >
          <div className='card23'>
          {loading?<Spinner/>:<><span className='condition'>{info.main}</span>
            <img src={condition[info.main]} alt='img' className='conditionImg' /></>}
          </div>


          <div className='map'>
            <div className='tempDiv'>{info.temp}&deg;<div> <span style={{ fontSize: "30px", padding: "" }}>{info.name}<span className='contry'>{info.country}</span></span>
            </div></div>
            <div className='sunrise'>
              <div> Sunrise {Sunrise} AM</div>
              <div>{today}</div>
            </div>
          </div>
          <div className='weatherdetails'>
            <div>
              <i className="fa-regular fa-sun fa-2xl" style={style} ></i>
              <span style={boder}>{sun} PM
                <span> Sunset</span></span></div>
            <div>
              <i className="fa-solid fa-water fa-2xl" style={style}></i>
              <span style={boder}>{info.humidity}% <span>Humidity</span></span>
            </div>
            <div>
              <i className="fa-solid fa-smog fa-2xl" style={style}></i>
              <span style={boder}> Pressure <span>{info.pressure} mm</span> </span>
            </div>
            <div>
              <i className="fa-solid fa-wind fa-2xl" style={style}></i>
              <span>Wind speed<span> {info.speed} km/h</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default Weather;