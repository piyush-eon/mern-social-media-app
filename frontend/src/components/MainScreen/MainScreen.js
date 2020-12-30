import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Screen.css";

function MainScreen({ children, title }) {
  return (
    <div className="mainback">
      <Container>
        <Row>
          {/* {title && (
              <>
                {" "}
                <h1 className="heading">{title}</h1>
                <hr />
              </>
            )} */}
          {children}
        </Row>
      </Container>
    </div>
  );
}

export default MainScreen;
