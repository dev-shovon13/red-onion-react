import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import userAvatar from '../../images/avatar.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    // const showAlert = () => {
    //     !user.displayName && alert("Please Sign In to Proceed")
    // }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="border-bottom shadow-sm">
                <Container>
                    <Navbar.Brand>
                        <NavLink
                            to="/home"
                            className="border-remove"
                        >
                            <img
                                src={logo}
                                width="150"
                                height="40"
                                className="d-inline-block align-top border-none"
                                alt="logo"
                            />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} activeStyle={{ color: "#F91944", fontWeight: "bold" }} to="/home" className="width-control">Home</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={{ color: "#F91944", fontWeight: "bold" }} to="/about" className="width-control">About</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={{ color: "#F91944", fontWeight: "bold" }} to="/food" className="width-control">Food</Nav.Link>
                        </Nav>
                        <Nav>
                            <button className="btn login-btn me-lg-3 mb-2 mb-lg-0 px-4 py-2 color my-3 my-md-0">
                                <FontAwesomeIcon icon={faShoppingCart} className="color me-1" />
                                <p className="color fw-bold d-inline">0</p>
                            </button>
                            {
                                user.email || user.displayName ?
                                    <div className="d-flex align-items-center justify-content-center">
                                        {user.photoURL ?
                                            <img src={user.photoURL} alt="" style={{ height: '35px', borderRadius: '50%' }} className="me-2" />
                                            :
                                            <img src={userAvatar} alt="" style={{ height: '35px', borderRadius: '50%' }} className="me-2" />}
                                        {user.displayName ?
                                            <span className="fw-bold text-dark">{user.displayName}</span>
                                            :
                                            <span className="fw-bold text-dark">{user.email.substring(0, user.email.lastIndexOf("@"))}</span>}
                                        <Button className="btn btn-danger ms-2 btn-sm" onClick={logOut}>Logout</Button>
                                    </div>
                                    :
                                    <div className="d-flex justify-content-center">
                                        <NavLink to="/login">
                                            <button className="btn login-btn me-3 mb-2 mb-lg-0 px-4 py-2">Login</button>
                                        </NavLink>
                                        <NavLink to="/signup">
                                            <button className="btn signup-btn px-4 py-2">Sign up</button>
                                        </NavLink>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;