import React, { useState, useContext } from 'react'
import Notecontext from './Notecontext';
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import LoadingBar from 'react-top-loading-bar'


const Login = (props) => {
  const [user, setUser] = useState({ email: "", password: "" })
const [progress, setProgress] = useState(0)

  const navigate = useNavigate();
  const a = useContext(Notecontext);
  const host = "https://sumitportfolio-u9sd.onrender.com"

  const login = async (user) => {
    setProgress(40)
    const responce = await fetch(`${host}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: user.email, password: user.password })
    })
    const json = await responce.json();

    if (json.success) {
    setProgress(70)

      localStorage.setItem('auth-token',json.jwtData)
      navigate('/notebook')
      props.showAlert("login successfully",'success')
    setProgress(100)

    }
    else {
    props.showAlert("Email and password is incorrect",'danger')
    setProgress(100)
    }

  }
  const handlesubmit = async (e) => {
    setProgress(20)
    e.preventDefault()
    await login(user)

  }
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  return (
    <>
    <Navbar/>
    <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
   {/* <div className="container my-3"><h3> Login to continue using iNOTEBook</h3></div>
    {Loading?<Spinner/>:
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
} */}
<br/>
<br/>
<div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card-group mb-0">
          <div className="card p-4">
            <div className="card-body">
              <h1>Login</h1>
              <p className="text-muted">Login In to your account</p>
              <form onSubmit={handlesubmit}>
              <div className="input-group mb-3">
                <span className="input-group-addon"><i className="fa fa-user mx-2"></i></span>
                <input type="email" className="form-control" placeholder="Email" name='email' onChange={onChange}/>
              </div>
              <div className="input-group mb-4">
                <span className="input-group-addon"><i className="fa fa-lock mx-2"></i></span>
                <input type="password" className="form-control" placeholder="Password" name='password' onChange={onChange}/>
              </div>
              <div className="row">
                <div className="col-6">
                  <button type="submit" className="btn btn-primary px-4 mx-4" onClick={handlesubmit}>Login</button>
                </div>
                <div className="col-6 text-right">
                  <button type="button" className="btn btn-link px-0">Forgot password?</button>
                </div>
              </div>
              </form>
            </div>
          </div>
          <div className="card text-white bg-primary py-5 d-md-down-none" style={{"width":"44%"}}>
            <div className="card-body text-center">
              <div>
                <h2>Login</h2>
                <p>  If you already registered, you can log in into your iNotebook account. If not please register </p>
                <button type="button" className="btn btn-primary active mt-3" onClick={()=>navigate("/signup")}>Register Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    </>
  )
}
export default Login;
