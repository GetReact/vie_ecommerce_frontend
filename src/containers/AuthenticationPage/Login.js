import React, { Component } from "react";
import { Button } from "react-bootstrap";
import FormInput from '../../components/FormInput/FormInput';

class LoginForm extends Component {

    state = {
        email: "",
        password: "",
    }
    // const [isActive, setIsActive] = useState(false);
    render() {
        const validateForm = () => {
            return (
                this.state.email.length > 0 &&
                this.state.password.length > 0
            );
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            this.setState({ email: '', password: '' })
        }

        const handleChange = (event) => {
            const { value, name } = event.target
            this.setState({ [name] : value })
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
                        <Button
                            className="register_form_box mb-3"
                            block
                            variant="outline-primary"
                            bssize="large"
                        >
                            Login with Google
                        </Button>
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

export default LoginForm;