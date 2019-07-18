import React, { Component } from 'react';
import './App.css';
import AuthService from './components/AuthService';
//import withAuth from './components/withAuth'; 
//import Hero from './components/Hero'
// import Maps from './components/Map'
//import Navbar from './components/Navbar'
//import withAuth from './components/withAuth'; 


const Auth = new AuthService();

class App extends Component {

  handleLogout = () => {
    Auth.logout();
    this.props.history.replace('/signup');
  };

  goToEditProfile = () => {
    this.props.history.replace('/profile');
  };
  goToMarketplace = () => {
    this.props.history.replace('/marketplace');
  }

  render() {
    //console.log(process.env.REACT_APP_SECRET_CODE);
    return (
      <div className="App">
        <div className="App-header">
          {/* <h1>Welcome to ... </h1> */}
          <br></br>
          <br></br>
          <p>Place were produce are <span>Local, Organic<br></br> and<br></br> Freshly Picked</span> for You everyday. </p>
        </div>
        <p className="App-intro">
          <button type="button" className="btn btn-success" onClick={this.goToMarketplace}>Marketplace</button>
          {/* <button type="button" className="btn btn-primary" onClick={this.goToEditProfile}>Go to Profile</button>
          <button type="button" className="btn btn-danger" onClick={this.handleLogout}>Logout</button> */}
        </p>
        {/* <Maps /> */}
      </div>
    );
  }
}

//export default withAuth(App);
export default App;