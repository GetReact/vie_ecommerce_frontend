import React from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import './CartDropDown.css';

const CartDropDown = (props) => (
    <div className='cart-dropdown'>
        <h6 className='dropdown-title'>MOST RECENT ITEM</h6>
        <div className='cart-items'/>
        <Button
            onClick={ () => {props.history.push('/cart')} } 
            variant='outline-dark'
            size="sm">
                VIEW CART ({0})
        </Button>
    </div>
);

export default withRouter(CartDropDown);