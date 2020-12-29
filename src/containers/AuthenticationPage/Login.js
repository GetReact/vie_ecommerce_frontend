import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { auth, signInWithGoogle } from '../../firebase/firebase';

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

        const { setLoading } = this.props;

        const handleSubmit = async (event) => {
            event.preventDefault();
            setLoading(true);
            
            const { email, password } = this.state;
            
            if (!validateForm()) return;

            try {
                const user = await auth.signInWithEmailAndPassword(email, password);
                console.log(user);
                setLoading(false);
            } catch(e) {
                console.log(e);
                setLoading(false);
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
                                    disabled
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