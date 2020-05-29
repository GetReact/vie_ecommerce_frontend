import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import logo from '../vigg.png';
import './Navbar.css';


const navbar = () => (
    <Navbar fluid="true" collapseOnSelect expand="lg" fixed="top" className="navbar-color">
        <Navbar.Brand>
            <Link to="/">
                <img alt="Vigg Icon" src={logo} className="navbar-brand"/>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle>
            <svg className="bi bi-justify" width="2em" height="2em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </Navbar.Toggle>
        <Navbar.Collapse >
            <Nav fill variant="tabs" className="navbar-nav mx-auto">
                <NavItem>
                    <Nav.Link href="/about-us" className="nav-item" style={{ color: 'white', background: 'transparent' }}>
                        ABOUT US
                    </Nav.Link>
                </NavItem>
                <NavDropdown title="SHOP" id = "dropdown">
                    <LinkContainer to="/shop/male">
                        <NavDropdown.Item>Male</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/shop/female">
                        <NavDropdown.Item>Female</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/shop/kid">
                        <NavDropdown.Item color="white">Kid</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
                <NavDropdown title="SELL WITH US" id = "dropdown">
                    <NavDropdown.Item>How To Sell</NavDropdown.Item>
                    <NavDropdown.Item>Sell Now!</NavDropdown.Item>
                </NavDropdown>
                <NavItem>
                    <Nav.Link href="/contact" className="nav-item" style={{ color: 'white', background: 'transparent' }}>
                        CONTACT
                    </Nav.Link>
                </NavItem>
            </Nav>
            <Nav className="nav-item-2">
                <LinkContainer to="/search">
                    <div className="nav-button">
                        <svg className="bi bi-search" width="4em" height="4em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg" style={{padding:'0px 20px 0px 20px'}}>
                            <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        </svg>
                    </div>
                </LinkContainer>
                <LinkContainer to="/profile">
                    <div className="nav-button">
                        <svg className="bi bi-person-circle" width="4em" height="4em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg" style={{padding:'0px 20px 0px 20px'}}>
                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                            <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                        </svg>
                    </div>
                </LinkContainer>
                <LinkContainer to="/cart">
                    <div className="nav-button">
                        <svg className="bi bi-cart-plus" width="4.5em" height="4.5em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg" style={{padding:'0px 20px 0px 20px'}}>
                            <path fillRule="evenodd" d="M8.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"/>
                            <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0v-2z"/>
                            <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                    </div>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);


export default navbar