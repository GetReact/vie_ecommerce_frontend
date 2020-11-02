import React from 'react';
import { Row, Button, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsCount} from '../../redux/cart/cart-selectors';

import ProductCell from '../../components/CartPageCells/ProductCell/ProductCell';
import SellerCell from '../../components/CartPageCells/SellerCell/SellerCell';
import QuantityCell from '../../components/CartPageCells/QuantityCell/QuantityCell';
import PriceCell from '../../components/CartPageCells/PriceCell/PriceCell';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton';
import './CartPage.css';

const CartPage = ({ cartItems, cartLength }) => {
    let totalPrice = 0;
    cartItems.map(item => totalPrice += (item.price * item.quantity));

    return (
        <div className="cart-page">
            <Row>
                {cartLength === 0?(
                    <h1>
                        YOUR CART IS EMPTY
                    </h1>
                ):(
                    <div className="cart-table">
                        <Row>
                            <h1>
                                YOUR CART
                            </h1>
                        </Row>
                        <Row>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Seller</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems.map((item, index) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{index+1}</td>
                                                    <ProductCell
                                                        img_src={item.imageUrl}
                                                        name={item.name}
                                                        description="This is the description of this shoes"
                                                        id={item.id}/>
                                                    <SellerCell 
                                                        name="Seller Name"
                                                        phone="(+84)1234567890"
                                                        email="sample123@gmail.com"/>
                                                    <QuantityCell item={item}/>
                                                    <PriceCell price={item.quantity * item.price}/>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </Table>
                        </Row>
                        <Row>
                            <h3>Total: ${totalPrice.toFixed(2)}</h3>
                        </Row>
                    </div>
                )}
            </Row>
            <Row>
                <LinkContainer to="/shop">
                    <Button variant="outline-info">
                        Continue Shopping
                    </Button>
                </LinkContainer>
                {cartLength > 0 ? <StripeCheckoutButton price={totalPrice}/> : ''}
            </Row>
            <div className="test-warning">
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/21 - CVV 123
            </div>
        </div>
    )
}

const mapStatetoProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartLength: selectCartItemsCount,
});

export default connect(mapStatetoProps)(CartPage);