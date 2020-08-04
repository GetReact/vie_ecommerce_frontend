import React from 'react';
import { Button } from 'react-bootstrap';
import './QuantityCell.css';

const QuantityCell = (props) => {
    return (
        <td className="quantity-cell">
            <Button className="minus-btn" variant="outline-dark">-</Button>
            {props.quantity}
            <Button className="plus-btn" variant="outline-dark">+</Button>
        </td>
    );
}

export default QuantityCell;