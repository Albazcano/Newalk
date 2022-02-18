import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import style from './NavBar.module.css';

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="ligth">
      <Link to="/home" className={style.containerImage}>
        <img src="" alt='Logo Newalk'></img>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/home" className={style.links}>Inicio</Link>         
          <NavDropdown.Divider />
          <NavDropdown title="Marcas" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <Link to = '/filter' className={style.links}>
                Marca 1
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to = '/filter' className={style.links}>
                Marca 2
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to = '/filter' className={style.links}>
                Marca 3
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
