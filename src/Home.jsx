import React from 'react'
import {
Link
} from 'react-router-dom'

const Home = () => {
    return (
        <>
        <h1>Home</h1>
            <ul>
             
                  <li>  <Link to="/">Home</Link></li>
                  <li>   <Link to="/App">App</Link></li>
                  <li>  <Link to="/FirstApp">Myapp</Link></li>
                  <li>  <Link to="/Form">Form</Link></li>
            
            </ul>
        </>
    )
}
export default Home;