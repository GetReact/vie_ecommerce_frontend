import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import './AuthenticationPage.css';
import LoginForm from './Login';
import RegisterForm from './Register';

const AuthenticationPage = (props) => {
    const [ width, setWidth ] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowSizeChange = () => {
            if (window.innerWidth !== width) setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleWindowSizeChange);
        return _ => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    });
    
    return (
        <div className="authentication-page">
            {
                width > 992 ? (
                    <>
                        <Col lg={6}>
                            <LoginForm/>
                        </Col>
                        <Col lg={6}> 
                            <RegisterForm/>
                        </Col>
                    </>
                ) : (
                    <div className="small-page">
                        <Row>
                            <LoginForm />
                        </Row>
                        <Row>
                            <RegisterForm />
                        </Row>
                    </div>
                )
            }
        </div>
    )
}

export default AuthenticationPage;