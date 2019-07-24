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
            userid: this.props.user.id,
            path: this.props.match.path,
            products: [],
        };
    };

    reload = () => {
        // console.log(this.props)
        API.getUserProducts(this.props.match.params.id).then(res => {
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
                    <h2>Welcome to {this.state.username}'s Market Stand</h2>
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