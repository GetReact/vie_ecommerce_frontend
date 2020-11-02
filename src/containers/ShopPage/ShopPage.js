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

    const SortBar = (
        <div>
            <label htmlFor='sort' style={{paddingRight : '0.5rem'}}>Sort by price:</label>{' '}
            <select id='sort'>
                <option value='high to low'>High to low</option>
                <option value='low to high'>Low to high</option>
            </select>
        </div>
    );

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
                            <Row className='sort-bar'>
                                {SortBar}
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
                                <span className='sort-bar-small'>
                                    {SortBar}
                                </span>
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
