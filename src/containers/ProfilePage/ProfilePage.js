import React from 'react';
import { Row, Col, Form, Button, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ProfileButton from '../../components/ProfilePageButton/ProfileButton';
import './ProfilePage.css';

const ProfilePage = (props) => {
    return (
        <div className="profile-page">
            <Row>
                <Col lg={3} className="user-info">
                    <Figure>
                        <Figure.Image
                            width={170}
                            heigh={180}   
                            src="assets/images/profile-pic-temp.png" 
                        />
                    </Figure>
                    <Form>
                        <Form.Group controlId="formBasicUserName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control placeholder="GotaKu" />
                        </Form.Group>
                        <Form.Group controlId="formBasicFullName">
                            <Form.Label>Full Name (Optional)</Form.Label>
                            <Form.Control placeholder="Tim Huang" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="sample@gmail.com" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="New Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mr-2">
                            Save
                        </Button>
                        <Button variant="danger" type="submit">
                            Log Out
                        </Button>
                    </Form>
                </Col>
                <Col lg={8}>
                    <Row>
                        <Col lg={6}>
                            <Link to="/order-history">
                                <ProfileButton 
                                    title="order-history"
                                    body="View your order history"
                                    img="assets/images/profile-order.jpg"/>
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <Link to="/cart">
                                <ProfileButton
                                    title="cart"
                                    body="View your cart"
                                    img="assets/images/profile-cart.png"/>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default ProfilePage;