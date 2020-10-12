import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './AuthenticationPage.css';
import LoginForm from './Login';
import RegisterForm from './Register';

class AuthenticationPage extends Component {

    state = {
        windowWidth: window.innerWidth,
    }

    setWindowWidth() {
        this.setState({ windowWidth: window.innerWidth })
    }

    componentDidMount() {
        window.addEventListener("resize", this.setWindowWidth.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.setWindowWidth.bind(this));
    }
    
    render() {
        return (
            <div className="authentication-page">
                {
                    this.state.windowWidth > 992 ? (
                        <>
                            <Col lg={6}>
                                <LoginForm />
                            </Col>
                            <Col lg={6}> 
                                <RegisterForm />
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

    
}

export default AuthenticationPage;