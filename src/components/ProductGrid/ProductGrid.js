import React from 'react';
import Card from '../Card/Card';
import { Row, Col } from 'react-bootstrap';
import img1 from '../../img/shoes1.jpg'
import img2 from '../../img/shoes2.jpg'
import img3 from '../../img/shoes3.jpg'
import img4 from '../../img/shoes4.jpg'
import './ProductGrid.css';

const Grid = (props) => (
    <Row className="grid">
        <Col lg={3} md={4} sm={6}><Card img={img1}/></Col>
        <Col lg={3} md={4} sm={6}><Card img={img2}/></Col>
        <Col lg={3} md={4} sm={6}><Card img={img3}/></Col>
        <Col lg={3} md={4} sm={6}><Card img={img4}/></Col>
        <Col lg={3} md={4} sm={6}><Card img={img1}/></Col>
        <Col lg={3} md={4} sm={6}><Card img={img2}/></Col>
        <Col lg={3} md={4} sm={6}><Card img={img3}/></Col>
        <Col lg={3} md={4} sm={6}><Card img={img4}/></Col>
    </Row>
);

export default Grid;
