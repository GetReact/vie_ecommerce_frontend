import React from 'react';
import Card from '../Card/Card';
import { Row, Col, Pagination, InputGroup, FormControl, Button } from 'react-bootstrap';
import img1 from '../../img/shoes1.jpg'
import img2 from '../../img/shoes2.jpg'
import img3 from '../../img/shoes3.jpg'
import img4 from '../../img/shoes4.jpg'
import './ProductGrid.css';

const Grid = (props) => (
    <div className="grid">
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
        <Row>
            <Col lg={3} md={4} sm={6}><Card img={img1}/></Col>
            <Col lg={3} md={4} sm={6}><Card img={img2}/></Col>
            <Col lg={3} md={4} sm={6}><Card img={img3}/></Col>
            <Col lg={3} md={4} sm={6}><Card img={img4}/></Col>
            <Col lg={3} md={4} sm={6}><Card img={img1}/></Col>
            <Col lg={3} md={4} sm={6}><Card img={img2}/></Col>
            <Col lg={3} md={4} sm={6}><Card img={img3}/></Col>
            <Col lg={3} md={4} sm={6}><Card img={img4}/></Col>
            <Col lg={3} md={4} sm={6}><Card img={img1}/></Col>
            <Col lg={3} md={4} sm={6}><Card img={img2}/></Col>
            <Col lg={3} md={4} sm={6}><Card img={img3}/></Col>
            <Col lg={3} md={4} sm={6}><Card img={img4}/></Col>
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
    </div>
);

export default Grid;