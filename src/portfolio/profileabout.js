import profieImage from '../images/PSX_20230522_205853.jpg'
import { useNavigate } from 'react-router-dom'
import DownloadButton from './download'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const About = (props) => {

    const location = useLocation();
    useEffect(() => {
        const rootDiv = document.getElementById('root');
        const body = document.body;

        switch (location.pathname) {
            case '/':
                body.classList.remove('body-height-medium', 'body-height-large');
                body.classList.add('body-height-small');
                break;

            default:
                body.classList.remove('body-height-small', 'body-height-medium', 'body-height-large');
                break;
        }

        return () => {
            // Clean up the body classes when the component unmounts
            body.classList.remove('body-height-small', 'body-height-medium', 'body-height-large');
        };
    }, [location.pathname]);


    const navigate = useNavigate()
    return (<>
        <div className='profileImage'>
            <div>
                <img data-aos="fade-up" src={profieImage} alt='profile Image' width={450} height={450} style={{

                    borderRadius: "50%",
                    position: "relative",
                    bottom: "200px",
                    left: "65px"
                }} />
                <DownloadButton />
            </div>

            <div className='about'><span style={{ paddingLeft: "18px", fontSize: "30px", fontWeight: "700" }} data-aos="fade-up" ><span style={{ fontSize: "70px" }}>I'm Sumit</span> React Developer</span>
                <p style={{ padding: "20px" }} data-aos="fade-up">Passionate React developer seeking opportunities to utilize skills in developing responsive web applications. Eager to learn and contribute to a dynamic team, enhancing expertise in the field.</p>
                <div className='group' style={{ display: "inline-flex" }} data-aos="fade-up" >
                    <div className='circleItem1' onClick={() => { navigate("/project") }}>Project</div>
                    <div className='circleItem2' onClick={() => { navigate("/resume") }}>Resume</div>
                    <div className='circleItem3' onClick={() => { navigate("/contact") }}>Contact</div>
                </div>
            </div>
        </div>
    </>)
}
export default About