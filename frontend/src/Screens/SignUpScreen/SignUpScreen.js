import React, { useState } from "react";
import "./SignUpScreen.css";
import MainScreen from "../../components/MainScreen/MainScreen";
import { Button, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <MainScreen style={{ backgroundColor: "#2c3e50", color: "white" }}>
      <span className="FormHeadingSmall">
        <>SIGN UP</>
      </span>
      <Col lg={6} md={6} sm={12}>
        <div className="svgArt">
          <img src="/svgs/register.svg" width="100%" />
        </div>
      </Col>
      <Col>
        <Form onSubmit={submitHandler} className="mainForm">
          <span className="FormHeading">SIGN UP</span>
          <Form.Group controlId="formBasicName">
            <Form.Control
              type="text"
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              type="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPic">
            <Form.File
              size=""
              // onChange={(e) => postDetails(e.target.files[0])}
              id="custom-file"
              type="image/png"
              label="Upload your Photo (optional)"
              custom
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
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              Already Have an Account ? &nbsp;
              <Link style={{ color: "orange" }} to="/login">
                Login
              </Link>
            </div>
          </Form.Group>
        </Form>
      </Col>
    </MainScreen>
  );
};

export default SignUpScreen;
