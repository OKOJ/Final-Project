import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import MarketPlace from './pages/MarketPlace';
import MarketStand from './pages/MarketStand';
import Team from './pages/Team'


// Here is if we have an id_token in localStorage
if(localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react application via axios
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/marketplace" component={MarketPlace} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/marketstand/:id" component={MarketStand} />
            <Route exact path="/team" component={Team} />
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
