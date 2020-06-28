import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function Navigation() {
    
return (
        <Navbar className="navbar" variant="dark" expand="lg">
            <Navbar.Brand className="logo h1" href="/">Holidaze</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto link-wrap">
                    <Nav.Link className="link1" href="/">Hotels</Nav.Link>
                    <Nav.Link className="link1" href="/about/">Enquiries</Nav.Link>
                    <Nav.Link className="link1" href="/contact/">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation