import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import axios from 'axios';

// import { auth, createUserProfileDocument } from '../../firebase/firebase';
import { setLoading } from '../../redux/spinner/spinner-actions';

import FormInput from '../../components/FormInput/FormInput';

class RegisterForm extends Component {

    state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    render() {
        const validateForm = () => {
            return (
                this.state.displayName.length > 0 &&
                this.state.email.length > 0 &&
                this.state.password.length > 0 &&
                this.state.password.length === this.state.confirmPassword.length
            );
        }

        const handleSubmit = async (event) => {
            event.preventDefault();
            this.props.setLoading(true);
            if (validateForm()) {
                try {
                    const { displayName, email, password } = this.state;
                    // const { user } = await auth.createUserWithEmailAndPassword(email, password);
                    axios({
                        url: 'users',
                        method: 'post',
                        data: {
                            displayName,
                            email,
                            password
                        }
                    }).then(response => {
                        console.log(response)
                        alert(response.data.status);
                    }).catch(error => {
                        console.log(error);
                        alert('An issue occurred!');
                    });
                    // createUserProfileDocument(user, { displayName });
                    this.props.setLoading(false);
                } catch (e) {
                    console.error(e);
                }
            }
            this.setState({ 
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "", 
            })
        }

        const handleChange = (event) => {
            const { value, name } = event.target
            this.setState({ [name] : value })
        }

        const renderForm = () => {
            return (
                <div>
                    <h3 className="register_title mb-3">
                        REGISTER HERE
                    </h3>
                    <h6>Have not registered? Sign up here!</h6>
                    <form onSubmit={handleSubmit} className="register_form" >
                        <FormInput 
                            label='User Name'
                            name='displayName'
                            type='input'
                            value={this.state.displayName}
                            handleChange={handleChange}
                            required
                        />
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
                        <FormInput 
                            label='Confirm Password'
                            name='confirmPassword'
                            type='password'
                            value={this.state.confirmPassword}
                            handleChange={handleChange}
                            required
                        />
                        <Button
                            className="register_form_box mb-3"
                            block
                            type="submit"
                            variant="outline-dark"
                            bssize="large"
                            disabled={!validateForm()}
                        >
                            Register
                        </Button>
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
    setLoading: loadingState => (setLoading(loadingState)),
})

export default connect(null, mapDispatchtoProps)(RegisterForm);