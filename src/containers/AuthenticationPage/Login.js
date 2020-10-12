import React from "react";
import {
    FormGroup,
    FormControl,
    Button,
    Container
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useFormFields } from "../../libs/hooksLib";

const LoginForm = ()  => {
    const [fields, handleFieldChange] = useFormFields({
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    // const [isActive, setIsActive] = useState(false);

    const validateForm = () => {
        return (
            fields.email.length > 0 &&
            fields.password.length > 0 &&
            fields.password === fields.confirmPassword
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // setIsLoading(true);
    }

    const renderForm = () => {
        return (
            <div>
                <h3 className="register_title">
                    LOGIN HERE
                </h3>
                <form onSubmit={handleSubmit} className="register_form" >
                    <FormGroup controlId="email" bssize="large">
                    <h5>Email</h5>
                    <FormControl
                        className="register_form_box"
                        autoFocus
                        type="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                    </FormGroup>
                    <FormGroup controlId="password" bssize="large">
                    <h5>Password</h5>
                    <FormControl
                        className="register_form_box"
                        type="password"
                        value={fields.password}
                        onChange={handleFieldChange}
                    />
                    </FormGroup>
                    <Button
                        id = "register_button"
                        className="register_form_box mb-3"
                        block
                        type="submit"
                        bssize="large"
                        disabled={!validateForm()}
                    >
                        Login
                    </Button>
                    <Button
                        className="register_form_box mb-3"
                        block
                        variant="primary"
                        bssize="large"
                    >
                        Login with Google
                    </Button>
                    {/* <Link to="/register"><h6>Have not registerd? Register here!</h6></Link> */}
                </form>
            </div>
            
        );
    }

    return (
        <div className="register">
            <Container>
                {renderForm()}
            </Container>
        </div>
    );
}

export default LoginForm;