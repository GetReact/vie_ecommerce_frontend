import React from 'react';
import './ProfileNavigationOptions.css';

const ProfileButton = (props) => {
    return (
        <span className="profile-nav-options">
            <div className='option-image'>
                <img 
                    width="50cm"
                    alt={props.title} 
                    src={props.img}
                />
            </div>
            <div className='option-title'>
                {props.body}
            </div>
        </span>
    );
}

export default ProfileButton;