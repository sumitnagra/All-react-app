import React, { useState, useContext } from "react";
import  Notecontext  from './Notecontext.js'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar';
import LoadingBar from 'react-top-loading-bar'

import './signup.css'

const SignUP = (props) => {
const [progress, setProgress] = useState(0)
  const [user, setUser] = useState({ name: "", email: "", password: "" })
  const navigate = useNavigate()
  const a = useContext(Notecontext);
  const host="https://sumitportfolio-u9sd.onrender.com"
  const signup = async (user) => {
    setProgress(30)
    const responce = await fetch(`${host}/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: user.name, email: user.email, password: user.password })
    })

    const json = await responce.json();
    
    if(json){
      setProgress(70)
      localStorage.setItem('auth-token', json.jwtData)
      navigate("/login")
      props.showAlert('Account created successfully','success')
      setProgress(100)
    }
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    signup(user)
  }
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  return (<>
  <Navbar/>
  <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
    {/* <form className='container' style={{ marginTop: "55px" }} onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
        <input type="text" name='name' className="form-control" onChange={onChange} id="exampleInputPassword2" required minLength={3}/>
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={onChange} required/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" name='password' className="form-control" onChange={onChange} id="exampleInputPassword1" required minLength={5}/>
      </div>
      <button type="submit" className="btn btn-success">Submit</button>
      <span className='mx-5'>
           Already have an account  <span><Link to="/login"> Log In</Link></span></span>
    </form> */}
<br/>
<br/>
<div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card-group mb-0">
          <div className="card p-4">
            <div className="card-body">
              <h1>Create Account</h1>
              <p className="text-muted">Signup your account</p>
              <div className="input-group mb-3">
                <span className="input-group-addon"><i className="fa fa-user mx-1"></i></span>
                <input type="text" className="form-control" placeholder="Username" name="name" onChange={onChange} required minLength={3} />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-addon"><i class="fa-regular fa-envelope mx-1"></i></span>
                <input type="text" className="form-control" placeholder="Email" name="email" onChange={onChange} required/>
              </div>
              <div className="input-group mb-4">
                <span className="input-group-addon"><i className="fa fa-lock mx-1"></i></span>
                <input type="password" className="form-control" placeholder="Password" name='password' onChange={onChange} minLength={5} required/>
              </div>
              <div className="row">
                <div className="col-6">
                  <button type="button" className="btn btn-primary px-4 mx-3" onClick={handlesubmit}>Register</button>
                </div>
                <div className="col-6 text-right">
                  <button type="button" className="btn btn-link px-0">Forgot password?</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card text-white bg-primary py-5 d-md-down-none" style={{"width":"30%"}}>
            <div className="card-body text-center">
              <div>
                <h2>Sign up</h2>
                <p>Please create an account if you are the first time visiter on iNotebook, if you already have an account plese login instead of Signup.</p>
                <button type="button" className="btn btn-primary active mt-3">Register Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>)
}

export default SignUP;