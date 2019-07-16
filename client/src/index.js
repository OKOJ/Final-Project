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
import Navbar from './components/Navbar';
import MarketPlace from './pages/MarketPlace';
import MarketStand from './pages/MarketStand';
import Footer from './components/Footer'
// import SignupLogin from './pages/SignupLogin';


// Here is if we have an id_token in localStorage
if(localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react application via axios
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
       
        <div>
           
            <Navbar />
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/marketplace" component={MarketPlace} />
            {/* <Route exact path="/signuplogin" component={SignupLogin} /> */}
            <Route  path="/marketstand" component ={MarketStand} />
            <Footer />
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
