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
import LoginModal from "../login-modal/LoginModal";
import SignupModal from "../signup-modal/SignupModal";
/*logo*/
import logo from '../../assets/navbar-logo.png';
/*css*/
import "./header.css";


export default function Header({loginStatus, setLoginStatus}) {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    function handleLogout() {
        localStorage.removeItem("token");
        setLoginStatus(false);
        console.log("Logged out");
    }


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
                                <NavDropdown.Item as={NavLink} to="/movies/latest">Latest</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/movies/most-popular">Most Popular</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/movies/top-rated">Top rated</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/movies/upcoming">Upcoming</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="TV shows" id="tv-dropdown" renderMenuOnMount={true}>
                                <NavDropdown.Item as={NavLink} to={"/tv/most-popular"}>Most Popular</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to={"/tv/top-rated"}>Top rated</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="People" id="people-dropdown" renderMenuOnMount={true}>
                                <NavDropdown.Item as={NavLink} to={"/people"}>Most Popular</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div className="ms-auto">
                    {loginStatus ? (
                        <Button className={"logout-button"} variant="outline-dark"
                                onClick={handleLogout}>
                            Logout
                        </Button>
                    ) : (
                        <>
                            <Button className={"login-signup-buttons"} variant="outline-dark"
                                    onClick={() => setShowLoginModal(true)}>
                                Login
                            </Button>
                            <Button className={"login-signup-buttons"} variant="outline-dark"
                                    onClick={() => setShowSignupModal(true)}>
                                Sign Up
                            </Button>
                        </>
                    )
                    }
                </div>
                {showLoginModal && <LoginModal loginStatus={loginStatus} setLoginStatus={setLoginStatus}
                                               onClose={() => setShowLoginModal(false)}/>}
                {showSignupModal && <SignupModal onClose={() => setShowSignupModal(false)}/>}
            </Container>
        </Navbar>
    );
};