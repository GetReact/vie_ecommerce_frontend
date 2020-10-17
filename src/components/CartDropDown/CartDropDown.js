import React from 'react';
import { Button } from 'react-bootstrap';
import './CartDropDown.css';

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <Button variant='outline-dark'>VISIT CART</Button>
    </div>
);

export default CartDropDown;