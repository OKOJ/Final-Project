
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function ProductCard(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image}/>
                <Card.Body>
                    <Card.Title>{props.products}</Card.Title>
                    <Card.Text>
                        {props.price}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;
