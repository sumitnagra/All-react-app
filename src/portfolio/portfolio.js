
import './profile.css'
import Navbar from './profilenavbar';
import Project from './project'
import Profile from './profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './contact';
import Resume from './resume';
import Weather from '../weather/weather';
import Myapp from '../textUtilize/FirstApp';
import Alert from '../News/Alert'
import GroupNews from '../News/Newsinrow';
import Alarm from '../alarm/alarm'
import Advice from '../Advice/Advice'
import App from '../todo list/App';
import React, { useState } from "react";
import Home from "../Notebook/component/Home.js";
import NoteState from "../Notebook/component/context/context.js"
import AddNote from "../Notebook/component/Addnote.js";
import Login from "../Notebook/component/context/login.js";
import SignUP from "../Notebook/component/context/signup.js";
import Items from '../shopingCart/item';
import Cart from '../shopingCart/cart';
import { ShopContextprovider } from '../shopingCart/shopContex';
import Speech from '../text to speech/speech'

const CompleteProfile = () => {
  const [alert, setAlert] = useState(null)
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
  }
  setTimeout(() => {
    setAlert(null)
  }, 2000);


  return (<>
    <Router>
      <NoteState showAlert={showAlert}>
        <ShopContextprovider>
          <Navbar />
          <Alert alert={alert} />

          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/advice/*" element={<Advice />} />
            <Route path="/alarm/*" element={<Alarm />} />
            <Route path="/app/*" element={<App />} />
            <Route path="/shop/*" element={<Items />} />
            <Route path="/cart/*" element={<Cart />} />
            <Route path="/speech/*" element={<Speech />} />

            <Route path="/textUtils" element={<Myapp showAlert={showAlert} />} />

            <Route path="/home" element={<GroupNews catagory="general" />} />
            <Route path="/sports" element={<GroupNews catagory="sports" />} />
            <Route path="/technology" element={<GroupNews catagory="technology" />} />
            <Route path="/business" element={<GroupNews catagory="business" />} />
            <Route path="/entertainment" element={<GroupNews catagory="entertainment" />} />
            <Route path="/health" element={<GroupNews catagory="health" />} />
            <Route path="/science" element={<GroupNews catagory="science" />} />

            <Route exact path="/notebook" element={<Home showAlert={showAlert} />}></Route>
            <Route exact path="/addnote" element={<AddNote showAlert={showAlert} />}></Route>
            <Route exact path="/signup" element={<SignUP showAlert={showAlert} />}></Route>
            <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>

          </Routes>
        </ShopContextprovider>
      </NoteState>
    </Router>

  </>)
}

export default CompleteProfile;