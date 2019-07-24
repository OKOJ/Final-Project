import React, { Component } from 'react';
import Maps from "../components/Map";
import API from "../utils/API";
import Navbar from '../components/Navbar';
import Geocode from "react-geocode"
import withAuth from './../components/withAuth';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer/footer'
// import Modal from './../components/Modal/Modal';

 
// Google Maps Geocoding API key
Geocode
.setApiKey("AIzaSyB3ov2LRNVa3iSGa0M1JrptzYYeXir3xH8");
 
// Enable or disable logs
Geocode.enableDebug();


class MarketPlace extends Component {

    // when the state updates, locations will update with the content we pass it
    state = {
        locations: []
    }

    // The componentDidMount() method runs after the 
    // component output has been rendered to the DOM.
    componentDidMount() {

        // calling the API.getAll method so we can get all
        // of our items out of the DB that have an address.
        API.getAll().then(res => {
            console.log(res.data)
            const userMarkers = res.data;
            const locations = [];
            const requests = [];

            // .forEach will get each item out of the array
            userMarkers.forEach((user) => {

                // Geocode will get us a lat and lng from the address that we pass it.
                // We then push the lat, lng to requests array
                requests.push(Geocode.fromAddress(user.address).then(response => {
                        const { lat, lng } = response.results[0].geometry.location;
                        locations.push({lat, lng, user});
                    },
                    // if error, console log it so we can see
                    error => {
                      console.error(error);
                    }
                  ));
            })
            // Promise.all will update our state once we get back *ALL*
            // of our lat, lng back from our API.
            Promise.all(requests).then(() => this.setState({ locations }))
        });
        
    };
    
    // constructor() {
    //     super();

    //     this.state = {
    //         isShowing: false
    //     }
    // }

    // openModalHandler = () => {
    //     this.setState({
    //         isShowing: true
    //     });
    // }

    // closeModalHandler = () => {
    //     this.setState({
    //         isShowing: false
    //     });
    // }
    
    // render and return the content and pass in props so this can
    // be used on our Maps component.
    render() {
        return(
            <>
            <Wrapper>
            <Navbar />
                <Maps locations={this.state.locations} />
                {/* { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                <button className="open-modal-btn" onClick={this.openModalHandler}>Search</button> */}

                {/* <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                       
            <form>
            <input value={this.state.product} name='product' onChange={this.inputChange} type='text' placeholder='Product Name'/>

           
            <button onClick={this.onSubmit}>
            submit
            </button>
            </form>
                </Modal> */}
            </Wrapper>
            <Footer />
            </>
        )
    }
    
}


// export default MarketPlace;
export default withAuth(MarketPlace);

