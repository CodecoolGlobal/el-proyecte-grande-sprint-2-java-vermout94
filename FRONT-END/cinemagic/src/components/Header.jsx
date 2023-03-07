/*react*/
import React from "react";
import {NavLink} from "react-router-dom";
/*bootstrap*/
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
/*logo*/
import logo from '../assets/navbar-logo.png';
/*css*/
import '../index.css';

export default function Header() {
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
                                <NavDropdown.Item href="/movies/latest">Latest</NavDropdown.Item>
                                <NavDropdown.Item href="/movies/most-popular">Most Popular</NavDropdown.Item>
                                <NavDropdown.Item href="/movies/top-rated">Top rated</NavDropdown.Item>
                                <NavDropdown.Item href="/movies/upcoming">Upcoming</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="TV shows" id="tv-dropdown" renderMenuOnMount={true}>
                                <NavDropdown.Item href="/tv/latest">Latest</NavDropdown.Item>
                                <NavDropdown.Item href="/tv/most-popular">Most Popular</NavDropdown.Item>
                                <NavDropdown.Item href="/tv/top-rated">Top rated</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/people">People</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div className="ms-auto">
                    <Button variant="outline-info">
                        Login
                    </Button>
                    <Button variant="outline-info">
                        Sign Up
                    </Button>
                </div>
            </Container>
        </Navbar>
    );
};
