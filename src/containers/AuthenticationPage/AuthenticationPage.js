import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AuthenticationPage.css';
import LoginForm from './Login';
import RegisterForm from './Register';

const AuthenticationPage = (props) => {
    return (
        <Row className="authentication-page">
            <Col lg={6} md={12}>
                <LoginForm />
            </Col>
            <Col lg={6} md={12}> 
                <RegisterForm />
            </Col>
        </Row>
    )
}

export default AuthenticationPage;