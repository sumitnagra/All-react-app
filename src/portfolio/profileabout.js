import profieImage from '../images/PSX_20230522_205853.jpg'
import { useNavigate } from 'react-router-dom'
import DownloadButton from './download'
import { useLocation } from 'react-router-dom';
import Typing from './typing';

const About = (props) => {

    const location = useLocation();


    const navigate = useNavigate()
    return (<>
        <div className='profileImage '>
            <div>
                <img data-aos="fade-up" src={profieImage} alt='profile Image' />
            </div>

            <div className='about'><div className='flex'><div className="span1 tracking-in-expand"  >I'm Sumit</div> <div className="span2 "><Typing /></div></div>
                <p data-aos="fade-up">Passionate React developer seeking opportunities to utilize skills in developing responsive web applications. Eager to learn and contribute to a dynamic team, enhancing expertise in the field.</p>
                <div className='group'  data-aos="fade-up" >
                    <div className='circleItem1 ' onClick={() => { navigate("/project");window.scroll(0,100) }}><span className=''>Project</span></div>
                    <div className='circleItem2' onClick={() => { navigate("/resume");window.scroll(0,100) }}>Resume</div>
                    <div className='circleItem3' onClick={() => { navigate("/contact");window.scroll(0,100) }}>Contact</div>
                    <DownloadButton/>
                </div>
                </div>
            </div>
    
    </>)
}
export default About
