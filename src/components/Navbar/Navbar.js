import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter, useHistory } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart-action';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { setLoading } from '../../redux/spinner/spinner-actions';

import { fireBaseMediaURL } from '../../config';
import { auth } from '../../firebase/firebase';

import CartDropDown from '../../components/CartDropDown/CartDropDown';
import './Navbar.css';


const NavBar = (props) => {
    const [ navbar, setNavbar ] = useState(false);
    const history = useHistory();

    const {
        currentUser,
        toggleCartHidden,
        hidden,
        setLoading,
    } = props;

    const [ dimensions, setDimensions ] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })
    
    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }

        const changeNavBackground = () => {
            if (window.scrollY >= 70) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        }

        window.addEventListener('scroll', changeNavBackground);
        window.addEventListener('resize', handleResize)
    
        return _ => {
            window.removeEventListener('scroll', changeNavBackground);
            window.removeEventListener('resize', handleResize);
        }
    });

    const handleSignOut = async () => {
        setLoading(true);
        try {
            await auth.signOut();
            setLoading(false);
            history.push('/signin');
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <Navbar fluid="true" collapseOnSelect fixed="top" className={navbar ? 'navbar active' : 'navbar'} expand='lg'>
            <Navbar.Brand>
                <LinkContainer to="/">
                    <img alt="Vigg Icon" src={navbar ? fireBaseMediaURL('icons%2Fvigg_black.png') : fireBaseMediaURL('icons%2Fvigg.png')} className="navbar-brand"/>
                </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle>
                <svg className="bi bi-justify" width="2em" height="2em" viewBox="0 0 16 16" fill={navbar ? "black" : "white"} xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </Navbar.Toggle>
            <Navbar.Collapse>
                <Nav className="nav-options">
                    <Nav.Item 
                        id='shop' 
                        className="nav-text" 
                        onClick={() => history.push('/shop')}>
                            SHOP
                    </Nav.Item>
                    <Nav.Item id='sell-with-us' className="nav-text" >
                        SELL WITH US 
                        {   
                            dimensions.width >= 992 &&
                            <>
                            <span 
                                role='img' 
                                aria-labelledby='dropdown-icon' 
                                className='nav-item-dropdown-arrow-down'>
                                    &#10095;
                            </span>
                            <ul className='nav-item-dropdown'>
                                <li onClick={() => history.push('/sell-now')}>Sell Now!</li>
                                <li onClick={() => history.push('/how-to-sell')}>How To Sell?</li>
                                <li onClick={() => history.push('/how-to-ship')}>How It Works?</li>
                            </ul>
                            </>
                        }
                    </Nav.Item>
                    <Nav.Item 
                        id='contact-us' 
                        className="nav-text" 
                        onClick={() => history.push('/contact-us')}>
                            CONTACT US
                    </Nav.Item>
                </Nav>
                <Nav className="nav-icons">
                    {
                        currentUser ?
                        (
                            <>
                                <LinkContainer to="/profile">
                                    <div className="nav-icon">
                                        <svg 
                                            className="bi bi-person-circle" 
                                            width="4em" 
                                            height="4em" 
                                            viewBox="0 0 16 16" 
                                            fill={navbar ? "black" : "white"} 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            style={{padding:'0px 20px 0px 20px'}}>
                                                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                                                <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                                <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                                        </svg>
                                    </div>
                                </LinkContainer>
                                <Nav.Item className="nav-text" onClick={ handleSignOut }>
                                    SIGN OUT
                                </Nav.Item>
                            </>
                        )
                        :
                        (
                            <Nav.Item className="nav-text" onClick={() => history.push('/signin')}>
                                LOG IN
                            </Nav.Item>
                        )
                    }
                    <div className="nav-icon" onClick={ window.innerWidth <= 992 ? () => history.push('/cart') : toggleCartHidden }>
                        <svg 
                            className="bi bi-cart-plus" 
                            width="4em" 
                            height="4em" 
                            viewBox="0 0 16 16" 
                            fill={navbar ? "black" : "white"} 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{padding:'0px 20px 0px 20px'}}>
                                <path fillRule="evenodd" d="M8.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"/>
                                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0v-2z"/>
                                <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                    </div>
                </Nav>
            </Navbar.Collapse>
            {hidden ? "" : <CartDropDown />}
        </Navbar>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

const mapDispatchtoProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
    setLoading: loadingState => dispatch(setLoading(loadingState)),
});


export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(NavBar));
