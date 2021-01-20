import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import "../mc1/mc1.css";

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
      <div className="bg">
        <h1>MINI 1</h1>
        <p>Welcome!</p>
        <></>
        <></>
        <Container className="">
          <Row>
            <Col>
              {" "}
              <Form.Group>
                <Form.Control
                  id="firstName"
                  size="lg"
                  type="text"
                  placeholder="First Name..."
                  className="mb-3"
                />
                <Form.Control
                  id="lastName"
                  size="lg"
                  type="text"
                  placeholder="Last Name..."
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={this.validateMe}>Submit!</Button>
            </Col>
          </Row>

          <Row className="my-5">
            <Col>
              {!this.state.message
                ? "waiting..."
                : `Hello, ${this.state.firstName} ${this.state.lastName}!`}
            </Col>
          </Row>

          {/* <Row>
            <Col className="d-flex justify-content-between">
              <Button>{`< Menu`}</Button>
              <Button>Quit X</Button>
            </Col>
          </Row> */}
        </Container>
      </div>
    );
  }
}

export default MiniChallenge1;
