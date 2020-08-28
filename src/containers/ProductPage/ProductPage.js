import React from 'react';
import { Row, Col, Pagination, InputGroup, FormControl, Button } from 'react-bootstrap';
import SideBar from '../../components/SideBar/SideBar';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import "./ProductPage.css";


const ProductPage = () => {
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
                    <ProductGrid/>
                </Row>
                <Row>
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Row>
            </Col>
        </Row>
    );
};

export default ProductPage;
