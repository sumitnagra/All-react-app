
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import NewsMonkey from './News/News'
// import Alarm from './alarm.js'
// import Myapp from './FirstApp';
// import App from './App';
// import Form from './Form'
// import Home from './Home';
// import NavBar from './Navbar'
import Alert from './Alert.js'
import Weather from './weather/weather.js';
import Home from './Redux/home';
import { Provider } from 'react-redux';
import store from './Redux/store.js'
import Advice from './Advice/Advice';

const Hello = () => {
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
    {/* <Alert alert={alert} /> */}
    {/* <Alarm/>   */}
      {/* <NewsMonkey />  */}
    {/* <App/> */}
    {/* <Myapp showAlert={showAlert} /> */}
    {/* < Weather/> */}
    <Provider store={store}> 
    <Home/> 
  </Provider> 
{/* <Advice/>*/}
  </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  <Hello />
</React.StrictMode>
);
