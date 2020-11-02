import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from '../components/Spinner/Spinner';

const WithSpinnner = (Component) => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <Component {...otherProps}/>
        )
    }
    return Spinner;
}
export default WithSpinnner;