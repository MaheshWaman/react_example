import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Route, Link, BrowserRouter } from 'react-router-dom'
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import { useHistory } from "react-router-dom";
function App() {
  let history = useHistory();
  var userName=localStorage.getItem('Name');

  const logout=()=>{
    localStorage.clear();
    history.push('/')
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <nav className="navbar navbar-expand-lg">
  <a className="navbar-brand" href="/"><img src={logo} className="App-logo" alt="logo" />React Tutorial</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" ><Link to="/Home"> Home </Link> <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/">JSX</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Basic Concepts
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/">React Method and Fragment</a>
          <a className="dropdown-item" href="/">React Components</a>
          <a className="dropdown-item" href="/">State</a>
          <a className="dropdown-item" href="/">Event Handling</a>
          <a className="dropdown-item" href="/">React List</a>
          <a className="dropdown-item" href="/">React Keys</a>
          <a className="dropdown-item" href="/">Style Componet</a>
          {/* <a class="dropdown-item" href="/">Event Handling</a> */}
          {/* <a class="dropdown-item" href="/">Event Handling</a> */}

          {/* <a class="dropdown-item" href="/">Event Handling</a> */}


        </div>
      </li>
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="mainConceptMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Main Concepts
        </a>
        <div className="dropdown-menu" aria-labelledby="mainConceptMenuLink">
          <a className="dropdown-item" href="/">LifeCycle Method</a>
          <a className="dropdown-item" href="/">React Hook</a>
          {/* <a class="dropdown-item" href="/">Something else here</a> */}
        </div>
      </li>
      <li className="nav-item dropdown paddingmenu">
        <a className="nav-link dropdown-toggle" href="" id="userMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {userName}
        </a>
        <div className="dropdown-menu marginsubmenu" aria-labelledby="userMenuLink">
        <a className="dropdown-item" href="" onClick ={logout} >Logout</a>
          {/* <a className="dropdown-item" href="" onClick ={(e)=> history.push('/')} >Logout</a> */}
          
        </div>
      </li>
    </ul>
    
  </div>
</nav>
</header>
    </div>
    );
}

export default App;
