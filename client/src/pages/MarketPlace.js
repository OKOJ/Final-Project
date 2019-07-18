import React, { Component } from 'react';
import Maps from "../components/Map";
import API from "../utils/API";
import withAuth from './../components/withAuth';

import Geocode from "react-geocode"
 
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyB3ov2LRNVa3iSGa0M1JrptzYYeXir3xH8");
 
// Enable or disable logs. Its optional.
Geocode.enableDebug();



class MarketPlace extends Component {

    state = {
        locations: []
    }


    handleChange = event => { 
        // work in here
    } 

    componentDidMount() {

        API.getAll(this.props.user.id).then(res => {
            const userMarkers = res.data;
        
            const locations = [];
            const requests = [];
            userMarkers.forEach(({address}) => {

                // give it address and get back the lon and lat
                requests.push(Geocode.fromAddress(address).then(response => {
                        const { lat, lng } = response.results[0].geometry.location;
                        locations.push({lat, lng});
                    },
                    error => {
                      console.error(error);
                    }
                  ));
            })

            Promise.all(requests).then(() => this.setState({ locations }))
        });
    }
    
    
    
    
    // get the response back, map over it, display these results ON the map w/ pins
    render() {
        return(
            <>
                <Maps locations={this.state.locations}/>
            </>
        )
    }
}


export default withAuth(MarketPlace);

// export default MarketPlace;
