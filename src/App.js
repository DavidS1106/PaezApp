import React from 'react';
import AppRouter from './components/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import IsConnectedProvider from './components/context/IsConnectedProvider';

function App() {
  return (     
      <AppRouter/>
  );
}

export default App;
