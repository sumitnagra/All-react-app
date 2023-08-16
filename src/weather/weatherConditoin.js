const WeatherCondition = (props) => {
  const { info, weatherCondition, windDirection } = props;
  return (
    <>
      <div className='Body'>
        <div className={`weatherBox ${weatherCondition}`}  >
          <div className='Weatherinfo'>
            <span className='iconCircle'><i className="fa-solid fa-cloud fa-lg" style={{ color: "orange" }}></i></span>
            <h4>Weather</h4>
          </div>
          <h1 className='temp'>{info.temp}°C <span style={{ "fontWeight": "lighter", "fontSize": "18px" }}>Feels like </span><span className='feelsLike'> {info.feels_like}°C</span></h1>
          <h4 className='temp'>{info.main}</h4>
          <div className='weatherDetails'>
            <div className='pressure'><div >Pressure</div>
              {info.pressure} mb</div>
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
          <h1>390 <span className='aq'>AQi</span></h1>
          <p className='wind'>{windDirection} Wind</p>
          < div className="polutionCondition">
            <div style={{ "display": "flex", "justifyContent": "space-between" }}>
            <h6 className="tooltiptext">Standard</h6>

              <h5>Good </h5><h5>Hazardous</h5>
            </div>
            <div className="progress" style={{"height":"7px"}}>
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{"width": "50%" ,"backgroundColor":"darkorange"}}>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default WeatherCondition