const Temprature = (props) => {

  return (<>
    <div className='temprature'>
      <div style={{ "display": "flex" }}>
        <h1>How's the temprature today ?</h1>
        <div className='icon'><i className="fa-solid fa-temperature-low fa-xl"></i></div>
        <div className='icon'><i className="fa-solid fa-umbrella fa-xl"></i></div>
        <div className='icon'><i className="fa-solid fa-wind fa-xl"></i></div>
      </div>
      <div className='tempGraph'>
        <div className='graph'><div>
          <i className="fa-solid fa-cloud fa-2xl" style={{ "color": "black" }} ></i>
        </div>
          <svg width="100%" height="60%">
            <defs>

              <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="70%" y2="0%">
                <stop offset="0%" stopColor="white" stop-opacity="1" />
                <stop offset="100%" stopColor="white" stop-opacity="0" />
              </linearGradient>
            </defs>

            <path d="M20 70 C 60 100, 130 100, 200 50" />

            <path d="M20 70 C 60 100, 130 100, 200 50" stroke="url(#fadeGradient)" strokeWidth="8" />
            <circle cx="95" cy="90" r="4"
              stroke="darkorange" strokeWidth="4" fill="darkorange" />
          </svg>
          <h4>{props.info.temp_min}°</h4><p>Morning</p></div>
        <div className='graph'><div>
          <i className="fa-solid fa-sun fa-2xl" style={{ "color": "black" }} ></i>
        </div>
          <svg width="100%" height="60%">
            <circle cx="95" cy="29" r="4"
              stroke="darkorange" strokeWidth="4" fill="darkorange" />

            <path d="M0 54 C 70 20, 140 20, 200 54" />
          </svg>
          <h4>{props.info.temp_max}°</h4><p>Afternoon</p></div>
        <div className='graph'><div>
          <i className="fa-solid fa-cloud-sun fa-2xl" style={{ "color": "black" }} ></i>
        </div>
          <svg width="100%" height="60%">
            <circle cx="95" cy="82" r="4"
              stroke="darkorange" strokeWidth="4" fill="darkorange" />
            <path d="M0 50 C 70 100, 140 85, 200 50" />

          </svg>
          <h4>20°</h4><p>Evening</p></div>
        <div className='graph'><div>
          <i className="fa-solid fa-moon fa-2xl" style={{ "color": "black" }} ></i>
        </div>
          <svg width="100%" height="60%">


          <defs>
    
    <linearGradient id="fadeGradientk" x1="40%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="white" stop-opacity="0" />
      <stop offset="100%" stopColor="white" stop-opacity="1" />
    </linearGradient>
  </defs>
  
            <path d="M0 54 C 70 20, 120 20, 180 40" />
            <path d="M0 54 C 70 20, 120 20, 180 40" stroke="url(#fadeGradientk)" strokeWidth="5" fill="none"/>
            <circle cx="95" cy="27" r="4"
              stroke="darkorange" strokeWidth="4" fill="darkorange" />
          </svg>
          <h4>28°</h4><p>Night</p></div>

        <div className='tomorrow'></div>
      </div>
    </div>

  </>)
}
export default Temprature