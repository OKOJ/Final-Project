import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './../components/withAuth';
import ProductCard from './../components/ProductCard';
import API from './../utils/API';


class MarketStand extends Component {

    state = {
        username: "",
        email: "",
        products: []
    };

    componentDidMount() {
        console.log(this.props)
        API.getUserProducts(this.props.user.id).then(res => {
            console.log(res)
            console.log(res.data.products)
            console.log(res.data.email)
            this.setState({
                username: res.data.username,
                email: res.data.email,
                products: res.data.products
            })
        }); 
    }

// get from the db all the product // update the state array

    render() {
        return (
            <div>

                {this.state.products.map(product => {

                    return (
                        <ProductCard 
                            key={product._id}
                            product={product}
                        /> 
                    )
                }
                )}

                
            
               <div>
                    <Link to="/profile">Go to Profile</Link>
               </div>
            </div>
        )
    }
}


export default withAuth(MarketStand);