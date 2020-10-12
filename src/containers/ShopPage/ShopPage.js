import React, { Component } from 'react';
import { Row, Col, Pagination, InputGroup, FormControl, Button } from 'react-bootstrap';
import SideBar from '../../components/SideBar/SideBar';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import "./ShopPage.css";
import SHOP_DATA from './ShopData';

class ShopPage extends Component {


    state = {
        shoesCollection: SHOP_DATA,
    }

    render() {
        return (
            <Row className="productpage">
                <Col lg={4} md={12}>
                    <div className="sidebar">
                        <SideBar/>
                    </div>
                </Col>
                <Col lg={8} md={12} className="products">
                    <Row>
                        <InputGroup className="search-bar">
                            <FormControl
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Row>
                    <Row className="product-grid">
                        <ProductGrid shoesCollection = { this.state.shoesCollection }/>
                    </Row>
                </Col>
            </Row>
        );
    }
};

export default ShopPage;
