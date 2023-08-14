const Rightside=(props)=>{
  const Day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]

    const {dates,info}=props;
    return(
        <>
        <div className='rightside'>
        <div className='location'>
          <div>
            <h4>{Day[dates.getDay()]}</h4>
            <p>{info.name}, {info.country}</p>
          </div>
          <h2>{info.temp}°C</h2>
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