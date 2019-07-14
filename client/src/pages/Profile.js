import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';
//import Vendor from "../components/Vendor";
import ReactFileReader from 'react-file-reader';



class Profile extends Component {

  state = {
    username: "",
    email: ""
  };

  handleFiles = (files) => {
    this.setState({
      image: files.base64[0]
    });
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.postProduct(this.props.user.id, this.state.product, this.state.price, this.state.quantity, this.state.image, this.state.contact)
    .then( res => {
      console.log(res.data);
      //document.getElementById("vendors-form").reset();
    })
    .catch(err => alert(err));
  };

  componentDidMount() {
    console.log(this.props)
    
    API.getUser(this.props.user.id).then(res => {
      console.log(res.data)
      this.setState({
        
        username: res.data.username,
        email: res.data.email
      })
    });
  }

  render() {
    return (
      <div className="container Profile">
        <h1>Hello {this.state.username.toUpperCase()}!</h1>
        <h1>What would you like to put on a market today.</h1>
        {/* <p>Username: {this.state.username}</p>
        <p>Email: {this.state.email}</p> */}
        {/* <Vendor /> */}
        <div id="vendors-form">
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
                   placeholder="$ 00.00 "
                   name="price"
                   type="text"
                   id="price"
                   onChange={this.handleChange} />
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

          <div className="form-group ">
  
 
          <ReactFileReader fileTypes={[".png, .jpg"]} base64={true} multipleFiles={true} handleFiles={this.handleFiles}>
  <button className='btn'>Upload</button>
</ReactFileReader>

<img src={this.state.image} alt="pre"/>
            {/* <label htmlFor="image">Image:</label>
            <input className="form-control"
                   placeholder="Image goes here..."
                   name="image"
                   type="file"
                   id="image"
                   onChange={this.handleChange}/> */}
          </div>

          {/* <div className="form-group">
            <label htmlFor="image">Image:</label>
            <div className="custom-file">
            <input className="custom-file-input"
                   placeholder="Image goes here..."
                  //  aria-describedby="inputGroupFileAddon04"
                   name="image"
                   type="file"
                   id="image"
                   onChange={this.handleChange}/>
            <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
            </div>
          </div> */}




          {/* <div className="form-group">
            <label htmlFor="phone">Contact number:</label>
            <input className="form-control"
                   placeholder="801-123-4567"
                   name="contact"
                   type="el"
                   id="phone"
                   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                   required
                   onChange={this.handleChange}/>
           <div className="form-check">
            <input className="form-check-input" 
                  type="checkbox" 
                  value="call"
                  name="phone" 
                  id="call" 
                  onChange={this.handleChange}/>
            <label className="form-check-label" htmlFor="contact">Call</label>
            <br></br>
            <input className="form-check-input" 
                  type="checkbox" 
                  value="text" 
                  name="phone"
                  id="text"
                  onChange={this.handleChange} />
            <label className="form-check-label" htmlFor="contact">Text</label>
    
           </div>
          </div> */}

          <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
        </div>
        <br></br>
        <br></br>
        <Link to="/">Go home</Link>
        <br></br>
        <Link to="/okmarketstand">Go to Your Marketstand</Link>
      </div>
    )
  }
}

export default withAuth(Profile);