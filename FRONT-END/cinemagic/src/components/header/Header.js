import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilm} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{color: "darkblue"}}>
                    <FontAwesomeIcon icon={faFilm}/>CINEMAGIC
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"
                         style={{maxHeight: '3000px'}}
                         navbarScroll>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/movies">Movies</NavLink>
                    </Nav>
                    <Button variant="outline-info">Login</Button>
                    <Button variant="outline-info">Sign Up</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header