const Temprature = () => {
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
          <i className="fa-solid fa-cloud fa-2xl" style={{ "color": "darkgray" }} ></i>
        </div>
        <svg width="100%" height="80%">
  <circle cx="0" cy="10" r="5" fill="red" />
  <path d="M0 10 C50 50, 150 50, 200 100 S350 150, 400 100 S550 50 , 600 100" fill="none" stroke="black" stroke-width="2" />
 </svg>

        
          <h4>20°</h4><p>Morning</p></div>
        <div className='graph'><div></div><div></div></div>
        <div className='graph'><div></div><div></div></div>
        <div className='graph'><div></div><div></div></div>
        <div className='tomorrow'></div>
      </div>
    </div>

  </>)
}
export default Temprature