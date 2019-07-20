
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
            <div >
                <Card style={{ width: '18rem', backgroundColor: "lightblue" }}>

                    <Card.Img variant="top" src={this.props.product.image} />

                    <Card.Body>

                        <Card.Title>
                            {this.props.product.products.toUpperCase()}
                        </Card.Title>

                        <Card.Text>
                            <p>
                                Price: $ {this.props.product.price}
                            </p>
                            <p>
                                Quantity: {this.props.product.quantity}
                            </p>
                            <p>
                                Description: {this.props.product.description}
                            </p>
                        </Card.Text>
                        <Button
                            onClick={() => this.deleteProductButton(this.props.id)}
                            variant="warning" block>Pickup/Remove</Button>
                        <p>
                            <Button href="https://venmo.com/" variant="info" block>Venmo</Button>
                        </p>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ProductCard;
