import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GeneralProvider } from './context/MainContext'

ReactDOM.render(
  <GeneralProvider>
    <App />
  </GeneralProvider>
  ,
  document.getElementById('root')
);
