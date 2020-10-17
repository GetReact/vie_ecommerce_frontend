import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addItem } from '../../../redux/cart/cart-action';

import './QuantityCell.css';

const QuantityCell = (props) => {
    return (
        <td className="quantity-cell">
            <Button className="minus-btn" variant="outline-dark">-</Button>
            {props.item.quantity}
            <Button 
                className="plus-btn" 
                variant="outline-dark"
                onClick={() => props.addItem(props.item)}
                >+</Button>
        </td>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item)),
});


export default connect(null, mapDispatchToProps)(QuantityCell);