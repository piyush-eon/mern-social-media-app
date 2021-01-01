import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Screen.css";

function MainScreen({ children, title, style }) {
  return (
    <div className="mainback" style={style}>
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
