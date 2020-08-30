import React from "react";
import {
    FormGroup,
    FormControl,
    Button
} from "react-bootstrap";
import FacebookLogin from 'react-facebook-login';
import {GoogleLogin} from 'react-google-login';
import { useFormFields } from "../../libs/hooksLib";
import "./Register.css";
// import fb from "../../img/fb-icon-black.png";

const Register = ()  => {
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
                    <FacebookLogin
                        appId="562118384400275"
                        autoLoad={true}
                        fields="name,email,picture"
                        scope="public_profile,user_friends"
                        // callback={responseFacebook}
                        icon="fa-facebook" />
                    <GoogleLogin
                        className="google-login"
                        // clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="LOGIN WITH GMAIL"
                        // onSuccess={responseGoogle}
                        // onFailure={responseGoogle}
                        // cookiePolicy={'single_host_origin'}
                    />
                    <h3 className="register_title">
                        OR
                    </h3>
                    <FormGroup controlId="fullname" bssize="large">
                    <h6>Full Name</h6>
                    <FormControl
                        className="register_form_box"
                        autoFocus
                        value={fields.fullname}
                        onChange={handleFieldChange}
                    />
                    </FormGroup>
                    <FormGroup controlId="username" bssize="large">
                    <h6>User Name</h6>
                    <FormControl
                        className="register_form_box"
                        autoFocus
                        value={fields.username}
                        onChange={handleFieldChange}
                    />
                    </FormGroup>
                    <FormGroup controlId="email" bssize="large">
                    <h6>Email</h6>
                    <FormControl
                        className="register_form_box"
                        autoFocus
                        type="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                    </FormGroup>
                    <FormGroup controlId="password" bssize="large">
                    <h6>Password</h6>
                    <FormControl
                        className="register_form_box"
                        type="password"
                        value={fields.password}
                        onChange={handleFieldChange}
                    />
                    </FormGroup>
                    <FormGroup controlId="confirmPassword" bssize="large">
                    <h6>Confirm Password</h6>
                    <FormControl
                        className="register_form_box"
                        type="password"
                        onChange={handleFieldChange}
                        value={fields.confirmPassword}
                    />
                    </FormGroup>
                    <Button
                        id = "register_button"
                        className="register_form_box"
                        block
                        type="submit"
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
            <div className="container">
                <div className="row">
                    {renderForm()}
                </div>
            </div>
        </div>
    );
}

export default Register;