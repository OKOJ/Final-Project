import React, {Component} from 'react';
import AuthService from './../components/AuthService';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper'
import Footer from '../components/Footer/footer'
import './SignupLogin.css'

class Login extends Component {
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
    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        // window.location.reload()
        const location = {
          pathname: '/profile',
        }
        this.props.history.push(location)
        // this.props.history.replace(`/profile`);
        
      })
      .catch(err => {
        alert(err.response.data.message)
      });
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
      <div className="containerLogin">
        <h2>Login</h2>
        <br></br>
        <form onSubmit={this.handleFormSubmit}>
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
          <div>
          <button type="submit" className="btn btn-success">Submit</button>
          <h2>Don't have an account?   <Link to="/signup"> Signup</Link></h2>
          </div>
        </form>        
      </div>
      </Wrapper>
      <Footer />
      </>

    );
  }
}

export default Login;