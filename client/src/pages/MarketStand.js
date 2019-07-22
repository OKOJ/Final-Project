import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import ProductCard from './../components/ProductCard';
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer/footer'
import API from './../utils/API';
import './MarketStand.css'
// import Button from 'react-bootstrap/Button';


class MarketStand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.user.username,
            email: this.props.user.email,
            products: []
        };
    };

    reload = () => {
        // console.log(this.props)
        API.getUserProducts(this.props.user.id).then(res => {
            // console.log(res)
            // console.log(res.data.products)
            //console.log(res.data.email)
            this.setState({
                username: res.data.username,
                email: res.data.email,
                products: res.data.products
            })

        });
    };

    componentDidMount() {
        // console.log(this.props)
        this.reload()
    };

    goToEditProfile = () => {
        this.props.history.replace('/profile');
      };

    render() {
        return (
            <>
            <Wrapper>
                <Navbar />
                <div className="containerMarketStand">
                <div>
                <button type="button" className="btn btn-success" onClick={this.goToEditProfile}>Go to your Profile</button>
                </div>
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
                    })
                 }
                 </div>
                </div>
                
                </Wrapper>
                <Footer />
            </>
        )
    }
}


export default withAuth(MarketStand);