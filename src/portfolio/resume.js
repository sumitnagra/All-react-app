import Footer from './footer'
const Resume=()=>{
return(<>
<div className='container projectheading'>
 <h1 className='projectHeading' >Resume </h1>
<div className='firstProject padding' data-aos="fade-up"> 
     < div className='textsection skill'><h4>Skills </h4><h4> & Expertise</h4>
     <div>
      <ul>
        <li>Html</li>
        <li>Css</li>
        <li>Javascript</li>
        <li>Bootsrap</li>
        <li>Jquery</li>
        <li>React</li>
        <li>Redux</li>
        <li>Node js</li>
        <li>Express js</li>
        <li>Mongodb</li>
        <li>Sql</li>
        <li>Saas</li>
        <li>Npm</li>
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