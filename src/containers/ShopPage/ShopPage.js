import React, { useState, useEffect } from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SideBar from '../../components/SideBar/SideBar';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import { selectShoesCollection } from '../../redux/shop/shop-selectors';
import "./ShopPage.css";

const ShopPage = (props) => {
    const [ width, setWidth ] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowSizeChange = () => {
            if (window.innerWidth !== width) setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleWindowSizeChange);
        return _ => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    });

    return (
        <div className="productpage">
            {   
                width > 992 ? (
                    <>
                        <Col lg={4} md={12}>
                            <SideBar/>
                        </Col>
                        <Col lg={8} md={12} className="products">
                            <Row className="search-bar">
                                <InputGroup>
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
                                <ProductGrid items = { props.shoesCollection }/>
                            </Row>
                        </Col>
                    </>
                )
                : (
                    <>
                        <Row>
                            <Col md={12}><SideBar/></Col>
                            <Col md={12}>
                                <ProductGrid items = { props.shoesCollection }/>
                            </Col>
                        </Row>
                    </>
                )
            }

        </div>
    );
};

const mapStatetoProps = createStructuredSelector({
    shoesCollection: selectShoesCollection,
});

export default connect(mapStatetoProps)(ShopPage);
