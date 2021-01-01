import React, { useState } from "react";
import "./LoginScreen.css";
import MainScreen from "../../components/MainScreen/MainScreen";
import { Button, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <MainScreen style={{ backgroundColor: "#2c3e50", color: "white" }}>
      <span className="FormHeadingSmall">
        <>LOGIN</>
      </span>
      <Col lg={6} md={6} sm={12}>
        <div className="svgArt">
          <img src="/svgs/login.svg" width="100%" />
        </div>
      </Col>
      <Col>
        <Form onSubmit={submitHandler} className="mainForm">
          <span className="FormHeading">LOGIN</span>
          <Form.Group controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
          <Form.Group
            controlId="buttons"
            style={{
              marginTop: 15,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="danger"
              size="sm"
              type="submit"
              style={{ width: "49%" }}
            >
              Forgot password?
            </Button>
            <Link style={{ width: "49%" }} to="/signup">
              <Button
                variant="info"
                size="sm"
                type="submit"
                style={{ width: "100%" }}
              >
                Create an Account
              </Button>
            </Link>
          </Form.Group>
        </Form>
      </Col>
    </MainScreen>
  );
};

export default LoginScreen;
