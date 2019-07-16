import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';
//import Vendor from "../components/Vendor";
import ReactFileReader from 'react-file-reader';
import './Profile.css'



class Profile extends Component {

  state = {
    username: "",
    email: ""
  };

  handleFiles = (files) => {
    // if(files.fileList[0].size > 100000){

    //   alert("Please upload image smaller than 100kb ")
    //   return false;
    // }
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

  clearInput = () => {
    // this.setState({
    //   products: '',
    //   price: '',
    //   quantity: ''
    // })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
    API.postProduct(this.props.user.id, this.state.product, this.state.price, this.state.quantity, this.state.image, this.state.description)
    .then( res => {
      console.log(res.data);
      //this.clearInput();
      // document.getElementById("vendors-form").reset();
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
  };

  render() {
    return (
      <div className="container Profile">
        <h1>Hello {this.state.username.toUpperCase()}!</h1>
        <h1>What would you like to put on a market today.</h1>
        {/* <p>Username: {this.state.username}</p>
        <p>Email: {this.state.email}</p> */}
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
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input className="form-control"
                   placeholder="Short description of your product...  "
                   name="description"
                   type="text"
                   id="description"
                   onChange={this.handleChange}/>
          </div>

          <div className="form-group ">
          <ReactFileReader fileTypes={[".png, .jpg"]}
                           base64={true} 
                           multipleFiles={true} 
                           handleFiles={this.handleFiles}>
            <button className='btn btn-primary'>Upload Image</button>
          </ReactFileReader>
          <img src={this.state.image} alt="" style={{width: '200px',height: '250px'}} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
        </div>
        <br></br>
        <br></br>
        <Link to="/">Go home</Link>
        <br></br>
        <Link to="/marketstand">Go to Your Marketstand</Link>
      </div>
    )
  }
}

export default withAuth(Profile);