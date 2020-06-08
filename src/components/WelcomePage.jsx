import React from 'react';
import logoAccueil from '../imgs/noir-blanc.jpg';
import './App.css';

function WelcomePage() {
  return (
    <div className="WelcomePage">
      <header className="WelcomePage-header">
        <img src={logoAccueil} /*className="App-logo"*/ alt="logo" />
      </header>
    </div>
  );
}

export default WelcomePage;