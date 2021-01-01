import React from "react";
import { Col } from "react-bootstrap";
import "./HomeScreen.css";
import MainScreen from "../../components/MainScreen/MainScreen";
import PostBox from "../../components/PostBox";
import PostCard from "../../components/PostCard/PostCard";
import NewsSection from "../../components/NewsSection/NewsSection";

export const HomeScreen = () => {
  return (
    <MainScreen>
      <Col xs={12} md={8} lg={8}>
        {/* <Card>
          <span style={{ padding: 20 }}>Login to POST</span>
        </Card> */}
        <PostBox />
        <PostCard />
      </Col>
      <Col className="d-none d-md-block">
        <NewsSection />
      </Col>
    </MainScreen>
  );
};
