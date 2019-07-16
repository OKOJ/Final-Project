import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../AuthService';
import "./style.css";

class Navbar extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }

    showNavigation = () => {
        if (this.Auth.loggedIn()) {
            return (
                <ul style={{backgroundColor: 'lightgreen' }} className="navbar-nav" style={{backgroundColor: 'lightgreen' }}>
                    <li className="nav-item"style={{backgroundColor: 'lightgreen' }}>
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                        {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                        <a className="nav-link" href="/" onClick={() => this.Auth.logout()}>Logout</a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/marketplace">Marketplace</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Create Account</Link>
                    </li>
                </ul>
            );
        }
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'lightgreen' }}>
                <div className="container">
            
                <div className="logo">
                    <Link className="navbar-brand" to="/">Makro-Marker</Link>
                    <div className="moto">from our garden to Your table</div>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        {this.showNavigation()}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;