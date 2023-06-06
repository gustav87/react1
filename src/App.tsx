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
      </div>
    </div>
  </>
}

export default App;

