import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Logo.css";



class Logo extends Component {

    goToMarketplace = () => {
        this.props.history.replace('/marketplace');
      };

    render(){
        return(
         <div id="logo">
            <Link id="navbar-brand" to="/">Makro-Market</Link>
                <div id="moto">from our garden to Your table</div>
          <a href="/marketplace"><button id="logo-btn"type="button" className="btn btn-danger" >Welcome to our Marketplace</button></a> 
         </div>
        )
    }
}

export default Logo

