import React, { useState, useContext } from 'react'
import Notecontext from './Notecontext';
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../Navbar';

const Login = (props) => {
  const [user, setUser] = useState({ email: "", password: "" })
  const navigate = useNavigate();
  const a = useContext(Notecontext);
  const host = "https://sumitportfolio-5yqc.onrender.com"

  const login = async (user) => {
    const responce = await fetch(`${host}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: user.email, password: user.password })
    })
    const json = await responce.json();
    if (json.success) {
      localStorage.setItem('auth-token',json.jwtData)
      navigate('/notebook')
      props.showAlert("login successfully",'success')
    }
    else {
    props.showAlert("Email and password is incorrect",'danger')
    }

  }
  const handlesubmit = async (e) => {
    e.preventDefault()
    login(user)
  }
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  return (
    <>
    <Navbar/>
    <div className="container my-3"><h3> Login to continue using iNOTEBook</h3></div>
      <form style={{ marginTop: "20px" }} className="container" onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name='password' className="form-control" id="exampleInputPassword1" onChange={onChange} />
        </div>

        <button type="submit" className="btn btn-success">Submit</button>
        <span className='mx-5'>
           Don't have account <span><Link to="/signup">Create Account.</Link></span></span>
      </form>
    

    </>
  )
}
export default Login;
