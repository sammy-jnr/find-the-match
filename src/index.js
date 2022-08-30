import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GeneralProvider } from './context/MainContext'
import { AuthProvider } from './context/AuthenticationContext'

ReactDOM.render(
  <GeneralProvider>
      <AuthProvider>
      <App />
      </AuthProvider>
  </GeneralProvider>
  ,
  document.getElementById('root')
);
