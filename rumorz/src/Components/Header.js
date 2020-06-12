import React,  { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
class Header extends Component {
  render() {
    return (
      <header>
      <Container fluid = "true">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Rumorz</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">New</Nav.Link>
    </Nav>
    <Nav>
    <NavDropdown  alignRight ="true" title="Profile" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#Profile">My Profile</NavDropdown.Item>
        <NavDropdown.Item href="#Logout">Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Container>
</header>
    );
  }
}


export default Header;