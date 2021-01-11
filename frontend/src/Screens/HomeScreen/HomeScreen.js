import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import "./HomeScreen.css";
import MainScreen from "../../components/MainScreen/MainScreen";
import PostBox from "../../components/PostBox";
import PostCard from "../../components/PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import JokeSection from "../../components/JokeSection/JokeSection";

export const HomeScreen = () => {
  const [userInfo, setUserInfo] = useState();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  useEffect(() => {
    setUserInfo(localStorage.getItem("userInfo"));
  }, [userInfo, dispatch, userLogin]);

  return (
    <MainScreen>
      <Col xs={12} md={8} lg={8}>
        {userInfo ? (
          <PostBox userInfo={userInfo} />
        ) : (
          <Card>
            <Link style={{ padding: 20 }} to="/login">
              <span>Login to POST</span>
            </Link>
          </Card>
        )}

        <PostCard />
      </Col>
      <Col className="d-none d-md-block">
        <JokeSection />
      </Col>
    </MainScreen>
  );
};
