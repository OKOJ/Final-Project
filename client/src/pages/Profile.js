import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';
//import Vendor from "../components/Vendor";


class Profile extends Component {

  state = {
    username: "",
    email: ""
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.postProduct(this.state.product, this.state.price, this.state.quantity, this.state.image)
    .then( res => {
      console.log(res);
      document.getElementById("vendors-form").reset();
    })
    .catch(err => alert(err));
  };

  componentDidMount() {
    console.log(this.props)
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
        {/* <p>Username: {this.state.username}</p>
        <p>Email: {this.state.email}</p> */}
        {/* <Vendor /> */}
        <form id="vendors-form" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="product">Product:</label>
            <input className="form-control"
                   placeholder="Product name"
                   name="product"
                   type="text"
                   id="product"
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price :</label>
            <input className="form-control"
                   placeholder="Price "
                   name="price"
                   type="text"
                   id="price"
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input className="form-control"
                   placeholder="Quantity"
                   name="quantity"
                   type="text"
                   id="quantity"
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input className="form-control"
                   placeholder="Image goes here..."
                   name="image"
                   type="file"
                   id="image"
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact:</label>
            <input className="form-control"
                   placeholder="Contact Info"
                   name="contact"
                   type="text"
                   id="contact"
                   onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Link to="/">Go home</Link>
      </div>
    )
  }
}

export default withAuth(Profile);