import React from 'react';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './DetailPage.css';
import ShoesSlider from './ShoesSlider/ShoesSlider';

const detailPage = (props) => {
    return (
        <Container className="detail-page">
            <LinkContainer to="/shop">
                <Button variant="outline-info">Back to shopping</Button>
            </LinkContainer>
            <Row className="detail-grid">
                <Col className="column1" lg={6}>
                    <Row>
                        <Image
                            className="main-shoes-img" 
                            alt="shoes-img" 
                            src="assets/images/shoes-img/shoes4.jpg"
                            width="70%"/>
                    </Row>
                    <Row>
                        <ShoesSlider/>
                    </Row>
                </Col>
                <Col className="column2" lg={6}>
                    <h1>Shoes Name</h1>
                    <Row className="shoes-info"><h5>Brand:</h5><h5 className="info">Adidas</h5></Row>
                    <Row className="shoes-info"><h5>Seller:</h5><h5 className="info">Seller Name</h5></Row>
                    <Row className="shoes-info"><h5>Price:</h5><h5 className="info">$ 999</h5></Row>
                    <Row className="shoes-info"><h5>Availability:</h5><h5 className="info">43</h5></Row>
                    <Row className="shoes-info"><h5>Color:</h5><h5 className="info">White</h5></Row>
                    <Row className="shoes-info"><h5>Descriptions:</h5><h5 className="info"></h5></Row>
                    <Row className="shoes-info"><h6>"This is the space where shoes owners describe their shoes in more details. It can be either your past experiences with the shoes or any issue-related information."</h6></Row>
                </Col>
            </Row>
            <LinkContainer to="/cart">
                <Button className="add-to-cart-btn" variant="outline-success">Add to cart</Button>
            </LinkContainer>
        </Container>
    );
}

export default detailPage;