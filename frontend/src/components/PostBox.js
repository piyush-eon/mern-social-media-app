import React, { useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import emotes from "../static/emotes";

const PostBox = ({ userInfo }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFeeling = (f) => {
    handleClose();
    setFeeling(f);
  };

  const [feeling, setFeeling] = useState("Feeling");

  const user = JSON.parse(userInfo);

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col lg={1} xs={2}>
            <img
              style={{ borderRadius: 50 }}
              src={user.pic}
              alt="Piyush Agarwal"
              width="40"
              // height='35'
            />
          </Col>
          <Col lg={11} md={10} xs={10}>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="What's on your mind?"
            ></Form.Control>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        {" "}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "49%" }}>
            <Form.File
              size=""
              // onChange={(e) => postDetails(e.target.files[0])}
              id="custom-file"
              type="image/png"
              label="Photo"
              custom
            />
          </div>
          <div style={{ width: "49%" }}>
            <Button
              className="feelingBtn"
              variant="light"
              style={{ width: "100%" }}
              onClick={handleShow}
            >
              <i style={{ opacity: 0.6 }} className="far fa-laugh-wink"></i>
              &nbsp;
              <span style={{ opacity: 0.6 }}> {feeling}</span>
            </Button>

            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>How are you feeling?</Modal.Title>
              </Modal.Header>
              <Modal.Body className="feelModal">
                {emotes.edges.map((feel) => (
                  <button
                    className="feelOption"
                    onClick={() => handleFeeling(feel.node.object.name)}
                    key={feel.node.object.name}
                  >
                    <img
                      src={`${feel.node.icon.image.uri}`}
                      alt={feel.node.object.name}
                      width="25"
                    />{" "}
                    <span style={{ textTransform: "capitalize" }}>
                      {feel.node.object.name}
                    </span>
                  </button>
                ))}
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
          </div>
        </div>
        <Button variant="success" style={{ width: "100%", marginTop: 10 }}>
          POST
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default PostBox;
