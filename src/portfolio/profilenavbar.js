import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import brand from '../images/My project-1.png'

const Navbar = () => {

    const location = useLocation();
    useEffect(() => {
        const rootDiv = document.getElementById('root');
        const body = document.body;

            switch (location.pathname) {
                case '/':
                    body.classList.remove('body-height-medium', 'body-height-large');
                    body.classList.add('body-height-small');
                    break;
                case '/resume':
                    body.classList.remove('body-height-small', 'body-height-large');
                    body.classList.add('body-height-medium2');
                    break;
                case '/project':
                    body.classList.remove('body-height-small', 'body-height-medium');
                    body.classList.add('body-height-large');
                    break;
                case '/contact':
                    body.classList.remove('body-height-small', 'body-height-medium');
                    body.classList.add('body-height-medium');
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
    const navigateProject = () => {
        navigate("/project")
    }
    const navigateContact = () => {
        navigate("/contact")
    }
    return (<>
        <div className="profileNav">

            <span className='ProfilenavItem' onClick={navigateContact}>Contact</span>
            <span className="spanProject ProfilenavItem" onClick={navigateProject}>Projects</span>
            <span className='ProfilenavItem' onClick={() => { navigate("/resume") }}>Resume </span>
            <div className="name" onClick={() => { navigate("/") }}><img src={brand} /><span>Sumit Nagra</span></div>
        </div>
    </>)
}
export default Navbar