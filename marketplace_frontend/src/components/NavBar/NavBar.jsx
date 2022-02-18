import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="ligth">
      <Navbar.Brand href="#home">
        Dice Roller
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/home">Home</Link>         
          <NavDropdown.Divider />
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <Link to = '/filter'>
                Action
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to = '/filter'>
                Action
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to = '/filter'>
                Action
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
