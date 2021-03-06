import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AuthService from './../components/AuthService';
import API from './../utils/API';
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer/footer'
import './SignupLogin.css'

class Signup extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.replace('/');
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(this.state.username, this.state.email, this.state.password, this.state.address,this.state.contact)
      .then(res => {
        // once the user has signed up
        // send them to the login page
        this.props.history.replace('/login');
      })
      .catch(err => alert(err));
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <>
      <Wrapper>
        <Navbar />
      <div className="containerSignup">
        <h2>Signup</h2>
        <br></br>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input className="form-control"
                   placeholder="Username goes here..."
                   name="username"
                   type="text"
                   id="username"
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input className="form-control"
                   placeholder="Email goes here..."
                   name="email"
                   type="email"
                   id="email"
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input className="form-control"
                   placeholder="Password goes here..."
                   name="password"
                   type="password"
                   id="pwd"
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input className="form-control"
                   placeholder="Address goes here..."
                   name="address"
                   type="text"
                   id="address"
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact:</label>
            <input className="form-control"
                    placeholder="801-123-4567"
                    name="contact"
                    type="el"
                    id="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                    onChange={this.handleChange}/>
          </div>
          <div>
          <button type="submit" className="btn btn-success">Submit</button>
          <h2>Have an account?   <Link to="/login">Login</Link></h2>
          </div>
        </form>
         
      </div>
      </Wrapper>
      <Footer />
      </>
    );
  }
}

export default Signup;