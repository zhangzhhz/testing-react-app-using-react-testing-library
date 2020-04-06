import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import logo from './logo.svg';
import './App.css';
import TestRouter from './TestRouter';

function App() {
  return (
    <div className="App">
      <Router history={createMemoryHistory()}>
        <TestRouter/>
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
