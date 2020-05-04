import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/jquery/dist/jquery.min.js"
import { LoginComponent } from './login/login';
import {Route,BrowserRouter as Router} from 'react-router-dom'
import HomeComponent from './components/Home/HomeCompoent';
import RegistrationComponent from './Registration/Registration';
const routing = (
  <Router>
    <div>
      
    <Route exact path = "/" component = {LoginComponent} />
      <Route exact path ="/Home" component ={HomeComponent} />
      <Route exact path ='/Registration' component ={RegistrationComponent} />
    </div>
  </Router>
)
ReactDOM.render(
  <React.StrictMode>
    {routing}
    {/* <LoginComponent /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
