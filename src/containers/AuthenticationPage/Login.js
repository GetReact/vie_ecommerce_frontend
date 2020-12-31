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

            await auth.signInWithEmailAndPassword(email, password)
                .then(response => console.log(response.user))
                .catch(error => alert(error.message));
        
            setLoading(false);
        }

        const handleChange = (event) => {
            const { value, name } = event.target;
            this.setState({ [name] : value });
        }

        return (
            <form onSubmit={handleSubmit} className="form-content" >
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
                            className="form-button mb-3"
                            block
                            type="submit"
                            variant="outline-dark"
                            bssize="large"
                            disabled={ !validateForm() }
                        >
                            Login
                        </Button>
                    </Col>
                    <Col lg={8} md={8} sm={8}>
                        <Button
                            className="form-button mb-3"
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
        );           
    }
}

const mapDispatchtoProps = dispatch => ({
    setLoading: loadingState => dispatch(setLoading(loadingState)),
    setCurrentUser: userAuth => dispatch(setCurrentUser(userAuth)),
})

export default withRouter(connect(null, mapDispatchtoProps)(LoginForm));