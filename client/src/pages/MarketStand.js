import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './../components/withAuth';
import ProductCard from './../components/ProductCard';
import Navbar from '../components/Navbar';
import API from './../utils/API';
// import Button from 'react-bootstrap/Button';


class MarketStand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            username: this.props.user.username,
            email: this.props.user.email,
            userid: this.props.user.id,
            path: this.props.match.path,
            products: [],
        };
    };

    reload = () => {
        // console.log(this.props)
        API.getUserProducts(this.props.match.params.id).then(res => {
            // console.log(res)
            // console.log(res.data.products)
            console.log('res.data: ', res.data)
            // const path  = this.props.match.path;
            this.setState({
                userid: res.data.id,
                // link: path/res.data.id,
                username: res.data.username,
                email: res.data.email,
                products: res.data.products
            });

        });
    };

    componentDidMount() {
        this.reload()
    }

    // get from the db all the product // update the state array

    render() {
        return (
            <>
                <Navbar />
                <div>
                    <h1>Welcome to {this.state.username}'s Market Stand</h1>
                    {this.state.products.map(product => {

                        return (
                            <ProductCard
                                key={product._id}
                                id={product._id}
                                product={product}
                                reload={this.reload}
                            />
                        )
                    }
                    )}



                    <div>
                        <Link to="/profile">Go to Profile</Link>
                    </div>
                </div>
            </>
        )
    }
}


export default withAuth(MarketStand);