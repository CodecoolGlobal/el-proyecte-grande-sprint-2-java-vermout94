/*react*/
import React, {useState} from "react";
/*bootstrap*/
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {NavLink} from "react-router-dom";
/*components*/
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
/*logo*/
import logo from '../assets/navbar-logo.png';
/*css*/
import '../index.css';


export default function Header() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    return (
        <Navbar expand="lg">
            <Container fluid>
                <div className="d-flex align-items-center me-auto">
                    <Navbar.Brand href="/">
                        <img src={logo} width="250" height="40" alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: "3000px"}}
                            navbarScroll
                        >
                            <NavDropdown title="Movies" id="movies-dropdown" renderMenuOnMount={true}>
                                <NavLink to={"/movies/latest"}>Latest</NavLink>
                                <NavLink to={"/movies/most-popular"}>Most Popular</NavLink>
                                <NavLink to={"/movies/top-rated"}>Top rated</NavLink>
                                <NavLink to={"/movies/upcoming"}>Upcoming</NavLink>
                            </NavDropdown>
                            <NavDropdown title="TV shows" id="tv-dropdown" renderMenuOnMount={true}>
                                <NavLink to={"/tv/most-popular"}>Most Popular</NavLink>
                                <NavLink to={"/tv/top-rated"}>Top rated</NavLink>
                            </NavDropdown>
                            <NavLink to={"/people"}>People</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div className="ms-auto">
                    <Button variant="outline-info" onClick={() => setShowLoginModal(true)}>
                        Login
                    </Button>
                    <Button variant="outline-info" onClick={() => setShowSignupModal(true)}>
                        Sign Up
                    </Button>
                </div>
                {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)}/>}
                {showSignupModal && <SignupModal onClose={() => setShowSignupModal(false)}/>}
            </Container>
        </Navbar>
    );
};