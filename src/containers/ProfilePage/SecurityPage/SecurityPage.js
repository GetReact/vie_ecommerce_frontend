import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { axios_instance as axios } from '../../../config';

import { setCurrentUser } from '../../../redux/user/user-action';
import { setLoading } from '../../../redux/spinner/spinner-actions';

import FormInput from '../../../components/FormInput/FormInput';
import './SecurityPage.css';

const SecurityPage = (props) => {
    const history = useHistory();
    const [ state, setState ] = useState({
        newPassword: '',
        confirmPassword: '', 
    });

    const { setCurrentUser, setLoading } = props;

    const validateForm = () => {
        return (
            state.newPassword.length > 0 &&
            state.newPassword.length === state.confirmPassword.length
        );
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { newPassword } = state;
        setLoading(true);
        try {
            if (validateForm()) {
                await axios({
                    url: '/me',
                    method: 'post',
                    withCredentials: true,
                    data: { newPassword },
                }).then(response => {
                    alert(response.data.message);
                }).catch(error => {
                    alert(error.response.data.error);
                    setLoading(false);
                });
                await axios({
                    url: '/signout',
                    method: 'post',
                    withCredentials: true,
                }).then(response => {
                    alert(response.data.message);
                    setCurrentUser(null);
                    setLoading(false);
                    history.push('/signin');
                }).catch(error => {
                    alert(error.response.data.error);
                    setLoading(false)
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

const mapDispatchtoProps = dispatch => ({
    setLoading: loadingState => dispatch(setLoading(loadingState)),
    setCurrentUser: userAuth => dispatch(setCurrentUser(userAuth)),
});

export default connect(null, mapDispatchtoProps)(SecurityPage);