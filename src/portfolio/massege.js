const Massege = (props) => {
    
    return (<>
        
               <div className="card  col-md-4  my-2" style={{ width: "80%" }}>
                    <div className="card-body">
                        <h4 className="card-text text-dark"> From: {props.firstname}</h4>
                        <h5 className="card-title text-dark">Tag: {props.subject}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.massege}</h6>

                    </div></div>
    
    </>)
}
export default Massege