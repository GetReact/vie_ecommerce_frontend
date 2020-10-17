import React from 'react';
import Card from '../Card/Card';
import { Row, Col } from 'react-bootstrap';
import './ProductGrid.css';

const ProductGrid = (props) => (
    <div className="grid">
        <Row>
            {
                props.items.map((item) => (
                    <Col key={item.id} xl={4} lg={6} md={6} sm={6}><Card img={item.imageUrl} id={item.id} item={item}/></Col>
                ))
            }
        </Row>
    </div>
);

export default ProductGrid;
