import React from 'react';
import Card from '../Card/Card';
import { Row, Col } from 'react-bootstrap';
import './ProductGrid.css';

const Grid = (props) => (
    <div className="grid">
        <Row>
            <Col lg={3} md={4} sm={6}><Card img="assets/images/shoes-img/shoes1.jpg"/></Col>
            <Col lg={3} md={4} sm={6}><Card img="assets/images/shoes-img/shoes2.jpg"/></Col>
            <Col lg={3} md={4} sm={6}><Card img="assets/images/shoes-img/shoes3.jpg"/></Col>
            <Col lg={3} md={4} sm={6}><Card img="assets/images/shoes-img/shoes4.jpg"/></Col>
            <Col lg={3} md={4} sm={6}><Card img="assets/images/shoes-img/shoes1.jpg"/></Col>
            <Col lg={3} md={4} sm={6}><Card img="assets/images/shoes-img/shoes2.jpg"/></Col>
            <Col lg={3} md={4} sm={6}><Card img="assets/images/shoes-img/shoes3.jpg"/></Col>
            <Col lg={3} md={4} sm={6}><Card img="assets/images/shoes-img/shoes4.jpg"/></Col>
            <Col lg={3} md={4} sm={6}><Card img="assets/images/shoes-img/shoes1.jpg"/></Col>
            <Col lg={3} md={4} sm={6}><Card img="assets/images/shoes-img/shoes2.jpg"/></Col>
            <Col lg={3} md={4} sm={6}><Card img="assets/images/shoes-img/shoes3.jpg"/></Col>
            <Col lg={3} md={4} sm={6}><Card img="assets/images/shoes-img/shoes4.jpg"/></Col>
        </Row>
    </div>
);

export default Grid;
