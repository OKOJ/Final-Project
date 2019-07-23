// require react as well as whatever else we need to bring onto the page
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Link} from 'react-router-dom';
import SearchPage from '../Search'

// "Marker" will handle what happens when the user enters in their address for the map.
// in this case, Maker will add an image on their address on the map to show where the
// user is located and it will also add an onClick event so that we can show their produts
const Marker = (props) => {
  
  // this will be what is returned and displayed on the map for each address.
  // return <div>
  //     <img id="map-pin" onClick={handleClick} src="data:image/png;base64,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" alt="google marker pin"
  //     height="20px" width="20px"/>
  // </div>
    return <Link to={`/marketstand/${props.user._id}`}><img id="map-pin" src="https://img.icons8.com/doodle/24/000000/beet.png" alt="google marker pin"
     height="20px" width="20px"/></Link> 
}

class Maps extends Component {
  static defaultProps = {
    
    // Center of where we want the map to be located in the world (SLC)
    center: {
      lat: 40.7608,
      lng: -111.8910
    },
    zoom: 9
  };

 
  render() {
    // props from our marketplace page
    const { locations } = this.props;
    
    return (
           <div style={{ height: '750px', width: '90%', marginLeft:'auto', marginRight:'auto', padding:'40px', marginTop:'120px' }}>
                    <SearchPage  />
              {/* calling the google map react npm package */}
              <GoogleMapReact  

                  // API key so we can use the google API
                  bootstrapURLKeys={{ 
                    // key: "put GEOCODE_API_KEY from .env" 
                  }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}>

                  {/* .map() over our location. in our case, each address in our Database */}
                  {locations && locations.map((location, index) => {

                      // return what we want to show on the page
                      return (
                        <Marker 

                          // key can be switched to unique id
                          key={index}
                          lat={location.lat}
                          lng={location.lng}
                          user={location.user}
                          path={location.path}
                        />
                      )
                  })}
              </GoogleMapReact>
          </div>
    );
  }
}
// export Maps to be used on our pages
export default Maps