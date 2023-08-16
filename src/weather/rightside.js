const Rightside = (props) => {
  const Day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]

  const { dates, info } = props;
  const timestamp = info.sunrise + info.timezone;
  const riseTime = new Date(timestamp * 1000);
  const riseHour = riseTime.getUTCHours();
  const riseMinute = riseTime.getUTCMinutes();
  const timestamp2 = info.sunset + info.timezone;
  const setTime = new Date(timestamp2 * 1000);
  const setHour = setTime.getUTCHours();
  const setMinute = setTime.getUTCMinutes();
  const currentHour = new Date((info.dt + info.timezone) * 1000).getUTCHours();
  const currentMinute = new Date((info.dt + info.timezone) * 1000).getUTCMinutes();
  const daylight=setHour-riseHour
  return (
    <>
      <div className='rightside'>
        <div className='location'>
          <div>
            <h4>{Day[dates.getDay()]}</h4>
            <p>{info.name}, {info.country}</p>
          </div>
          <h2>{info.temp}°C</h2>
        </div>
        <div className="sunset">
          <h6 className="tooltiptext"style={{"left":`${currentHour*5}%`}}>{currentHour>12?currentHour%12:currentHour}:{currentMinute < 9 ? `0${currentMinute}` : currentMinute} {currentHour>12?"PM":"AM"}</h6>
          <svg height="80%" width="100%">
            <circle cx={`${currentHour*14}`} cy="20" r="13" stroke="darkorange" fill="darkorange" />

            <circle cx={`${(currentHour*14)}`} cy="150" r="5" stroke="darkorange" fill="darkorange" />
            <circle cx={`${riseHour * 12.5-30}`} cy="150" r="5" stroke="darkorange" fill="darkorange" />

            <path d={`M${riseHour * 12.5-30},150 A100,100 0 0,1 ${setHour*13+5},150`} fill="" strokeDasharray="5,5" stroke="orange" strokeWidth="1" />

            <path d="M0 150 L310 150" />
            <circle cx={`${setHour*12.5+15}`} cy="150" r="5" stroke="black" fill="black" />
          </svg>
          <div style={{ "display": "flex", "justifyContent": "space-between" }}>
            <div>
              <h5>Sunrise</h5>
              <div>{riseHour}:{riseMinute} AM</div>
            </div>
            <div>
              <h5>Sunset</h5>
              <div>{setHour > 12 ? setHour % 12 : setHour}:{setMinute <= 9 ? `0${setMinute}` : setMinute} PM</div>
            </div>

          </div>
        </div>
        <div className='uv'>
          <i className="fa-solid fa-sun fa-2xl" style={{ "color": "darkorange", "paddingTop": "15px" }}></i>
          <div>
            <h4>20 UVl <span className='aq'>Moderate</span></h4>
            <p>Moderate risk of from UV rays</p>
          </div>
        </div>


        <div className='weatherPridiction'>
          <h2>Weather Predicton</h2>
          <div className='nextdays'>
            <i className="fa-solid fa-cloud fa-2xl" style={{ "color": "darkgray" }} ></i>

            <div>
              <div>Nov 10</div>
              <h6>Cloudy</h6>
            </div>
            <h5>26°/29°</h5>
          </div>
          <div className='nextdays'>
            <i className="fa-solid fa-sun fa-2xl" style={{ "color": "darkorange" }}></i>
            <div>
              <div>Nov 11</div>
              <h6>Bright</h6>
            </div>
            <h5>30°/35°</h5>
          </div>
        </div>
        <button className='icon prediction'><h6><i className="fa-solid fa-calendar-days"></i> Next 5 days</h6></button>
      </div>
    </>

  )
}
export default Rightside;