import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from "../components/Navbar";
// import withAuth from './../components/withAuth';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import ProductCard from './../components/ProductCard';
class MarketStand extends Component {

    state = {
        username: "",
        email: "",
        // productaray=[]
    };

    componentDidMount() {
        // API.getUser(this.props.user.id).then(res => {
        //     this.setState({
        //         username: res.data.username,
        //         email: res.data.email
        //     })
        // });

        // get for the db all the product // update the state array
    }

    render() {
        return (
            <div>
                map this.productarrray(product )
                <ProductCard
                    title={"produt.title"}
                    text={"product.description"}
                />
            </div>





        )
    }
}


export default MarketStand;


// example for how to render 
// render() {
//     return (
//         <div>
//             map this.productarrray(product )
//                 <ProductCard
//                 title={produt.title}
//                 text={product.description}
//             />
//         </div>