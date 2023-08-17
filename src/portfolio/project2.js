import { Link, useNavigate } from 'react-router-dom'
import Image1 from "../images/Screenshot (27).png"
import Image2 from "../images/Screenshot (28).png"
import Image3 from "../images/Screenshot (29).png"
import Image4 from "../images/Screenshot (30).png"
import Image5 from "../images/Screenshot (32).png"
import Image6 from "../images/Screenshot (33).png"
import Image7 from '../images/Screenshot (34).png'
import Image8 from '../images/Screenshot (35).png'
import Image9 from '../images/Screenshot (41).png'
import Footer from './footer'
import './project.css'
const Project2=()=>{
const ProjectData=[
    {
        Name:"Weather App",
        image:Image1,
        description:"Global weather app with APIs, real-time updates, immersive UI. Enhance applications with accurate, seamless, and captivating user experiences.",
        link:"/weather"
    },
    {
        Name:"Text Utils",
        image:Image2,
        description:"TextUtilize: Transform text effortlessly. Trim spaces, change case, reverse. Elevate content creatively. Empower your words with versatile, impactful text manipulation.",
        link:"/textUtils"
    },
    {
        Name:"NewsXpress",
        image:Image3,
        description:"NewsXpress: Your NewsAPI-powered gateway. Explore diverse categories instantly. Stay informed, connected with curated, impactful stories. Experience knowledge empowerment like never before.",
        link:"/news"
    },
    {
        Name:"QuotesVerse",
        image:Image4,
        description:"QuoteVerse: Daily inspiration, random wisdom. Vast collection from thinkers, authors. Ignite positivity, fuel motivation. Start days inspired, unlock endless possibilities within, with QuoteVerse.",
        link:"/advice"
    },
    {
        Name:"AlarmHub",
        image:Image5,
        description:"AlarmHub: Versatile alarm component. Wake up, track tasks, set reminders seamlessly. Empower productivity, integrate easily. Rise efficiently with AlarmHub's reliability.",
        link:"/alarm"
    },
    {
        Name:"Task NoteBook",
        image:Image6,
        description:"Task NoteBook: Secure login, signup, logout. Node.js-MongoDB backend. JWT-protected accounts. Add, delete, modify tasks. Efficient communication, storage, retrieval. User-centered app.",
        link:"/notebook"
    },
    {
        Name:"Todo List",
        image:Image7,
        description:"Simple app: Create, delete, modify daily tasks. User-friendly to-do list for efficient task management.",
        link:"/todolist"
    },
    {
        Name:"Shoping Cart",
        image:Image8,
        description:"Smart Add to Cart: Choose, buy, remove products easily. Clear UI. Detailed info post-addition. Streamlined shopping experience.",
        link:"/shop"
    },
    {
        Name:"Shoping Cart",
        image:Image9,
        description:"Cutting-edge React TTS app: Transform text to natural audio. Sleek UI, diverse voices worldwide. Tech meets creativity, communication evolves. Explore TTS innovation now!",
        link:"/speech"
    },
]
    return(<>
    <div className='projectContainer'>
        {ProjectData.map((item,index)=>{
          return <div key={index} className='projectCard'>
            <img src={item.image}/>
           <h5> {item.Name}</h5>
           
          
          </div>
        })}
    </div>
    <Footer/>
    </>)

}
export default Project2
