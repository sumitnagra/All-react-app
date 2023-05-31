import './profile.css'
import Footer from './footer'
import { useState } from 'react'
const Contact = () => {
        const [text, settext] = useState('')
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
                                        <span className="looking"><i className="fa-regular fa-envelope"></i> sumitnagra@gmail.com</span>
                                </div>
                        </div>
                        <div className='contactForm'>
                                <div className='Firstname'>
                                <div >
                                        <p>First Name *</p>
                                        <input type='text' value={text} />
                                </div>
                                <div>
                                        <p>Last Name *</p>
                                        <input type='text' value={text} />
                                </div>
                                </div>
                                <div className='email'>
                                <div>
                                        <p>Email *</p>
                                        <input type='email' value={text} />
                                </div>
                                <div>
                                        <p>Subject</p>
                                        <input type='text' value={text} />
                                </div>
                                </div>
                                <div className='msg'>
                                <div>
                                        <p>Massage</p>
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