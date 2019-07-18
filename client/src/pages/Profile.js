import React, { Component } from 'react';
import axios from 'axios';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';
// import ReactFileReader from 'react-file-reader';
import './Profile.css'



class Profile extends Component {


  state = {
    username: "",
    email: ""
  };

  //handleFiles = (files) => {
    // if(files.fileList[0].size > 100000){
    //   alert("Please upload image smaller than 100kb ")
    //   return false;
    // }
   // this.setState({
  //  image: files.base64[0]
   // });
  //}

  handleUpload = (ev) => {
    let file = this.uploadInput.files[0];
    // Split the filename to get the name and type
    let fileParts = this.uploadInput.files[0].name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    console.log("Preparing the upload");
    API.sign(fileName, fileType).then(response => {
      console.log("yo: ", response)
      var returnData = response.data.data.returnData;
      var signedRequest = returnData.signedRequest;      
      var url = returnData.url;
      this.setState({url: url})
      console.log("Recieved a signed request " + signedRequest);

      delete axios.defaults.headers.common["Authorization"]
            
      axios({
        method: 'PUT',
        url: signedRequest,
        body: file,
        headers: {
          'Content-Type': fileType,
          'x-amz-acl': 'public-read'
        }
      }).then(result => {
        console.log('result: ', result);
        console.log("Response from s3")
        this.setState({success: true});
      })
      .catch(error => {
        console.log("ERROR " + JSON.stringify(error));
      })
    })
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };


  handleClearForm = event => {
    console.log(this)
    //event.preventDefault();
    this.setState({ 
      value: ""
        // product: '',
        // price: '',
        // quantity: '',
        // description: ''
    })
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    //this.input = React.createRef();
}

  handleFormSubmit = event => {
    event.preventDefault();
    API.postProduct(this.props.user.id, this.state.product, this.state.price, this.state.quantity, this.state.fileName, this.state.fileType, this.state.description)
    .then( res => {
      console.log(res.data);
      
      this.handleClearForm();
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
        <div className="row">
        <div id="vendors-form  m-4">
          <div className="form-group" >
            <label htmlFor="product">Product:</label>
            <input className="form-control"
                   placeholder="Product name"
                   name="product"
                   type="text"
                   value={this.state.value}
                   id="product"
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price :</label>
            <input className="form-control"
                   placeholder="$ 00.00 "
                   name="price"
                   type="text"
                   value={this.state.value}
                   id="price"
                   onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input className="form-control"
                   placeholder="Quantity"
                   name="quantity"
                   type="text"
                   value={this.state.value}
                   id="quantity"
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input className="form-control"
                   placeholder="Short description of your product...  "
                   name="description"
                   type="text"
                   value={this.state.value}
                   id="description"
                   onChange={this.handleChange}/>
          </div>

         
          <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit} >Submit</button>


          </div>
          <div className="form-group m-4">
          {/* <ReactFileReader fileTypes={[".png, .jpg"]}
                           base64={true} 
                           multipleFiles={true} 
                           handleFiles={this.handleFiles}>
            <button className='btn btn-primary'>Upload Image</button>
          </ReactFileReader> */}
          <input onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file"/>
          <br/>
          <button onClick={this.handleUpload}>UPLOAD</button>
 
         
          </div>
        
        </div>
      
        <br></br>
        <br></br>
        
        <div>
        <Link to="/">Go home</Link>
        <br></br>
        <Link to="/marketstand">Go to Your Marketstand</Link>
        </div>
     
     <div>
        <img src={this.state.image} alt="" />
     </div>
     </div>
    )
  }
}

export default withAuth(Profile);