import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


import { signInWithGoogle } from '../../firebase/firebase';
import { setLoading } from '../../redux/spinner/spinner-actions';
import { setCurrentUser } from '../../redux/user/user-action';

import FormInput from '../../components/FormInput/FormInput';

class LoginForm extends Component {

    state = {
        email: "",
        password: "",
    }

    render() {
        const validateForm = () => {
            return (
                this.state.email.length > 0 &&
                this.state.password.length > 0
            );
        }

        const { setLoading, setCurrentUser } = this.props;

        const handleSubmit = async (event) => {
            event.preventDefault();
            setLoading(true);
            
            const { email, password } = this.state;
            
            if (!validateForm()) return;

            try {
                await axios({
                    url: '/signin',
                    method: 'post',
                    data: {
                        email,
                        password
                    }
                }).then(response => {
                    const userAuth = response.data.currentUser;
                    console.log(userAuth);
                    setCurrentUser(userAuth);
                    setLoading(false);
                }).catch(error => {
                    console.log(error.response);
                    alert(error.response.data.error);
                    setLoading(false);
                });
            } catch(e) {
                console.log(e);
            }
        }

        const handleChange = (event) => {
            const { value, name } = event.target;
            this.setState({ [name] : value });
        }

        const renderForm = () => {
            return (
                <div>
                    <h3 className="register_title mb-3">
                        LOGIN HERE
                    </h3>
                    <h6>Already registered? Login in here!</h6>
                    <form onSubmit={handleSubmit} className="register_form" >
                        <FormInput 
                            label='Email'
                            name='email'
                            type='email'
                            value={this.state.email}
                            handleChange={handleChange}
                            required
                        />
                        <FormInput 
                            label='Password'
                            name='password'
                            type='password'
                            value={this.state.password}
                            handleChange={handleChange}
                            required
                        />
                        <Row className="login-btn-group">
                            <Col lg={4} md={4} sm={4}>
                                <Button
                                    className="register_form_box mb-3"
                                    block
                                    type="submit"
                                    variant="outline-dark"
                                    bssize="large"
                                    disabled={!validateForm()}
                                >
                                    Login
                                </Button>
                            </Col>
                            <Col lg={8} md={8} sm={8}>
                                <Button
                                    className="register_form_box mb-3"
                                    block
                                    variant="outline-primary"
                                    bssize="large"
                                    onClick={signInWithGoogle}
                                >
                                    Login with Google
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </div>
                
            );
        }

        return (
            <div className="register">
                { renderForm() }
            </div>
        );           
    }
}

const mapDispatchtoProps = dispatch => ({
    setLoading: loadingState => dispatch(setLoading(loadingState)),
    setCurrentUser: userAuth => dispatch(setCurrentUser(userAuth)),
})

export default withRouter(connect(null, mapDispatchtoProps)(LoginForm));