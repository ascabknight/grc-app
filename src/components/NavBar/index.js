// src/components/NavBar.js
import React from 'react';
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Form,
  FormControl,
  Row,
  Col,
} from 'react-bootstrap';

import styles from './NavBar.module.scss';

const NavBar = () => {
  const isEnt = true;

  return (
    <Navbar className="justify-content-right navbar-dark" bg="dark" expand="lg">
      <Navbar.Brand href="/">
        {' '}
        <img
          src="https://irp-cdn.multiscreensite.com/61ba1aaa/dms3rep/multi/Tauruseer_Logo_White-Text_Gradient-Icon.svg"
          alt="Tauruseer"
          height="60"
          loading="lazy"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Form inline>
          <FormControl type="text" placeholder="" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Nav>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/reports">Reports</Nav.Link>
          <NavDropdown title="Admin" id="admin-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">New Product</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              New Portfolio{' '}
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              New Governance Rule
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="John Doe" id="user-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as="button">Log Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
