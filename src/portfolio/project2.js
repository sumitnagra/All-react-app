import { useNavigate } from 'react-router-dom'
// import Image1 from "../images/Screenshot (27).png"
// import Image2 from "../images/Screenshot (28).png"
// import Image3 from "../images/Screenshot (29).png"
// import Image4 from "../images/Screenshot (30).png"
// import Image5 from "../images/Screenshot (32).png"
// import Image6 from "../images/Screenshot (33).png"
// import Image7 from '../images/Screenshot (34).png'
// import Image8 from '../images/Screenshot (35).png'
// import Image9 from '../images/Screenshot (41).png'
// import Footer from './footer'
import './project.css'
const Project2 = () => {
    const navigate = useNavigate()
    const ProjectData = [
        {
            Name: "Weather App",
            src: "https://cdn.lordicon.com/vnioezyi.json",
            trigger: "boomerang",
            colors: "outline:#121331,primary:#4bb3fd",
            description: "Global weather app with APIs, real-time updates, immersive UI. Enhance applications with accurate, seamless, and captivating user experiences.",
            link: "/weather"
        },
        {
            Name: "Text Utils",
            src: "https://cdn.lordicon.com/alzqexpi.json",
            trigger: "hover",
            colors: "primary:#121331,secondary:#646e78,tertiary:#ffc738,quaternary:#f9c9c0,quinary:#ebe6ef",

            description: "TextUtilize: Transform text effortlessly. Trim spaces, change case, reverse. Elevate content creatively. Empower your words with versatile, impactful text manipulation.",
            link: "/textUtils"
        },
        {
            Name: "NewsXpress",
            src: "https://cdn.lordicon.com/zeabctil.json",
            trigger: "hover",
            colors: "outline:#121331,primary:#4bb3fd,secondary:#ebe6ef",

            description: " Your NewsAPI-powered gateway. Explore diverse categories instantly. Stay informed, connected with curated, impactful stories.",
            link: "/home"
        },
        {
            Name: "QuotesVerse",
            src: "https://cdn.lordicon.com/kjkiqtxg.json",
            trigger: "hover",
            colors: "outline:#121331,primary:#646e78,secondary:#4bb3fd,tertiary:#ebe6ef",
            description: " Vast collection from thinkers, authors. Ignite positivity, fuel motivation. Start days inspired, unlock endless possibilities within, with QuoteVerse.",
            link: "/advice"
        },
        {
            Name: "AlarmHub",
            src: "https://cdn.lordicon.com/mdbykuhq.json",
            trigger: "hover",
            colors: "outline:#121331,primary:#3a3347,secondary:#ffc738,tertiary:#ebe6ef",
            description: "AlarmHub: Versatile alarm component. Wake up, track tasks, set reminders seamlessly. Empower productivity, integrate easily. Rise efficiently with AlarmHub's reliability.",
            link: "/alarm"
        },
        {
            Name: "Task NoteBook",

            src: "https://cdn.lordicon.com/ttioogfl.json",
            trigger: "hover",
            colors: "primary:#121331,secondary:#ebe6ef,tertiary:#4bb3fd,quaternary:#92140c,quinary:#f9c9c0",
            state: "morph",
            description: "Secure login, signup, logout. Node.js-MongoDB backend. JWT-protected accounts. Add, delete, modify tasks. communication, storage, retrieval.",
            link: "/notebook"
        },
        {
            Name: "Todo List",
            src: "https://cdn.lordicon.com/qtqvorle.json",
            trigger: "hover",
            colors: "outline:#121331,primary:#646e78,secondary:#ebe6ef,tertiary:#4cb4fd",
            description: "Simple app: Create, delete, modify daily tasks. User-friendly to-do list for efficient task management.",
            link: "/app"
        },
        {
            Name: "Shoping Cart",
            src: "https://cdn.lordicon.com/cllunfud.json",
            trigger: "hover",
            colors: "outline:#121331,primary:#646e78,secondary:#ebe6ef",

            description: "Smart Add to Cart: Choose, buy, remove products easily. Clear UI. Detailed info post-addition.",
            link: "/shop"
        },
        {
            Name: "Text-to-Speech",
            src: "https://cdn.lordicon.com/fawsndrc.json",
            trigger: "hover",
            colors: "outline:#121331,primary:#3a3347,secondary:#646e78,tertiary:#ebe6ef",
            description: "Cutting-edge React TTS app: Transform text to natural audio. Sleek UI, diverse voices worldwide. Tech meets creativity, communication evolves. Explore TTS innovation now!",
            link: "/speech"
        },
    ]
    var storedArray = JSON.parse(sessionStorage.getItem('myArray')) || [];

    return (<>
        <div className='projectContainer' >
            {ProjectData.map((item, index) => {
                return <div key={index} className='projectCard'  >
                    <lord-icon
                        src={item.src}
                        trigger={item.trigger}
                        colors={item.colors}
                        state={item.state}
                        style={{ "width": "40%", "height": "40%" }}>
                    </lord-icon>
                    {storedArray.includes(item.Name)? <lord-icon
                        src="https://cdn.lordicon.com/ivayzoru.json"
                        trigger="hover"
                        colors="outline:#16c72e,primary:#ffffff,secondary:#16c72e"
                        style={{ "width": "50px", "height": "50px", "position": "relative", "bottom": "20%", "left": "10%" }}>
                    </lord-icon> : ""}
                    <h4> {item.Name}</h4>
                    <p>{item.description}</p>
                    <button className='btn btn-dark my-1' onClick={()=>
                        {storedArray.push(`${item.Name}`) ;
                        sessionStorage.setItem("myArray",JSON.stringify(storedArray))
                        navigate(item.link)}}>Try it</button>
                </div>
            })}
        </div>
    </>)

}
export default Project2
