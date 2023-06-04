import React from 'react';
import logo from './logo.svg';
import './App.css';
import AcceptButton from './components/AcceptButton';
import RejectButton from './components/RejectButton';

function App() {
  return <>
    <div className="App">
      <header className="App-header">
        <AcceptButton></AcceptButton>
        <RejectButton></RejectButton>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload!
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
  </>
}

export default App;
