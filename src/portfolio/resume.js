import Footer from './footer'
import jquery from '../images/icons8-jquery-50.png';
import redux from '../images/icons8-redux-100.png'
import express from '../images/expressjs_logo_icon_169185.png'
import mongodb from '../images/icons8-mongodb-a-cross-platform-document-oriented-database-program-24.png'
import sql from '../images/icons8-sql-80.png'
const Resume=()=>{
return(<>
<div className='container projectheading'>
 <h1 className='projectHeading' >Resume</h1>
<div className='firstProject padding' data-aos="fade-up"> 
     < div className='textsection skill'><h4>Skills </h4><h4> & Expertise</h4>
     <div className="expertise">
      <ul>
        <li><i class="fa-brands fa-html5 fa-xl"></i> Html</li>
        <li ><i class="fa-brands fa-css3-alt fa-xl" ></i> Css</li>
        <li><i class="fa-brands fa-square-js fa-xl"></i> Javascript</li>
        <li><i class="fa-brands fa-bootstrap fa-xl"></i> Bootsrap</li>
        <li><img height={25} src={jquery}/> Jquery</li>
        <li><i class="fa-brands fa-react fa-xl"></i> React</li>
        <li><img height={25} src={redux}/>Redux</li>
        <li><i class="fa-brands fa-node-js fa-xl"></i> Node js</li>
        <li><img height={25} src={express}/>Express js</li>
        <li><img src={mongodb} height={25}/>Mongodb</li>
        <li><img src={sql} height={25}/>Sql</li>
        <li> <i class="fa-brands fa-sass fa-xl"></i>Saas</li>
        <li> <i class="fa-brands fa-npm fa-xl"></i>Npm</li>
      </ul>
   </div>
</div>
</div>
<hr data-aos="fade-up"/>
<div className=' education' data-aos="fade-up"> 
     < div className= ' skill'><h4> Education</h4>
     <div>
      <ul>
        <li>2016-2019 </li><h5>Bsc Computer Science</h5>
        <span>Govt college chhachhrauli</span>
        <li>2022-2022 </li><h5>Six Months training in React development</h5>
        <span>Webcom institute Yamuna Nagar, Haryana</span>
      </ul>
   </div>
</div>
</div>
</div>
<Footer/>
</>)
}

export default Resume;