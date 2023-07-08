import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation()
    return (<>
        <div>
            <hr className='footerhr' />
            <div className='footer'>
                <div className='footerItem'>Phone <div style={{ fontWeight: "200" }}><i className="fa-solid fa-phone"></i>  9991921024</div></div>
                <div className='footerItem'>Email <div style={{ fontWeight: "200" }}><i className="fa-solid fa-envelope"></i>  nagrasumit1907@gmail.com</div></div>
                <div className="follow">Follow Me<div><a href="https://www.linkedin.com/in/sumit-kumar-463bb424a/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in" style={{ cursor: "pointer", color: `${location.pathname === "/resume" ? "black" : "white"}` }}></i></a><a href='https://github.com/sumitnagra' target='_blank'><i className="fa-brands fa-github" style={{ cursor: "pointer", color: `${location.pathname === "/resume" ? "black" : "white"}` }}></i> </a></div></div>
                <div style={{ fontWeight: "lighter" }}>
                    <p style={{ fontSize: "15px" }}>© 2023 By Sumit Nagra</p>
                    <p style={{ fontSize: "15px", position: "relative", bottom: "20px" }}> Ⓡ All Right Reserved   </p>

                </div>
            </div>
        </div>
    </>)
}
export default Footer