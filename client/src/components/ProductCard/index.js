
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function ProductCard(props) {
    const { product } = props;

    return (
        <div >
            <Card style={{ width: '18rem', backgroundColor: 'lightblue' }}>

                <Card.Img variant="top" src={product.image} />
                
                <Card.Body>

                    <Card.Title>
                        {product.products}
                    </Card.Title>

                    <Card.Text>
                       <p> ${product.price}</p>
                        <p> Quantity: {product.quantity}</p>
                    </Card.Text>
                    <Button variant="warning">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;
