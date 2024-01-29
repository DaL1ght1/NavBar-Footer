import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import logo from "/src/components/logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <a>
            <img
              src={logo}
              alt="Company Logo"
              className="logo"
              width="200"
              height="100"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/home" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink
              to="/program"
              className="nav-link"
              activeClassName="active"
            >
              Program
            </NavLink>
            <NavLink
              to="/aboutus"
              className="nav-link"
              activeClassName="active"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contactus"
              className="nav-link"
              activeClassName="active"
            >
              Contact Us
            </NavLink>
          </Nav>
          <Nav>
            <NavLink
              to="/registration"
              className="nav-link"
              activeClassName="active"
              style={{
                backgroundColor: "#1d202b",
                color: "#feda5e",
                borderRadius: "5rem",
              }}
            >
              Registration
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
