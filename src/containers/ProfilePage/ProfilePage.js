import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import { fireBaseMediaURL } from '../../config';

import ProfileButton from '../../components/ProfileNavigationOptions/ProfileNavigationOptions';

import './ProfilePage.css';

const ProfilePage = () => {
    return (
        <div className="profile-page">
            <Row className='options-row'>
                <Col xl={4}className='options-col'>
                    <Link to="/order-history">
                        <ProfileButton 
                            title="order-history"
                            body="View your order history"
                            img={ fireBaseMediaURL('profile%2Fprofile-order.jpg') }/>
                    </Link>
                </Col>
                <Col xl={4}className='options-col'>
                    <Link to="/profile/info">
                        <ProfileButton
                            title="info"
                            body="Login and security"
                            img={ fireBaseMediaURL('profile%2Fprofile-lock.png') }/>
                    </Link>
                </Col>
                <Col xl={4}className='options-col'>
                    <Link to="/cart">
                        <ProfileButton
                            title="cart"
                            body="View your cart"
                            img={ fireBaseMediaURL('profile%2Fprofile-cart.png') }/>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}

export default ProfilePage;