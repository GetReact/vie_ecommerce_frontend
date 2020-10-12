import React, { Component } from "react";
import {
    FormGroup,
    FormControl,
    Button,
    Container
} from "react-bootstrap";
import FormInput from '../../components/FormInput/FormInput';

class RegisterForm extends Component {

    state = {
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    render() {
        const validateForm = () => {
            return (
                this.state.email.length > 0 &&
                this.state.password.length > 0 &&
                this.state.password === this.state.confirmPassword
            );
        }

        const handleSubmit = async (event) => {
            event.preventDefault();
            this.setState({ 
                fullname: "",
                username: "",
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
                            label='Full Name'
                            name='fullname'
                            type='input'
                            value={this.state.fullname}
                            handleChange={handleChange}
                            required
                        />
                        <FormInput 
                            label='User Name'
                            name='username'
                            type='input'
                            value={this.state.username}
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
                        {/* <Link to="/login"><h6>Already registered? Login in here!</h6></Link> */}
                    </form>
                </div>
                
            );
        }
    
        return (
            <div className="register">
                {renderForm()}
            </div>
        );
    }
}

export default RegisterForm;