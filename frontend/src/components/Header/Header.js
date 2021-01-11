import React, { useEffect, useState } from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import UserDropdown from "./UserDropdown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

const Header = () => {
  const [userInfo, setUserInfo] = useState();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    setUserInfo(localStorage.getItem("userInfo"));
  }, [userInfo, dispatch, userLogin]);

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand>
          <Link to="/">Social Media App</Link>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          {!userInfo && (
            <Nav className="ml-auto">
              <Nav.Link href="/login">
                <>Login</>
              </Nav.Link>
              <Nav.Link href="/signup">
                <>Sign Up</>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
        {!userInfo && <div></div>}
        {userInfo && (
          <>
            <div className="userDropdown2">
              <UserDropdown userInfo={userInfo} logoutHandler={logoutHandler} />
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#">My Posts</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="userDropdown1">
              <UserDropdown userInfo={userInfo} logoutHandler={logoutHandler} />
            </div>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
