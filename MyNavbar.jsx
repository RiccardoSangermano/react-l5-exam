import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap';
import { FaSearch, FaBellSlash } from 'react-icons/fa';


function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid className="d-flex align-items-center mb-3">
        <Navbar.Brand href="#" style={{ width: '20%' }}>
          <img
            src="/images/netflix_logo.png" 
            className="img-fluid"
            alt="logo"
            style={{ width: '100%' }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="mb-3">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Tv shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#" disabled>Recent added</Nav.Link>
            <Nav.Link href="#" disabled>My list</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link href="#" className="me-3">
            <FaSearch />
          </Nav.Link>
          <Nav.Link href="#" className="me-3">Kids</Nav.Link>
          <Nav.Link href="#" className="me-3">
            <FaBellSlash />
          </Nav.Link>
          <NavDropdown
            title={
              <img
                src="/images/avatar.png" 
                className="img-thumbnail"
                alt="Profilo"
                width="30"
                height="30"
              />
            }
            id="basic-nav-dropdown"
            className="me-3"
          >
            <NavDropdown.Item href="#" active>Lara</NavDropdown.Item>
            <NavDropdown.Item href="#">Giuseppe</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MyNavbar