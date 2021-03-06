import React from "react";
import { Col, Row, Toast } from "react-bootstrap";
import "./toast.css";
class TostiLocos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showA: props.showA,
      message: props.message,
    };
  }

  render() {
    return (
      <Row className="mb-3 toastFont">
        <Col xs={12}>
          <Toast show={this.state.showA} delay={2750} autohide>
            <Toast.Header className="redBG white">
              <strong className="mr-auto">Ooh, well das awkward...</strong>
            </Toast.Header>
            <Toast.Body className="textDark">{this.state.message}</Toast.Body>
          </Toast>
        </Col>
      </Row>
    );
  }
}

export default TostiLocos;
