import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Navbar from "../components/Navbar";
 import withAuth from './../components/withAuth';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
//import ProductCard from './../components/ProductCard';
import API from './../utils/API';
class OkMarketStand extends Component {

    state = {
        username: "",
        email: "",
        products: []
    };

    componentDidMount() {
        //console.log(this.props)
        API.getUserProducts(this.props.user.id).then(res => {
            //console.log(res)
            //console.log(res.data.products)
            //console.log(res.data.email)
            this.setState({
                username: res.data.username,
                email: res.data.email,
                products: res.data.products
            })
        });

        // get for the db all the product // update the state array
    }

    render() {
        return (
            <div>
                <h1>Marketstand</h1>
                {/* map this.productarrray(product ) */}
                {this.state.products.map(product => {
                               // console.log(product);
                    return(
                        
                      <div className="container">
                           key={product._id}
                       <h1> Name:   {product._id}</h1> 
                       <h5>Product:  {product.products}</h5>
                       <h5>Price: {product.price}</h5>
                       <img src={product.image} alt="item"></img>

                         
</div>
                    )
                })}
                {/* // <ProductCard */}
                
                {/* //     title={"product.title"}
                //     text={"product.description"}
                // /> */}
            


<Link to="/profile">Go to Profile</Link>
</div>

        )
    }
}


export default withAuth(OkMarketStand);


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