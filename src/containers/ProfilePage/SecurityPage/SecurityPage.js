import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap';

import { auth } from '../../../firebase/firebase';

import FormInput from '../../../components/FormInput/FormInput';
import './SecurityPage.css';

const SecurityPage = (props) => {
    const history = useHistory();
    const [ state, setState ] = useState({
        newPassword: '',
        confirmPassword: '', 
    });

    const validateForm = () => {
        return (
            state.newPassword.length > 0 &&
            state.newPassword.length === state.confirmPassword.length
        );
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { newPassword } = state;
        props.setLoading(true);
        try {
            const user = await auth.currentUser;
            if (validateForm()) {
                user.updatePassword(newPassword).then(
                    async () => {
                        await auth.signOut();
                        history.push('/signin');
                        props.setLoading(false);
                    }
                ).catch((e) => {
                    console.log(e);
                });
            }
        } catch (e) {
            console.log(e);
        }
        setState({ 
            newPassword: '',
            confirmPassword: '', 
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
                    name='newPassword'
                    type='password'
                    value={state.newPassword}
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
                    onClick={() => history.push('/profile')}
                >
                    Cancel
                </Button>
            </form>
        </div>
    );
}

export default SecurityPage;