import React from 'react';
import { Row, Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import ProductCell from '../../components/CartPageCells/ProductCell/ProductCell';
import SellerCell from '../../components/CartPageCells/SellerCell/SellerCell';
import QuantityCell from '../../components/CartPageCells/QuantityCell/QuantityCell';
import PriceCell from '../../components/CartPageCells/PriceCell/PriceCell';
import './CartPage.css';
import { connect } from 'react-redux';

const CartPage = ({ cartItems }) => {
    const history = useHistory();

    const handleCheckout = () => {
        history.push('/checkout');
    }

    let totalPrice = 0;
    cartItems.map(item => totalPrice += (item.price * item.quantity));

    return (
        <div className="cart-page">
            <Row>
                {cartItems.length === 0?(
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
                                                    <td>{index}</td>
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
                <Button 
                    variant="outline-dark" 
                    disabled={cartItems.length === 0}
                    onClick={!cartItems.length === 0 ? handleCheckout : null}>
                    Checkout Now
                </Button>
            </Row>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems,
});

export default connect(mapStateToProps)(CartPage);