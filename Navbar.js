import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./style.css";

// import images
import logo_light from "../images/logo-white-solid.svg";

import "../font.css";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const [fixedNav, setFixedNav] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        setFixedNav(self.progress > 0);
      }
    });
  }, []);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`bg-body-tertiary menubar ${fixedNav ? "is-sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo_light} alt="alpinslogo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="site_menu">
              <Nav.Link href="#home" className="mx-3 ">
                HOME
              </Nav.Link>
              <Nav.Link href="#pages" className="mx-3 ">
                PAGES
              </Nav.Link>
              <Nav.Link href="#treks" className="mx-2">
                TREKS
              </Nav.Link>
              <Nav.Link href="#blog" className="mx-2">
                BLOG
              </Nav.Link>
              <Nav.Link href="#contacts" className="mx-3 ">
                CONTACTS
              </Nav.Link>
              <NavDropdown title="EN" id="nav-dropdown">
                <NavDropdown.Item href="#action/6.1">IT</NavDropdown.Item>
                <NavDropdown.Item href="#action/6.2">ES</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
