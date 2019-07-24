
import React, { Component } from 'react';
//  import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import Logo from './components/Logo/Logo'
import './App.css';

class App extends Component {
  render() {
  return (
    <MDBContainer  style={{
      maxWidth:'100%',
      margin:'0',
      padding:'0'

      }}>
      <MDBCarousel
        activeItem={1}
        length={6}
        showControls={false}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
        
        <MDBCarouselCaption style={{width:'-webkit-fill-available'}}>
        <Logo />
        </MDBCarouselCaption>
       
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2015/03/24/08/52/beetroot-687251__480.jpg"
                alt="First slide"
              />
               
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2017/06/28/11/51/tomato-2450370_1280.jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2015/07/17/13/44/cucumbers-849269_1280.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2017/10/26/18/39/peaches-2892013__480.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2015/05/31/12/16/eggs-791463__480.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2016/07/11/05/55/cherries-1509127__480.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}
}

export default App;

// import React, { Component } from 'react';
// import './App.css';
// import AuthService from './components/AuthService';
// // import Modal from './components/Modal/Modal';
// //import withAuth from './components/withAuth'; 
// //import Hero from './components/Hero'
// // import Maps from './components/Map'
// import Navbar from './components/Navbar'
// //import withAuth from './components/withAuth'; 


// const Auth = new AuthService();

// class App extends Component {

//   handleLogout = () => {
//     Auth.logout();
//     this.props.history.replace('/signup');
//   };

//   goToEditProfile = () => {
//     this.props.history.replace('/profile');
//   };
//   goToMarketplace = () => {
//     this.props.history.replace('/marketplace');
//   }

//   render() {
//     //console.log(process.env.REACT_APP_SECRET_CODE);
//     return (
//       <div>
//         <Navbar />
      
//       <div className="App">
//         <div className="App-header">
//           {/* <h1>Welcome to ... </h1> */}
//           <br></br>
//           <br></br>
//           <p>Place were produce are <span>Local, Organic<br></br> and<br></br> Freshly Picked</span> for You everyday. </p>
//         </div>
//         <p className="App-intro">
//           <button type="button" className="btn btn-success" onClick={this.goToMarketplace}>Marketplace</button>
//           {/* <button type="button" className="btn btn-primary" onClick={this.goToEditProfile}>Go to Profile</button>
//           <button type="button" className="btn btn-danger" onClick={this.handleLogout}>Logout</button> */}
//         </p>
//         {/* <Maps /> */}
//       </div>
//       </div>
//     );
//   }
// }

// //export default withAuth(App);
// export default App;