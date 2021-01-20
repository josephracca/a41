import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "../../App.css";

class MiniChallenge1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      message: "",
    };
  }

  validateMe = () => {
    // document.getElementById("")
    console.log("test");
    if (
      document.getElementById("firstName").value === "" ||
      document.getElementById("lastName").value === ""
    ) {
      alert("Uh oh, make sure both fields are filled, and try again!");
    } else {
      this.setState({
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        message: "Uh oh, try again!",
      });
    }
  };

  render() {
    return (
      <>
        <p>Welcome!</p>
        <></>
        <></>
        <Container className="d-none">
          <Form.Group>
            <Form.Control
              id="firstName"
              size="lg"
              type="text"
              placeholder="Type your first name here..."
            />
            <Form.Control
              id="lastName"
              size="lg"
              type="text"
              placeholder="Type your last name here..."
            />
          </Form.Group>
          <Row>
            <Col>
              <Button onClick={this.validateMe}>Click here to submit!</Button>
            </Col>
          </Row>

          <Row className="">
            <Col>
              {!this.state.message
                ? "Let's get started, enter your name above then click submit!"
                : `Hello, ${this.state.firstName} ${this.state.lastName}!`}
            </Col>
          </Row>

          <Row>
            <Col className="d-flex justify-content-between">
              <Button>{`< Menu`}</Button>
              <Button>Quit X</Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default MiniChallenge1;
