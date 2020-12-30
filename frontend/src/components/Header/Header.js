import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import UserDropdown from "./UserDropdown";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#home">Blogging App</Navbar.Brand>
        <div className="userDropdown2">
          <UserDropdown />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">My Blogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="userDropdown1">
          <UserDropdown />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
