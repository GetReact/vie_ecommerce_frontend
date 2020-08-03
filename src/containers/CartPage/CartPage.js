import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './CartPage.css';

const CartPage = (props) => {
    const [empty, setEmpty] = useState(true);
    const history = useHistory();

    const handleCheckout = () => {
        history.push('/checkout');
    }

    return (
        <div className="cart-page">
            <Row>
                {empty?(
                    <h1>
                        YOUR CART IS EMPTY
                    </h1>
                ):(
                    <div>
                        NOTHING
                    </div>
                )}
            </Row>
            <Row>
                <LinkContainer to="/shop">
                    <Button variant="outline-info">
                        Continue Shopping
                    </Button>
                </LinkContainer>
                <Button 
                    variant="outline-dark" 
                    disabled={empty}
                    onClick={!empty ? handleCheckout : null}>
                    Checkout Now
                </Button>
            </Row>
        </div>
    )
}

export default CartPage;