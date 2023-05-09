
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import DailyNews from './News/News'
// import Alarm from './alarm.js'
import Myapp from './FirstApp';
// import App from './App';

import Alert from './Alert.js'
import Weather from './weather/weather.js';

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
    <Provider store={store}>
      <Alert alert={alert} />
      <Myapp showAlert={showAlert} />
      {/* <Alarm/>   */}
      {/* <DailyNews />  */}
      {/* <App/> */}
      {/* < Weather/> */}

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
