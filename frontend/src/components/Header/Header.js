import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import UserDropdown from "./UserDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand>
          <Link to="/">Social Media App</Link>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signup">Sign Up</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="userDropdown2">{/* <UserDropdown /> */}</div>
        {/* <>
          <div className="userDropdown2">
            <UserDropdown />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">My Posts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="userDropdown1">
            <UserDropdown />
          </div>
        </> */}
      </Container>
    </Navbar>
  );
};

export default Header;
