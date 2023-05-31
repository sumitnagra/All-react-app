
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './todo list/App';
import Alarm from './alarm';

import { Provider } from 'react-redux';
import store from './Redux/store.js'
import Profile from './portfolio/portfolio';
import Pdfviewer from './portfolio/resumepdf.js';



const Hello = () => {

  return (<>

    <Provider store={store}>

      <Profile />
{/* |<Pdfviewer/> */}
      {/* <App/> */}

    </Provider>
  </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  <Hello />
</React.StrictMode>
);
