import { useState, useEffect } from 'react'
import Spinner from '../Notebook/component/context/spinner'
import './weather.css'
import character from '../images/weather/character.jpg'

const Weather = () => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [city, setCity] = useState("delhi")
  const [info, setInfo] = useState({})
  const [value, setValue] = useState("delhi")
  const [loading, setloading] = useState(false)


  let weatherCondition = '';
  // Determine the className based on the weather condition
  switch (info.main) {
    case 'Rain':
      weatherCondition = currentHour > 20 ? 'nightRain' : 'rain';
      break;
    case 'Clear':
      weatherCondition = currentHour > 19 ? 'moon' : 'clear';
      break;
    case 'Clouds':
      weatherCondition = 'cloud';
      break;
    case 'Mist':
      weatherCondition = currentHour > 19 ? "nightmist" : "mist";
      break;
    case 'Thunderstorm':
      weatherCondition = 'thunderstorm';
      break;
    case 'Haze':
      weatherCondition = currentHour > 19 ? 'nighthaze' : 'haze';
      break;
    case 'Smoke':
      weatherCondition = currentHour > 19 ? 'nightSmoke' : 'smoke';
      break;
    case 'Dust':
      weatherCondition = 'dust';
      break;
    // Add more cases for other weather conditions
    default:
      weatherCondition = 'clear';
  }
  let windDirection;
  let x = info.deg;
  switch (true) {
    case x >= 0 && x < 90:
      windDirection =`${info.deg}° East`;
      break;
    case x >= 90 && x < 180:
      windDirection =`${info.deg}° South`;
      break;
    case x >= 180 && x < 270:
     windDirection= `${info.deg}° West`;
      break;
    case x >= 270 && x < 360:
     windDirection= `${info.deg}° North`;
      break;
    default:
      windDirection = "No "
  }

  const handleInput = (e) => {
    setValue(e.target.value)
    console.log(currentHour)
  }

  const Data = async () => {
    try {
      setloading(true)
      const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=363902cae52b6ee6848bc923b7e7feea`)
      const parseData = await weather.json();
      const { main } = parseData.weather[0];
      const { temp, pressure, humidity, feels_like } = parseData.main;
      let { speed, deg } = parseData.wind;
      const { country, sunset, sunrise } = parseData.sys;
      const { name } = parseData;
      const { visibility } = parseData;
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
      }
      setInfo(newInfo)
      setloading(false)
    } catch (error) {
      if (!navigator.onLine) {
        alert("Cheack your internet connection")
      } else {

        console.log(error)
        setloading(false)
      }
    }
  }
  useEffect(() => {
    Data()

  }, [city], 1000)


  const newWeather = (event) => {
    if (event.key === 'Enter') {
      setCity(value)
      Data()
      console.log(info.deg)
    }
  };

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

  return (<>
    <div className='Topnavbar'>
      <img className="character" src={character} />
      <div >
        <div className='charactername'>Hello</div>
        <div>Jack Grealish</div>
      </div>
      <input type='search' className='search' value={value} onChange={handleInput} onKeyDown={newWeather} />

    </div>
    <div className='Body'>
      <div className={`weatherBox ${weatherCondition}`}  >
        <div className='Weatherinfo'>
          <span className='iconCircle'><i className="fa-solid fa-cloud fa-lg" style={{ color: "orange" }}></i></span>
          <h4>Weather</h4>
        </div>
        <h1 className='temp'>{info.temp}°C <span style={{"fontWeight":"lighter" ,"fontSize":"2 0px"}}>Feels like </span><span className='feelsLike'> {info.feels_like}°C</span></h1>
        <h4 className='temp'>{info.main}</h4>
        <div className='weatherDetails'>
          <div className='pressure'><div >Pressure</div>
            {info.pressure}mb</div>
          <div className='visibility'><div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px" }}>Visibility</div>{(info.visibility) / 1000} km</div>
          <div className='humidity'><div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px" }}>Humadity</div>{info.humidity}%</div>
        </div>
      </div>
      <div className="weatherBox2 airQuality">
        <div className='Weatherinfo'>
          <span className='iconCircle'><i className="fa-solid fa-wind fa-xl" style={{ color: "orange" }}></i></span>
          <h4>Air Quality</h4>
        </div>
        <p>Main Polution : PM 2.5</p>
        <h1>390 <span className='aq'>AQ</span></h1>
        <p className='wind'>{windDirection}</p>
        <div className=''></div>
      </div>
    </div>
  </>)
}

export default Weather;