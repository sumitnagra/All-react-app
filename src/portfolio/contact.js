import './profile.css'
import Footer from './footer'
import { useState, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Massege from './massege'
const Contact = () => {
        document.title = "Contact";
        const [firstname, fistsetname] = useState('')
        const [lastname, lastsetname] = useState('')
        const [email, setemail] = useState('')
        const [subject, setsubject] = useState('')
        const [massege, setmassege] = useState('')
        const [progress, setProgress] = useState(0)
        const [personMassege, setpersonMassege] = useState([])


        const sendmassege = async (e) => {
                e.preventDefault();
                setProgress(50);

                try {
                        const response = await fetch("https://sumitportfolio-u9sd.onrender.com/massege", {
                                method: "POST",
                                headers: {
                                        "Content-Type": "application/json"
                                },
                                body: JSON.stringify({ firstname, lastname, email, subject, massege })
                        });

                        // Handle the response if needed

                        setProgress(100);
                } catch (error) {
                        console.error("Error sending message:", error);
                        // Handle the error if needed
                }
        };
        const getMassage = async () => {
                const responce = await fetch("https://sumitportfolio-u9sd.onrender.com/massege")
                        .then(data => data.json()).then(res => setpersonMassege(res))
        }
        useEffect(() => {
                getMassage()
        }, [])


        return (<>
                <LoadingBar
                        color='#f11946'
                        progress={progress}
                        onLoaderFinished={() => setProgress(0)}
                />
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
                                <form onSubmit={sendmassege}>
                                        <div className='Firstname'>
                                                <div >
                                                        <p>First Name <span style={{ color: "red" }}>*</span></p>
                                                        <input type='text' value={firstname} name='firstname' onChange={(e) => fistsetname(e.target.value)} required />
                                                </div>
                                                <div>
                                                        <p>Last Name <span style={{ color: "red" }}>*</span></p>
                                                        <input type='text' value={lastname} name='lastname' onChange={(e) => lastsetname(e.target.value)} />
                                                </div>
                                        </div>
                                        <div className='email'>
                                                <div>
                                                        <p>Email <span style={{ color: "red" }}>*</span></p>
                                                        <input type='email' value={email} name='email' onChange={(e) => setemail(e.target.value)} required />
                                                </div>
                                                <div>
                                                        <p>Subject <span style={{ color: "red" }}>*</span></p>
                                                        <input type='text' value={subject} name='subject' onChange={(e) => setsubject(e.target.value)} required />
                                                </div>
                                        </div>
                                        <div className='msg'>
                                                <div>
                                                        <p>Massage <span style={{ color: "red" }}>*</span></p>
                                                        <textarea className='contactmsg' name='massage' value={massege} onChange={(e) => setmassege(e.target.value)} required></textarea>
                                                </div>
                                                <button type='submit' className='circleItem1'>Submit</button>
                                        </div>
                                </form>
                        </div>
                </div>
             
                <div className='container' style={{"marginTop":"30%"}}> <h3>Recent Masseges:</h3>
                        {personMassege.map((item) => {
                                return <Massege key={item._id} firstname={item.firstname} subject={item.subject} massege={item.massege} />
                        })
 }
                </div>
                <Footer />
        </>)
}

export default Contact