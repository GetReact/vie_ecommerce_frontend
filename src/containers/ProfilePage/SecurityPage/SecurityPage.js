import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import firebase from 'firebase/app';

import { auth } from '../../../firebase/firebase';

import { setLoading } from '../../../redux/spinner/spinner-actions';

import FormInput from '../../../components/FormInput/FormInput';
import './SecurityPage.css';

const SecurityPage = (props) => {
    const history = useHistory();

    const [ fields, setFields ] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });

    const { setLoading } = props;

    const validateResetPasswordForm = () => {
        return (
            fields.newPassword.length > 0 &&
            fields.newPassword.length === fields.confirmNewPassword.length
        );
    }

    const handleResetPassword = async (event) => {
        event.preventDefault();
        setLoading(true);


        const user = auth.currentUser;
        const { currentPassword, newPassword, confirmNewPassword } = fields;

        if (!user) {
            alert('You are not authenticated!');
            auth.signOut();
            setLoading(false);
            history.push('/signin');
        }
        
        // Validate New Password
        if (newPassword === currentPassword) {
            alert('New Password cannot be the same as the Current Password!')
            return;
        }

        if (newPassword !== confirmNewPassword) {
            alert('The password confirmation does not match!');
            return;
        }

        // Re-authenticate user
        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            currentPassword
        );

        await user.reauthenticateWithCredential(credential)
            .then(message => {
                console.log(message);
                alert('User is reauthenticated!');
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
                return;
            });

        // Update Password
        await user.updatePassword(newPassword)
            .then(message => {
                console.log(message);
                alert('Update password successfully!');
            })
            .catch(error => {
                console.log(error);
                alert(error.message);
                return;
            });

        setLoading(false);
        
        setFields({
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '', 
        })

        history.push('/profile');
    }

    const handleChange = (event) => {
        const { value, name } = event.target
        setFields({
            ...fields,
            [name] : value,
        })
    }

    return (
        <div className='security-page'>
            <div className='form-container'>
                <h3 className="form-title mb-3">
                    RESET PASSWORD
                </h3>
                <form onSubmit={ handleResetPassword }>
                    <FormInput 
                        label='Current Password'
                        name='currentPassword'
                        type='password'
                        value={ fields.currentPassword }
                        handleChange={ handleChange }
                        required
                    />
                    <FormInput 
                        label='New Password'
                        name='newPassword'
                        type='password'
                        value={ fields.newPassword }
                        handleChange={ handleChange }
                        required
                    />
                    <FormInput 
                        label='Confirm Password'
                        name='confirmNewPassword'
                        type='password'
                        value={ fields.confirmNewPassword }
                        handleChange={ handleChange }
                        required
                    />
                    <Button
                        className="mb-3"
                        block
                        type="submit"
                        variant="outline-dark"
                        bssize="large"
                        disabled={ !validateResetPasswordForm() }
                    >
                        Submit
                    </Button>
                    <Button
                        className="mb-3"
                        block
                        type="submit"
                        variant="outline-primary"
                        bssize="large"
                        onClick={() => history.push('/profile')}
                    >
                        Cancel
                    </Button>
                </form>
            </div>
        </div>
    );
}

const mapDispatchtoProps = dispatch => ({
    setLoading: loadingState => dispatch(setLoading(loadingState)),
});

export default connect(null, mapDispatchtoProps)(SecurityPage);