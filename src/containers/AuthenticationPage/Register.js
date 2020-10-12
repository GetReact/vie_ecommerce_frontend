import React from "react";
import {
    FormGroup,
    FormControl,
    Button,
    Container
} from "react-bootstrap";

import { Link } from 'react-router-dom';
import { useFormFields } from "../../libs/hooksLib";

const RegisterForm = ()  => {
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        // setIsLoading(true);
    }

    const renderForm = () => {
        return (
            <div>
                <h3 className="register_title">
                    REGISTER HERE
                </h3>
                <form onSubmit={handleSubmit} className="register_form" >
                    <FormGroup controlId="fullname" bssize="large">
                    <h5>Full Name</h5>
                    <FormControl
                        className="register_form_box"
                        autoFocus
                        value={fields.fullname}
                        onChange={handleFieldChange}
                    />
                    </FormGroup>
                    <FormGroup controlId="username" bssize="large">
                    <h5>User Name</h5>
                    <FormControl
                        className="register_form_box"
                        autoFocus
                        value={fields.username}
                        onChange={handleFieldChange}
                    />
                    </FormGroup>
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
                    <FormGroup controlId="confirmPassword" bssize="large">
                    <h5>Confirm Password</h5>
                    <FormControl
                        className="register_form_box"
                        type="password"
                        onChange={handleFieldChange}
                        value={fields.confirmPassword}
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
                        Register
                    </Button>
                    {/* <Link to="/login"><h6>Already registered? Login in here!</h6></Link> */}
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

export default RegisterForm;