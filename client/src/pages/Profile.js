import React, { Component } from 'react';
// import axios from 'axios';
import withAuth from './../components/withAuth';
import API from './../utils/API';
// import { Link } from 'react-router-dom';
import './Profile.css';
import Navbar from '../components/Navbar';
import ImageUpload from '../components/ImageUpload';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer/footer'

const bucketName = 'gs://makro-market.appspot.com';


class Profile extends Component {
  constructor(props) {
    // console.log(props)
    console.log(props.match.path)
    // console.log(props.location)
    super(props);
    this.state = {
      path:this.props.match.path,
      username: "",
        email: "",
        product: '',
        price: '',
        quantity: '',
        description: '',
        image: ''
    };
};

            
  handleChange = event => {
    //console.log('event.target: ', event.target)
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleImageUrl = image => {
    this.setState({
      image
    })
  }

  handleInit = boolean => {
    this.setState({
      firebaseInit: boolean
    })
  }

  handleClearForm = event => {
    //console.log(this)
    this.setState({ 
        product: '',
        price: '',
        quantity: '',
        description: '',
        image: ''
    })
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    //this.input = React.createRef();
}

  handleFormSubmit = event => {
    event.preventDefault();
    API.postProduct(this.props.user.id, this.state.product, this.state.price, this.state.quantity, this.state.image, this.state.description)
    .then( res => {
     // console.log(res.data);
      this.handleClearForm();
    })
    .catch(err => alert(err));
  };

  componentWillMount() {
   
    if (this.props.user.id) {
      this.props.history.replace('/profile');
    }
    API.getUser(this.props.user.id).then(res => {
      
      console.log(res.data)
      this.setState({
        path:res.data,
        username: res.data.username,
        email: res.data.email
      })
    });
  };

  goToMarketStand = () => {
    this.props.history.replace(`/marketstand/${this.props}`);
  };
  goToMarketplace = () => {
    this.props.history.replace('/marketplace');
  };

  render() {
    console.log("changed");
    return (
      <>
    <Wrapper>
    <Navbar/>
    <div className="containerProfile">
        <h2>Hello {this.state.username.toUpperCase()}!</h2>
        <h2>What would you like to put on a market today.</h2>
      <div className="row">
      {/* <div> */}
      <form id="productPost" onSubmit={this.handleFormSubmit}>
          <div className="form-group" >
            <label htmlFor="product">Product:</label>
            <input className="form-control"
                  placeholder="Product name"
                   name="product"
                   type="text"
                   value={this.state.product}
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price :</label>
            <input className="form-control"
                   placeholder="$ 00.00 "
                   name="price"
                   type="text"
                   value={this.state.price}
                   onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input className="form-control"
                   placeholder="Quantity"
                   name="quantity"
                   type="text"
                   value={this.state.quantity}
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input className="form-control"
                   placeholder="Short description of your product...  "
                   name="description"
                   type="text"
                   value={this.state.description}
                   onChange={this.handleChange}/>
          </div>
          <ImageUpload handleInit={this.handleInit} handleImageUrl={this.handleImageUrl} firebaseKey={this.props.user.firebaseKey} storageBucket={bucketName} firebaseInit={this.state.firebaseInit}/>
            <button type="submit" className="btn btn-success" onClick={this.handleFormSubmit} >Submit</button>
            </form>

         <div className="productImage">
              <img src={this.state.image} alt='' width="350px" height="350px" />
         </div> 
      </div>
      
        <div>
          <button type="button" className="btn btn-outline-warning" onClick={this.goToMarketplace}>Go to Marketplace</button>
          <button type="button" className="btn btn-warning" onClick={this.goToMarketStand}>Go to Your Market Stand</button>
        </div>
     </div>
     </Wrapper>
     <Footer />
     </>
    )
  }
}

export default withAuth(Profile);