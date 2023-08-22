import './profile.css'
import Footer from './footer'
import { useState } from 'react'
const Contact = () => {
        document.title = "Contact"
        const [text, settext] = useState('')

        const onchangeHandle = (e) => {
                settext(e.target.value)

        }

        return (<>
                <div className="container contact" data-aos="fade-up">
                        <div className='contactdetail'>
                                <h1 className="contactheading">Contact</h1>
                                <span className="looking">Looking forward to hearing from you</span>
                                <div className='Phone'>
                                        <h4>Phone</h4>
                                        <span className="looking"><i className="fa-brands fa-whatsapp"></i>  9991921024</span>
                                </div>
                                <div className='Phone'>
                                        <h4>Email</h4>
                                        <span className="looking"><i className="fa-regular fa-envelope"></i> sumitnagra1907@gmail.com</span>
                                </div>
                        </div>
                        <div className='contactForm'>
                                <div className='Firstname'>
                                        <div >
                                                <p>First Name <span style={{ color: "red" }}>*</span></p>
                                                <input type='text' name='firstname' onChange={onchangeHandle} />
                                        </div>
                                        <div>
                                                <p>Last Name <span style={{ color: "red" }}>*</span></p>
                                                <input type='text' name='lastname' onChange={onchangeHandle} />
                                        </div>
                                </div>
                                <div className='email'>
                                        <div>
                                                <p>Email <span style={{ color: "red" }}>*</span></p>
                                                <input type='email' name='email' onChange={onchangeHandle} />
                                        </div>
                                        <div>
                                                <p>Subject <span style={{ color: "red" }}>*</span></p>
                                                <input type='text' name='subject' onChange={onchangeHandle} />
                                        </div>
                                </div>
                                <div className='msg'>
                                        <div>
                                                <p>Massage <span style={{ color: "red" }}>*</span></p>
                                                <textarea className='contactmsg'></textarea>
                                        </div>
                                        <div className='circleItem1'>Submit</div>
                                </div>
                        </div>
                </div>
                <Footer />
        </>)
}

export default Contact