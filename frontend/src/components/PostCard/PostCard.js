import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./PostCard.css";

const PostCard = () => {
  const [commentToggle, setCommentToggle] = useState(false);
  const [likeToggle, setLikeToggle] = useState(false);

  return (
    <Card style={{ marginTop: 10 }}>
      <Card.Header>
        {" "}
        <Card.Link className="postHeader" href="#">
          <img
            src="https://image.flaticon.com/icons/png/512/147/147144.png"
            alt="Piyush Agarwal"
            width="30"
          />
          <span className="PostUsername">Piyush Agarwal</span>
        </Card.Link>
      </Card.Header>
      <Card.Body>
        <span>Here's my dream car. Which one is your favorite?</span>
        <img
          className="postImg"
          src="https://i.insider.com/5d9b5bff52887931e8497a36?width=1405"
          width="100%"
          alt="car"
        />
        <hr />
        <div style={{ display: "flex" }}>
          <Button
            onClick={() => setLikeToggle(!likeToggle)}
            style={{ marginRight: 10, flex: 1 }}
            variant={likeToggle ? "primary" : "light"}
          >
            {likeToggle ? (
              <i className="fas fa-thumbs-up"></i>
            ) : (
              <i className="far fa-thumbs-up"></i>
            )}{" "}
            Like
          </Button>
          <Button
            style={{ flex: 1 }}
            onClick={() => setCommentToggle(!commentToggle)}
            variant={commentToggle ? "primary" : "light"}
          >
            {commentToggle ? (
              <i className="fas fa-comment"></i>
            ) : (
              <i className="far fa-comment"></i>
            )}{" "}
            Comment
          </Button>
        </div>
        {/* comments div */}
        <div style={{ paddingTop: 10 }}>
          <div className="singleComment">
            {" "}
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/avatar-373-456325.png"
              alt="Piyush Agarwal"
              width="22"
            />
            <div>
              <span className="singleComment--name">Random Person : </span>
              <span className="singleComment--content">Wow, That's Dope</span>
            </div>
          </div>
          <div className="singleComment">
            {" "}
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/avatar-373-456325.png"
              alt="Piyush Agarwal"
              width="22"
            />
            <div>
              <span className="singleComment--name">Second One : </span>
              <span className="singleComment--content">Looks Amazing</span>
            </div>
          </div>
          <div className="singleComment">
            {" "}
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/avatar-373-456325.png"
              alt="Piyush Agarwal"
              width="22"
            />
            <div>
              <span className="singleComment--name">Third Guy : </span>
              <span className="singleComment--content">Mine too</span>
            </div>
          </div>
        </div>
        {commentToggle && (
          <div style={{ marginTop: 10, display: "flex" }}>
            <Form.Control rows={2} placeholder="Write a comment.." />
            <Button style={{ marginLeft: 10 }}>
              <i className="fas fa-arrow-right"></i>
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default PostCard;
