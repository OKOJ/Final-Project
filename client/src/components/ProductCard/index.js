
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import API from "../../utils/API";



// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element

// function ProductCard(props) {
// const { product } = props;
class ProductCard extends Component {


    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {};
    };

    deleteProductButton = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        // event.preventDefault();
        console.log(event)
        API.deleteProduct(event)
            .then(res => {
                this.setState({ product: res.data });
                this.props.reload()
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <>
                <Card style={{ width: '360px', backgroundColor: "gold", color:'black', float: 'left', margin:'10px', padding:'5px' }}>
                    <Card.Img variant="top" style={{ width: '350px',height: '350px'}} src={this.props.product.image} />
                    <Card.Body>
                        <Card.Title>
                            {this.props.product.products.toUpperCase()}
                        </Card.Title>
                        <Card.Text> Price: $ {this.props.product.price} </Card.Text>
                        <Card.Text> Quantity: {this.props.product.quantity} </Card.Text>
                        <Card.Text> Description: {this.props.product.description} </Card.Text>
                        <Button
                            onClick={() => this.deleteProductButton(this.props.id)}
                            variant="success" >Pickup/Remove</Button>
                            <a href="https://venmo.com/">< img src="https://bucknellian.net/wp-content/uploads/2017/02/Venmo-Color-900x900.png" alt="" width="60px"/></a>
                            {/* <Button href="https://venmo.com/" variant="info" >Venmo</Button> */}
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default ProductCard;
