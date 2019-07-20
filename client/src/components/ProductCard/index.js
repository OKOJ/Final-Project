
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


    constructor(props) {
        super(props);
    };

    deleteProduct = event => {
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
                <Card style={{ width: '18rem', backgroundColor: 'lightblue' }}>

                    <Card.Img variant="top" src={this.props.product.image} />

                    <Card.Body>

                        <Card.Title>
                            {this.props.product.products}
                        </Card.Title>

                        <Card.Text>
                            Price: $ {this.props.product.price}
                            Quantity: {this.props.product.quantity}
                        </Card.Text>
                        <Button
                            onClick={() => this.deleteProduct(this.props.id)}
                            variant="warning">Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ProductCard;
