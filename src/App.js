import './App.css';
import Header from './Components/Header.js';
import SideBar from './Components/SideBar';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [ variable , setVariable] = useState("");
  const location = useLocation(); // React Hook
  const temp = location.pathname;
  console.log(temp);

  return (
    <>
      <div className="container">
      <div className="div-1">
        <Header path={temp}  variable={variable} setVariable={setVariable}/>
      </div>
      <div className="div-2">
      <div className="header-1">
        <SideBar setVariable={setVariable}/>
      </div>
      <div className="card">
        <Outlet />
      </div>
      </div>
      <div className="div-3"></div>
      </div>
    </>
  );
}

export default App;

