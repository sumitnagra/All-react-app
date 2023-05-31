import profieImage from '../images/PSX_20230522_205853.jpg'
import { useNavigate } from 'react-router-dom'
import Pdfviewer from './resumepdf'


const About = (props) => {
    
    const navigate = useNavigate()
    return (<>
        <div className='profileImage'>
            <div>
            <img data-aos="fade-up" src={profieImage} alt='profile Image' width={450} height={450} style={{ borderRadius: "50%", position: "relative", bottom: "200px" }} />
            <button  className='btn btn-dark btn-lg cv' >Download CV</button>
        <Pdfviewer/>
            </div>

       <div className='about'><span style={{ paddingLeft: "18px", fontSize: "30px", fontWeight: "700" }} data-aos="fade-up" ><span style={{ fontSize: "70px" }}>Hi</span> , I'm Sumit React Developer</span>
                <p style={{ padding: "20px" }} data-aos="fade-up">Passionate React developer seeking opportunities to utilize skills in developing responsive web applications. Eager to learn and contribute to a dynamic team, enhancing expertise in the field.</p>
                <div style={{ display: "inline-flex" }} data-aos="fade-up" >
                    <div className='circleItem1' onClick={() => { navigate("/project") }}>Project</div>
                    <div className='circleItem2' onClick={() => { navigate("/resume") }}>Resume</div>
                    <div className='circleItem3' onClick={() => { navigate("/contact") }}>Contact</div>
                </div>
            </div>
        </div>
    </>)
}
export default About