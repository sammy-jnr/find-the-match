import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GeneralProvider } from './context/MainContext'
import { DataProvider } from './context/StorageContext'
import { AuthProvider } from './context/AuthenticationContext'

ReactDOM.render(
  <GeneralProvider>
    <DataProvider>
      <AuthProvider>
      <App />
      </AuthProvider>
    </DataProvider>
  </GeneralProvider>
  ,
  document.getElementById('root')
);
