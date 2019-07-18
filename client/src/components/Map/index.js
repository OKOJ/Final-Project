import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const Marker = ({lat, lng, text}) => {

  return <div>
<h2>*</h2>
  </div>;
// add what we want custom (will show up as the marker)
}

class Maps extends Component {
  static defaultProps = {
    
    center: {
      lat: 40.7608,
      lng: -111.8910
    },
    zoom: 9
  };


 
  render() {
    // props from our marketplace to
    const { locations } = this.props;
    
    return (
        // <div>
            <div style={{ height: '800px', width: '80%', padding:'20px', marginTop:'200px' }}>
                <GoogleMapReact  
                    bootstrapURLKeys={{ key: "AIzaSyB3ov2LRNVa3iSGa0M1JrptzYYeXir3xH8" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom} 
                    >
                  
                    {locations && locations.map((location, index) => {
                      // change index from default to unique id
                        console.log(location);
                        return (
                          <Marker
                            key={index}
                            lat={location.lat}
                            lng={location.lng}
                            text="My Marker"
                          />
                        )
                    })}
                </GoogleMapReact>
            </div>
        // {/* </div> */}
    );
  }
}
 
export default Maps;