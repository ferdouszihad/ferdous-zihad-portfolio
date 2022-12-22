import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <span className="text-light">FZ-PORTFOLIO</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex flex-column flex-lg-row gap-5">
            <Link to="/home" className="text-light  nav-btn">
              HOME
            </Link>
            <Link to="/about" className="text-light  nav-btn">
              ABOUT ME
            </Link>
            <a href="home#projects" className="text-light  nav-btn">
              PROJECTS
            </a>
            <Link to="/blog" className="text-light  nav-btn">
              BLOGS
            </Link>
            <a href="home#contact" className="text-light  nav-btn">
              CONTACT
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
