import React, { useState } from 'react';
import { Row, Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import ProductCell from '../../components/CartPageCells/ProductCell/ProductCell';
import SellerCell from '../../components/CartPageCells/SellerCell/SellerCell';
import QuantityCell from '../../components/CartPageCells/QuantityCell/QuantityCell';
import PriceCell from '../../components/CartPageCells/PriceCell/PriceCell';
import './CartPage.css';

const CartPage = () => {
    const [empty, setEmpty] = useState(false);
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
                                    <tr>
                                        <td>1</td>
                                        <ProductCell
                                            img_src="assets/images/shoes-img/shoes1.jpg"
                                            name="Product Name"
                                            description="This is the description of this shoes"
                                            id="ABCD1234"/>
                                        <SellerCell 
                                            name="Seller Name"
                                            phone="(+84)1234567890"
                                            email="sample123@gmail.com"/>
                                        <QuantityCell quantity="3"/>
                                        <PriceCell price={999}/>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <ProductCell
                                            img_src="assets/images/shoes-img/shoes2.jpg"
                                            name="Product Name"
                                            description="This is the description of this shoes"
                                            id="ABCD1234"/>
                                        <SellerCell 
                                            name="Seller Name"
                                            phone="(+84)1234567890"
                                            email="sample123@gmail.com"/>
                                        <QuantityCell quantity="3"/>
                                        <PriceCell price={999}/>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                        <Row>
                            <h3>Total: ${(999*3).toFixed(2)}</h3>
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
                    disabled={empty}
                    onClick={!empty ? handleCheckout : null}>
                    Checkout Now
                </Button>
            </Row>
        </div>
    )
}

export default CartPage;