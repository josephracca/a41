import React from "react";
import { Row, Col } from "react-bootstrap";

const Titles = (props) => {
  return (
    <Row>
      <Col>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </Col>
    </Row>
  );
};

export default Titles;
