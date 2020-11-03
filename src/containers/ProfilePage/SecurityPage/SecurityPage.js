import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../../redux/user/user-selectors';
import { setCurrentUser } from '../../../redux/user/user-action';

import FormInput from '../../../components/FormInput/FormInput';
import './SecurityPage.css';

const SecurityPage = (props) => {
    const { currentUser } = props;
    const [ state, setState ] = useState({
        password: "",
        confirmPassword: "", 
    });

    const validateForm = () => {
        return (
            state.password.length > 0 &&
            state.password.length === state.confirmPassword.length
        );
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        this.props.setLoading(true);
        if (validateForm()) {
            try {
                const { password } = state;
                // const { user } = await auth.createUserWithEmailAndPassword(email, password);
                // createUserProfileDocument(user, { displayName });
                props.setLoading(false);
            } catch (e) {
                console.error(e);
            }
        }
        setState({ 
            password: "",
            confirmPassword: "", 
        })
    }

    const handleChange = (event) => {
        const { value, name } = event.target
        setState({
            ...state,
            [name] : value,
        })
    }

    return (
        <div className='security-page'>
            <h3 className="security-page-title mb-3">
                RESET PASSWORD
            </h3>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='New Password'
                    name='password'
                    type='password'
                    value={state.password}
                    handleChange={handleChange}
                    required
                />
                <FormInput 
                    label='Confirm Password'
                    name='confirmPassword'
                    type='password'
                    value={state.confirmPassword}
                    handleChange={handleChange}
                    required
                />
                <Button
                    className="mb-3"
                    block
                    type="submit"
                    variant="outline-dark"
                    bssize="large"
                    disabled={!validateForm()}
                >
                    Submit
                </Button>
                <Button
                    className="mb-3"
                    block
                    type="submit"
                    variant="outline-primary"
                    bssize="large"
                >
                    Cancel
                </Button>
            </form>
        </div>
    );
}

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchtoProps = (dispatch) => ({
    setCurrentUser: user => (setCurrentUser(user)),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(SecurityPage);