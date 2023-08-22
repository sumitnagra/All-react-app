import { useState, useEffect } from 'react'
import './weather.css'
import "./mobileview.css"
import character from '../images/weather/character.jpg'
import LoadingBar from 'react-top-loading-bar'
import Temprature from './temprature'
import Rightside from './rightside'
import WeatherCondition from './weatherConditoin'


const Weather = () => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [city, setCity] = useState("delhi")
  const [info, setInfo] = useState({})
  const [value, setValue] = useState("")
  const [progress, setProgress] = useState(0)
  const current = new Date((info.dt + info.timezone) * 1000).getUTCHours()

  let weatherCondition = '';
  // Determine the className based on the weather condition
  switch (info.main) {
    case 'Rain':
      weatherCondition = current > 20 ? 'nightRain' : 'rain';
      break;
    case 'Clear':
      weatherCondition = current > 19 ? 'moon' : 'clear';
      break;
    case 'Clouds':
      weatherCondition = 'cloud';
      break;
    case 'Mist':
      weatherCondition = current > 19 ? "nightmist" : "mist";
      break;
    case 'Thunderstorm':
      weatherCondition = 'thunderstorm';
      break;
    case 'Haze':
      weatherCondition = current > 19 ? 'nighthaze' : 'haze';
      break;
    case 'Smoke':
      weatherCondition = current > 19 ? 'nightSmoke' : 'smoke';
      break;
    case 'Dust':
      weatherCondition = 'dust';
      break;
    case 'Drizzle':
      weatherCondition = 'drizzling';
      break;
    // Add more cases for other weather conditions
    default:
      weatherCondition = 'clear';
  }
  let windDirection;
  let x = info.deg;
  switch (true) {
    case x >= 0 && x < 90:
      windDirection = ' East';
      break;
    case x >= 90 && x < 180:
      windDirection = 'South';
      break;
    case x >= 180 && x < 270:
      windDirection = 'West';
      break;
    case x >= 270 && x < 360:
      windDirection = ' North';
      break;
    default:
      windDirection = "No "
  }

  const handleInput = (e) => {
    setValue(e.target.value)
  }
  const Data = async () => {
    try {
      setProgress(30)
      const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=363902cae52b6ee6848bc923b7e7feea`)
      const parseData = await weather.json();
      const { main } = parseData.weather[0];
      const { temp, pressure, humidity, feels_like  , temp_min, temp_max} = parseData.main;
      let { speed, deg } = parseData.wind;
      const { country, sunset, sunrise } = parseData.sys;
      const { name } = parseData;
      const { visibility } = parseData;
      const {timezone}=parseData;
      const{dt}=parseData;
      setProgress(50)
      const newInfo = {
        main,
        temp,
        feels_like,
        pressure,
        humidity,
        speed,
        deg,
        country,
        sunset,
        sunrise,
        name,
        visibility,
        temp_min,
        temp_max,
        timezone,
        dt
      }
      setInfo(newInfo)
      setProgress(100)
    } catch (error) {
      if (!navigator.onLine) {
        alert("Cheack your internet connection")
      } else {

        console.log(error)
        setProgress(100)
      }
    }
  }
  useEffect(() => {
    Data()
  }, [city], 1000)
  const onclickHandle = () => {
    setCity(value)
    Data()
  }

  const newWeather = (event) => {
    if (event.key === 'Enter') {
      setCity(event.target.value)
      Data()
    }
  };

  useEffect (() => {
    const interval = setInterval(() => {
    }, [city]);

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

  return (<>
    <div id='main'>
      <div className='leftside'>
        <div className='Topnavbar'>
          <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <img className="character" src={character} />
          <div >
            <div className='charactername'>Hello</div>
            <div>Jack Grealish</div>
          </div>
          <input type='text' className='search' value={value} onChange={handleInput} onKeyDown={newWeather} placeholder='Search by city name' />
          <i className="fa-solid fa-magnifying-glass fa-xl" id='magnify' onClick={onclickHandle}></i>
          <i className="fa-regular fa-bell fa-xl" id='bell'></i>
        </div>
        <WeatherCondition info={info} weatherCondition={weatherCondition} windDirection={windDirection} />
        <div>
          <Temprature info={info} />
        </div>
      </div>
      <Rightside dates={dates} info={info} />
    </div>
  </>)
}

export default Weather;