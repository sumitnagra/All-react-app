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
          <i className="fa-solid fa-cloud fa-2xl" style={{ "color": "darkgray" }} ></i>
        </div>
        <svg width="100%" height="60%">
          <circle cx="5" cy="5" stroke="red" r="5"/>
        <path d="M0  0 L100 50" stroke="black"/>

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