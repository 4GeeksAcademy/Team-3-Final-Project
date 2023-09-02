import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavbarBS from 'react-bootstrap/Navbar'; // Renamed imported Navbar
import NavDropdown from 'react-bootstrap/NavDropdown';

const CustomNavbar = () => {
  return (
    <NavbarBS expand="lg" className="bg-body-tertiary"> {/* Use NavbarBS instead of Navbar */}
      <Container fluid>
        <NavbarBS.Brand href="#">HYPNOS</NavbarBS.Brand> {/* Use NavbarBS.Brand */}
        <NavbarBS.Toggle aria-controls="navbarScroll" /> {/* Use NavbarBS.Toggle */}
        <NavbarBS.Collapse id="navbarScroll"> {/* Use NavbarBS.Collapse */}
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </NavbarBS.Collapse> {/* Use NavbarBS.Collapse */}
      </Container>
    </NavbarBS>
  );
};

export default CustomNavbar; // Export your custom Navbar component as CustomNavbar
