import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import Hotels from "../hotels/Hotels";
import Enquiries from "../enquiries/Enquiries";
import Contact from "../contact/Contact";
import HotelDetail from "../hotels/HotelDetail";
//import Admin from "../admin/Admin";
import Login from "../admin/Login";

function Layout() {
    
return (
	<Router>
        <Navbar className="navbar" variant="dark" expand="lg">
        	<NavLink to="/" exact>
            	<Navbar.Brand className="logo h1" href="/">Holidaze</Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto link-wrap">
                    <NavLink to="/hotels" className="nav-link">
                    	Hotels
                    </NavLink>
                    <NavLink to="/enquiries" className="nav-link">
                    	Enquiries
                    </NavLink>
                    <NavLink to="/contact" className="nav-link">
                    	Contact
                    </NavLink>
                    <NavLink to="/login" className="nav-link">
                        For Admin
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Container>
        	<Switch>
        		<Route path="/" exact component={Home} />
        		<Route path="/hotels" exact component={Hotels} />
        		<Route path="/enquiries" exact component={Enquiries} />
        		<Route path="/contact" exact component={Contact} />
                <Route path="/hotel/:id" component={HotelDetail} />
                <Route path="/login" component={Login} />
        	</Switch>
        </Container>
    </Router>
    );
}

export default Layout;