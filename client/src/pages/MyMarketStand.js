import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './../components/withAuth';
import ProductCard from './../components/ProductCard';
import Navbar from '../components/Navbar';
// import API from './../utils/API';
// import Button from 'react-bootstrap/Button';


class MyMarketStand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.user.username,
            email: this.props.user.email,
            products: []
        };
    };

    // reload = () => {
    //     // console.log(this.props)
    //     API.getUserProducts(this.props.user.id).then(res => {
    //         // console.log(res)
    //         // console.log(res.data.products)
    //         console.log(res.data.email)
    //         this.setState({
    //             username: res.data.username,
    //             email: res.data.email,
    //             products: res.data.products
    //         })

    //     });
    // };

    componentDidMount() {
        // console.log(this.props)
        this.reload()
    }

    // get from the db all the product // update the state array

    render() {
        return (
            <>
                <Navbar />
                <div>

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


export default withAuth(MyMarketStand);