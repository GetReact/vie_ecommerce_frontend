import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { auth, createUserProfileDocument } from '../../firebase/firebase';
import FormInput from '../../components/FormInput/FormInput';
import { SpinnerContainer } from '../../components/Spinner/Spinner';

class RegisterForm extends Component {

    state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        isLoading: false,
    }

    setLoading = (boolean) => { this.setState({ isLoading: boolean })};

    render() {
        const validateForm = () => {
            return (
                this.state.displayName.length > 0 &&
                this.state.email.length > 0 &&
                this.state.password.length > 0 &&
                this.state.password === this.state.confirmPassword
            );
        }

        const handleSubmit = async (event) => {
            event.preventDefault();
            this.setLoading(true);
            if (validateForm()) {
                try {
                    const { displayName, email, password } = this.state;
                    const { user } = await auth.createUserWithEmailAndPassword(email, password);
                    createUserProfileDocument(user, { displayName });
                    this.setLoading(false);
                } catch (e) {
                    console.error(e);
                    this.setLoading(false);
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
                {this.state.isLoading? (
                    <SpinnerContainer />
                ) : (
                    renderForm()
                )}
            </div>
        );
    }
}

export default RegisterForm;