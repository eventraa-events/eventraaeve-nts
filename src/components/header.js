import React from "react";
import { Component } from "react";
import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown, MenuItem, Container,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

function Header(){

    return (
        <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>Eventraa Events</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#about">Aboutus</Nav.Link>
      <Nav.Link href="#services">Services</Nav.Link>
      <Nav.Link href="#contactus">Contactus</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
  </>
    )
}

export default Header;