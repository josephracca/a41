import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import ValidateString from "../validation/validation";

import "./mc2.css";

let regEx = /[0-9]/;

class MiniChallenge2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameSet: "",
      awakeTimeSet: "",
      message: "",
    };
  }

  validateMe = () => {
    const firstName = document.getElementById("firstName").value;
    const awakeTime = document.getElementById("awakeTime").value;

    if (firstName === "" || awakeTime === "") {
      this.setState({
        message: "Uh oh, make sure BOTH fields are complete, then try again!",
      });
    } else if (ValidateString(document.getElementById("firstName").value)) {
      this.setState({
        message: "No numbers allowed in your name, try again...",
      });
    } else if (!regEx.test(document.getElementById("awakeTime").value)) {
      alert("You didn't enter a number for your wakeup time...");
    } else {
      this.setState({
        firstNameSet: firstName,
        awakeTimeSet: awakeTime,
        message: `Good morrow, ${firstName}! You woke up at ${awakeTime}!? (Relatively late...)`,
      });
    }
  };

  render() {
    return (
      <div className="bg2 slideUp height100">
        <Container>

          <Row>
            <Col>
              <h1>MINI 2</h1>
              <h2>rise+grind</h2>
            </Col>
          </Row>

          <Form.Group>
            <Form.Control
              id="firstName"
              size="lg"
              type="text"
              placeholder="First name here..."
              className="mb-3"
            />
            <Form.Control
              id="awakeTime"
              size="lg"
              type="time"
              placeholder="Wake up time today?"
            />
          </Form.Group>

          <Row>
            <Col>
              <Button onClick={this.validateMe}>Click here to submit!</Button>
            </Col>
          </Row>

          <Row className="my-3 pulse">
            <Col>
              <h2>{!this.state.message ? "Waiting..." : this.state.message}</h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MiniChallenge2;
