import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import ValidateString from "../validation/validation";
import "./mc1.css";

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
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    this.setState({
      firstName: firstName,
      lastName: lastName,
    });

    console.log("test");
    if (firstName === "" || lastName === "") {
      this.setState({
        message: "Uh oh, make sure both fields are filled, and try again!",
      });
    } else if (ValidateString(firstName) || ValidateString(lastName)) {
      this.setState({
        message: "Uh oh, no numbers allowed!",
      });
    } else {
      this.setState({
        firstName: firstName,
        lastName: lastName,
        message: `Hello, ${firstName} ${lastName}!`,
      });
    }
  };

  render() {
    return (
      <div className="bg slideUp height100">
        <Container className="centered smallWidth">
          <h1>MINI 1</h1>
          <h2>Welcome!</h2>
          <h3>Tell me a little about yourself...</h3>
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
          <Row className="my-5 pulse">
            <Col>
              <h2>
                {!this.state.message ? "waiting..." : `${this.state.message}`}
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MiniChallenge1;
