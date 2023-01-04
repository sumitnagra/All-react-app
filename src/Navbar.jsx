import React from "react";
import { Route,BrowserRouter as Router ,Routes} from 'react-router-dom';

import Myapp from './FirstApp';
import App from './App';
import Form from './Form'
import Home from './Home';

const NavBar=()=>{

    return(
        <>
        <Router>
       <Home/>
              <Routes>
                
                  <Route  path="/App" element={<App/>}/>
                  <Route  path="/FirstApp" element={<Myapp/>}/>
                  <Route  path="/Form" element={<Form/>}/>
              </Routes>
            </Router>

        </>
    )
}
export default NavBar; 