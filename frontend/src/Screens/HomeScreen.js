import React from "react";
import { Col } from "react-bootstrap";
import "./HomeScreen.css";
import MainScreen from "../components/MainScreen/MainScreen";

export const HomeScreen = () => {
  return (
    <MainScreen>
      <Col xs={12} md={8} lg={8}>
        Home Page
      </Col>
      <Col className="d-none d-md-block ">
        <div className="newsSection">News</div>
      </Col>
    </MainScreen>
  );
};
