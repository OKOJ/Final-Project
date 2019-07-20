import React, { Component } from 'react';
import Maps from "../components/Map";
import API from "../utils/API";
import withAuth from './../components/withAuth';

import Geocode from "react-geocode"
 
// Google Maps Geocoding API key
Geocode.setApiKey("AIzaSyB3ov2LRNVa3iSGa0M1JrptzYYeXir3xH8");
 
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
        API.getAll(this.props.user.id).then(res => {
            const userMarkers = res.data;
        
            const locations = [];
            const requests = [];

            // .forEach will get each item out of the array
            userMarkers.forEach(({address}) => {

                // Geocode will get us a lat and lng from the address that we pass it.
                // We then push the lat, lng to requests array
                requests.push(Geocode.fromAddress(address).then(response => {
                        const { lat, lng } = response.results[0].geometry.location;
                        locations.push({lat, lng});
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
    }
    
    // render and return the content and pass in props so this can
    // be used on our Maps component.
    render() {
        return(
            <>
                <Maps locations={this.state.locations}/>
            </>
        )
    }
}


// export default MarketPlace;
export default withAuth(MarketPlace);

