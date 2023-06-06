
const Footer=()=>{
return(<>
<div>
<hr  style={{top:"15rem" }}/>
        <div className='footer'>
            <div className='footerItem'>Phone <div style={{ fontWeight: "200" }}><i className="fa-solid fa-phone"></i>  9991921024</div></div>
            <div className='footerItem'>Email <div style={{ fontWeight: "200"}}><i className="fa-solid fa-envelope"></i>  nagrasumit1907@gmail.com</div></div>
            <div style={{fontSize:"18px"}}>Follow Me<div><a href="https://www.linkedin.com/in/sumit-kumar-463bb424a/" target="_blank"  rel="noreferrer"><i className="fa-brands fa-linkedin-in"  style={{cursor:"pointer",color:"black"}}></i></a></div></div>
            <div style={{ fontWeight: "lighter" }}>
                <p style={{ fontSize: "15px" }}>© 2023 By Sumit Nagra</p>
                <p style={{ fontSize: "15px", position: "relative", bottom: "20px" }}>Powered By LinkedIn </p>

            </div>
        </div>
        </div>
</>)
}
export default Footer