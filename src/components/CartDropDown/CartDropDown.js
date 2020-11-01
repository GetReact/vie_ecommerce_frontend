import React from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './CartDropDown.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsCount } from '../../redux/cart/cart-selectors';
import CartItem from '../CartItem/CartItem';


const CartDropDown = ({ cartItems, cartLength, history }) => {
    return (
        <div className='cart-dropdown'>
            <h6 className='dropdown-title'>CART SUMMARY</h6>
            <div className='cart-items'>
                { 
                    cartItems.length > 0 
                    ? (
                        cartItems.map(item => 
                            <CartItem key={item.id} item={item} />
                        )
                    )
                    : ""
                }
            </div>
            <Button
                onClick={ () => {history.push('/cart')} } 
                variant='outline-dark'
                size="sm">
                    VIEW CART ({cartLength})
            </Button>
        </div>
    )
};

const mapStatetoProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartLength: selectCartItemsCount,
});

export default withRouter(connect(mapStatetoProps)(CartDropDown));