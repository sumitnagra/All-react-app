import React from 'react'

const Newsitem = (props) => {


  return (
    <>

      <div className="card my-3 mx-4 " style={{ width: "18rem", height: "auto" }} >{props.key}
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "88%", padding: "6px", zindex: "1" }}>{props.source}</span>
        <img src={props.imageUrl} className="card-img-top" alt="loading"/>
        <div className="card-body">
          <h5 className="card-">{props.length > 60 ? `${props.title.substring(0, 60)}...` : props.title}</h5>
          <p className="card-text">{props.description ? (props.description.length > 80 ? `${props.description.substring(0, 80)}...` : props.description) : 'No description available.'}</p>


          <h6>Published at {new Date(props.Date).toGMTString()}</h6>
          <a href={props.Url} target="_blank" className="btn btn-primary btn-sm">Read More</a>
        </div>
      </div>
 

    </>
  )
}
export default Newsitem;