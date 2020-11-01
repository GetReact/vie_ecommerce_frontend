import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import ProfileButton from '../../components/ProfilePageButton/ProfileButton';
import './ProfilePage.css';

const ProfilePage = ({ currentUser }) => {
    let user = {
        currentUser : {
            displayName : "User Name",
            fullName : "Full Name",
            email : "user@email.com",
        }
    }

    if (currentUser) user = currentUser;

    return (
        <div className="profile-page">
            <Row>
                <Col lg={3} className="user-info">
                    <Form>
                        <Form.Group controlId="formBasicUserName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control placeholder={user.currentUser.displayName} />
                        </Form.Group>
                        <Form.Group controlId="formBasicFullName">
                            <Form.Label>Full Name (Optional)</Form.Label>
                            <Form.Control placeholder={user.currentUser.fullName? user.currentUser.fullName : user.currentUser.displayName} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder={user.currentUser.email} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="New Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                        <Button variant="danger" type="submit">
                            Sign Out
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

const mapPropstoState = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapPropstoState)(ProfilePage);