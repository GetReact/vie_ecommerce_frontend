import React, { useState, useContext } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { withRouter, useHistory } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { auth } from '../../firebase/firebase';
import logo_black from '../../vigg_black.png';
import logo_white from '../../vigg.png';
import './Navbar.css';
// import { UserContext } from '../../libs/contextLib';
import { connect } from 'react-redux';

const NavBar = ({ currentUser }) => {
    const [navbar, setNavbar] = useState(false); 
    const history = useHistory();
    // const currentUser = useContext(UserContext);

    const changeBackground = () => {
        if (window.scrollY >= 70) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    const handleSignOut = async () => {
        try {
            await auth.signOut();
            history.push('/authenticate')
        } catch (e) {
            console.log(e);
        }
    }   

    return (
        <Navbar fluid="true" collapseOnSelect fixed="top" className={navbar ? 'navbar active' : 'navbar'} expand='lg'>
            <Navbar.Brand>
                <LinkContainer to="/">
                    <img alt="Vigg Icon" src={navbar ? logo_white : logo_black} className="navbar-brand"/>
                </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle>
                <svg className="bi bi-justify" width="2em" height="2em" viewBox="0 0 16 16" fill={navbar ? "white" : "black"} xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </Navbar.Toggle>
            <Navbar.Collapse >
                <Nav className="nav-options mx-auto">
                    <Nav.Item className="nav-text" onClick={() => history.push('/shop')}>
                        SHOP
                    </Nav.Item>
                    <NavDropdown alignRight title="SELL WITH US">
                        <LinkContainer to="/sell-now">
                            <NavDropdown.Item>Sell now</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <LinkContainer to="/how-to-sell">
                            <NavDropdown.Item>How to sell</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <LinkContainer to="/how-to-ship">
                            <NavDropdown.Item>How it works</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                    <Nav.Item className="nav-text" onClick={() => history.push('/contact-us')}>
                        CONTACT US
                    </Nav.Item>
                </Nav>
                <Nav className="nav-icons">
                    <LinkContainer to="/cart">
                        <div className="nav-icon">
                            <svg className="bi bi-cart-plus" width="4em" height="4em" viewBox="0 0 16 16" fill={navbar ? "white" : "black"} xmlns="http://www.w3.org/2000/svg" style={{padding:'0px 20px 0px 20px'}}>
                                <path fillRule="evenodd" d="M8.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"/>
                                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0v-2z"/>
                                <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                        </div>
                    </LinkContainer>
                    {
                        currentUser ?
                        (
                            <>
                                <LinkContainer to="/profile">
                                    <div className="nav-icon">
                                        <svg className="bi bi-person-circle" width="4em" height="4em" viewBox="0 0 16 16" fill={navbar ? "white" : "black"} xmlns="http://www.w3.org/2000/svg" style={{padding:'0px 20px 0px 20px'}}>
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
                            <Nav.Item className="nav-text" onClick={() => history.push('/authenticate')}>
                                LOG IN
                            </Nav.Item>
                        )
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
});

export default withRouter(connect(mapStateToProps)(NavBar));
