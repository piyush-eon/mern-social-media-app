import React, { useEffect, useState } from "react";
import "./SignUpScreen.css";
import MainScreen from "../../components/MainScreen/MainScreen";
import { Button, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import Compress from "compress.js";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";

const SignUpScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [uploading, setUploading] = useState(false);
  const [picMessage, setPicMessage] = useState(null);

  const postDetails = async (file) => {
    setUploading(true);

    const compress = new Compress();

    const resizedImage = await compress.compress([file], {
      size: 4, // the max size in MB, defaults to 2MB
      quality: 0.75, // the quality of the image, max is 1,
      maxWidth: 1920, // the max width of the output image, defaults to 1920px
      maxHeight: 1920, // the max height of the output image, defaults to 1920px
      resize: true, // defaults to true, set false if you do not want to resize the image width and height
    });
    const img = resizedImage[0];
    const base64str = img.data;
    const imgExt = img.ext;
    const pics = Compress.convertBase64ToFile(base64str, imgExt);

    if (
      pics ===
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    ) {
      setUploading(false);
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "piyushproj");
      fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          setUploading(false);
        })
        .catch((err) => {
          console.log(err);
          setUploading(false);
        });
    } else {
      setUploading(false);
      return setPicMessage("Please Select an Image");
    }
  };

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [dispatch, userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password, pic));
  };

  return (
    <MainScreen style={{ backgroundColor: "#2c3e50", color: "white" }}>
      <span className="FormHeadingSmall">
        <>SIGN UP</>
      </span>
      <Col lg={6} md={6} sm={12}>
        <div className="svgArt">
          <img src="/svgs/register.svg" alt="register" width="100%" />
        </div>
      </Col>
      <Col>
        <Form onSubmit={submitHandler} className="mainForm">
          <span className="FormHeading">SIGN UP</span>
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <Loader />}
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

          {picMessage && (
            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
          )}
          <Form.Group controlId="pic">
            {/* <Form.Label>Profile Picture</Form.Label> */}
            {/* <Form.Control
              type="text"
              placeholder="Enter image url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></Form.Control> */}
            <Form.File
              onChange={(e) => postDetails(e.target.files[0])}
              id="custom-file"
              type="image/png"
              label="Upload Profile Picture (optional)"
              custom
            />
            {uploading && <Loader />}
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
