import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

const FoodiesMenu = props => {
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand as={Link} to="/">Foodies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/menu" >Menu</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

FoodiesMenu.propTypes = {
    title: PropTypes.string,
};

export default FoodiesMenu;