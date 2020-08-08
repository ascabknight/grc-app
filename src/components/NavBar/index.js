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
    </Navbar>
  );
};

export default NavBar;
