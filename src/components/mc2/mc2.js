import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import "./mc2.css";
import ValidateString from "../validation/validation";

let regEx = /[0-9]/;

class MiniChallenge2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      awakeTime: "",
      message: "",
    };
  }

  validateMe = () => {
    // document.getElementById("")
    // console.log("test");
    if (
      document.getElementById("firstName").value === "" ||
      document.getElementById("awakeTime").value === ""
    ) {
      alert("Uh oh, make sure both fields are filled, and try again!");
    } else if (ValidateString(document.getElementById("firstName").value)) {
      alert("No numbers allowed in your name, try again...");
    } else if (!regEx.test(document.getElementById("awakeTime").value)) {
      alert("You didn't enter a number for your wakeup time...");
    } else {
      this.setState({
        firstName: document.getElementById("firstName").value,
        awakeTime: document.getElementById("awakeTime").value,
        message: "Uh oh, try again!",
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
              <h2>
                {!this.state.message
                  ? "Waiting..."
                  : `Good morrow, ${this.state.firstName}! You woke up at ${this.state.awakeTime}!? (Relatively late...)`}
              </h2>
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

export default MiniChallenge2;
