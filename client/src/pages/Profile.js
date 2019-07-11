import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';
import Vendor from "../components/Vendor";
class Profile extends Component {

  state = {
    username: "",
    email: ""
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      })
    });
  }

  render() {
    return (
      <div className="container Profile">
        <h1>Hello {this.state.username}!</h1>
        <h1>What would you like to put on a market today.</h1>
        <p>Username: {this.state.username}</p>
        <p>Email: {this.state.email}</p>
        <Vendor
        />
        <Link to="/">Go home</Link>
      </div>
    )
  }
}

export default withAuth(Profile);