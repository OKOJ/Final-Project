import React from 'react';
import './Modal.css';
import { Table } from 'reactstrap';


const modal = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>What are you looking for today?</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                     <Table striped>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Apples</td>
            <td>13</td>
            <td>$20</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Melons</td>
            <td>5</td>
            <td>$15</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Grapes</td>
            <td>5 Bunches</td>
            <td>$7 Each</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Pineapples</td>
            <td>5</td>
            <td>$5 Each</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Apricots</td>
            <td>20</td>
            <td>$2 Each</td>
          </tr>
        </tbody>
      </Table>

                </div>
                <div className="modal-footer">
                    
                </div>
            </div>
        </div>
    )
}

export default modal;
