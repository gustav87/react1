import { Outlet } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavBar from '@/components/NavBar';

function App() {
  return <>
    <div className="App">
      <NavBar></NavBar>
      <div className="main">
        <Outlet />
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </div>
    </div>
  </>
}

export default App;

