import { Link, useNavigate } from 'react-router-dom'
import Project1 from "../images/Screenshot (27).png"
import Project2 from "../images/Screenshot (28).png"
import Project3 from "../images/Screenshot (29).png"
import Project4 from "../images/Screenshot (30).png"
import Project5 from "../images/Screenshot (32).png"
import Project6 from "../images/Screenshot (33).png"
import Project7 from '../images/Screenshot (34).png'
import Project8 from '../images/Screenshot (35).png'
import Project9 from '../images/Screenshot (41).png'
import Footer from './footer'

const Project=()=>{
    const navigate=useNavigate();
    return(<>

        <h1 className='projectHeading'>Projects</h1>
<div className='firstProject ' data-aos="fade-up">
    <div className='textsection' ><h2>01 Weather App</h2>
<p>A compact and captivating weather app that harnesses the power of external APIs to bring you real-time weather updates from any corner of the world. Simply enter your city name and behold an immersive UI showcasing accurate weather data. Seamlessly integrate this feature-packed gem into your larger applications, ensuring a remarkable user experience.</p><button className='btn btn-dark' onClick={()=>{navigate("/weather");
window.scrollTo(0,110);document.title="Weather"}}>Try It</button></div><img src={Project1}/>
</div>
<div className='firstProject ' data-aos="fade-up">
    <div className='textsection' ><h2>02 Text Utils</h2>
<p>Introducing TextUtilize: Unleash the potential of your text with this versatile application. Seamlessly remove extra spaces, convert to uppercase or lowercase, and even reverse your text for added impact. Whether you're cleaning up your content or adding a creative twist, TextUtilize has got you covered. Empower your text and unlock endless possibilities with this handy tool.  </p><button className='btn btn-dark' onClick={()=>{navigate("/textUtils");window.scrollTo(0,110);document.title="Text Utils"}}>Try It</button></div><img src={Project2}/>
</div>
<div className='firstProject ' data-aos="fade-up">
    <div className='textsection' ><h2>03 News APP</h2>
<p> Your ultimate gateway to the world of news. Powered by the NewsAPI, this cutting-edge app brings you a diverse range of categories, including science, sports, technology, and health, all at your fingertips. Stay informed, stay connected, and explore the latest headlines with NewsXpress. Immerse yourself in the world of knowledge and be empowered by the stories that shape our lives. Experience news like never before with NewsXpress, your go-to source for curated, up-to-date, and impactful news content. </p><button className='btn btn-dark' target="_blank" onClick={()=>{navigate("/home");window.scrollTo(0,110);document.title=" Daily News"}}>Try It</button></div><img src={Project3} />
</div>
<div className='firstProject ' data-aos="fade-up">
    <div className='textsection' ><h2>04 Random Quote</h2>
<p>Introducing QuoteVerse: Your daily dose of inspiration and wisdom. This dynamic app harnesses the power of a vast collection of quotes, delivering a random gem with each refresh. Discover words of wisdom from renowned thinkers, authors, and visionaries across various fields. Let QuoteVerse be your guiding light, igniting positivity and fueling your inner motivation. Start your day with a dose of inspiration and unlock the endless possibilities within you with QuoteVerse. </p><button className='btn btn-dark' onClick={()=>{navigate("/advice");window.scrollTo(0,110);document.title="Random Quote"}}>Try It</button></div><img src={Project4} />
</div>
<div className='firstProject ' data-aos="fade-up">
    <div className='textsection' ><h2>05 Alarm Component</h2>
<p>Introducing AlarmHub: Your reliable and feature-rich alarm component for all your scheduling needs. Whether it's waking up in the morning, keeping track of important tasks, or setting reminders throughout the day, AlarmHub has you covered. Seamless integration into your existing applications, AlarmHub ensures you never miss a beat. Empower your productivity and stay on top of your schedule with the precision and reliability of AlarmHub. Rise and shine to a new level of efficiency with AlarmHub, your ultimate alarm companion. </p><button className='btn btn-dark' target="_blank" onClick={()=>{navigate("/alarm");window.scrollTo(0,110);document.title="Alarm"}}>Try It</button></div><img src={Project5} />
</div>
<div className='firstProject ' data-aos="fade-up">
    <div className='textsection' ><h2>06 Task NoteBook</h2>
<p>Introducing the Task NoteBook app, this app having the feature of login ,signup and logout with the backend support of Node and Mongodb . This app can create multiple account which are he secured by the security of JWT . Task can be added, deleted and can be modified according to the user The backend, developed in Node.js, provides a robust and scalable foundation for the application. It facilitates seamless communication between the client-side and the MongoDB database, ensuring efficient storage and retrieval of user-related information. 
    </p><button className='btn btn-dark' onClick={()=>{navigate("/notebook");window.scrollTo(0,110);document.title=" Task Notebook"}}>Try It</button></div><img src={Project7}/>
</div>
<div className='firstProject ' data-aos="fade-up">
    <div className='textsection' ><h2>07 Todo List </h2>
<p> This small application help user to create a todo list of the day ,the user can add task ,delete task and capable in modify the existed task  </p><button className='btn btn-dark' onClick={()=>{navigate("/app");window.scrollTo(0,110);document.title="Todo list"}}>Try It</button></div><img src={Project6} />
</div>
<div className='firstProject ' data-aos="fade-up">
    <div className='textsection' ><h2>08 Shoping Cart </h2>
<p> The smart add to cart application in which you can choose different product from the list and buy whenever you want also you can remove the product from the list , great simple user interface . See the full details of the product after add to cart   </p><button className='btn btn-dark' onClick={()=>{navigate("/shop");window.scrollTo(0,110);document.title="Shoping cart"}}>Try It</button></div><img src={Project8}/>
</div>
<div className='firstProject ' data-aos="fade-up">
    <div className='textsection' ><h2>09 Text to speech</h2>
<p> A cutting-edge text-to-speech app built with React! With a sleek interface and powerful functionality, it transforms written text into clear, natural-sounding audio.Having different kind of voices from different counteries. Experience the fusion of technology and creativity as words come to life. Discover the power of communication through my innovative TTS app. </p><button className='btn btn-dark' onClick={()=>{navigate("/speech");window.scrollTo(0,110);document.title="Text To Speech "}}>Try It</button></div><img src={Project9}/>
</div>
<Footer/>
    </>)
}
export default Project;