import React from 'react';
import { Row, Col, FormControl, InputGroup, Button } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import "./ProductPage.css";


const ProductPage = () => {
    return (
        <Row className="productpage">
            <Col lg={4}>
                <div className="sidebar">
                    <SideBar/>
                </div>
            </Col>
            <Col lg={8} className="products">
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
                <ProductGrid/>
            </Col>
        </Row>
    );
};

export default ProductPage;
