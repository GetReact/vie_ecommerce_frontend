import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import { axios_instance as axios } from '../../config';
import { auth } from '../../firebase/firebase';

import { setLoading } from '../../redux/spinner/spinner-actions';
import { setCurrentUser } from '../../redux/user/user-action';

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

        const { setLoading } = this.props;

        const handleSubmit = async (event) => {
            event.preventDefault();

            if (this.state.password !== this.state.confirmPassword) {
                alert('The password confirmation does not match!');
            }

            setLoading(true);
            try {
                const { displayName, email, password } = this.state;
                const user = await auth.createUserWithEmailAndPassword(email, password);
                    
                await user.updateProfile({
                    displayName: displayName
                });

                const jwtToken = await user.getIdToken();

                await axios({
                    url: '/users',
                    method: 'post',
                    headers: {
                        'Authorization': jwtToken
                    }
                }).then(response => {
                    console.log(response.data.user);
                }).catch(error => {
                    console.log(error.response.data.error);
                }); 

                setLoading(false);
            } catch (error) {
                console.log(error.code);
                alert(error.message);
                setLoading(false);
            }
        }

        const handleChange = (event) => {
            const { value, name } = event.target
            this.setState({ [name] : value })
        }
    
        return (
            <form onSubmit={handleSubmit} className="form-content" >
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
                    className="form-button mb-3"
                    block
                    type="submit"
                    variant="outline-dark"
                    bssize="large"
                    disabled={!validateForm()}
                >
                    Register
                </Button>
            </form>                
        );
    }
}

const mapDispatchtoProps = dispatch => ({
    setLoading: loadingState => dispatch(setLoading(loadingState)),
    setCurrentUser: userAuth => dispatch(setCurrentUser(userAuth)),
})

export default connect(null, mapDispatchtoProps)(RegisterForm);