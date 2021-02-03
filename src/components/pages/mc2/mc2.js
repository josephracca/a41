import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import ValidateString from "../../validation/validation";
import "./mc2.css";
import Toasty from "../../shared/toast/toast";
class MiniChallenge2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      awakeTime: "",
      message: "",
      toastAlert: false,
    };
  }

  DisappearToast = () => {
    setTimeout(() => {
      this.setState({
        toastAlert: false,
        message: "Waiting...",
      });
    }, 3250);
  };

  validateMe = () => {
    if (this.state.firstName === "" || this.state.awakeTime === "") {
      this.setState({
        message: "Uh oh, make sure BOTH fields are complete, then try again!",
        toastAlert: true
      });
      this.DisappearToast();
    } else if (ValidateString(this.state.firstName)) {
      this.setState({
        message: "No numbers allowed in your name, try again...",
        toastAlert: true
      });
      this.DisappearToast();
    } else {
      this.setState({
        message: `Good morrow, ${this.state.firstName}! You woke up at ${this.state.awakeTime}!? (Relatively late...)`,
      });
    }
  };

  handleChange = (event) => {
    event.target.name === "firstName"
      ? this.setState({ firstName: event.target.value })
      : this.setState({ awakeTime: event.target.value });
  };

  render() {
    return (
      <div className="bg2 slideRight height100">
        <Container>

          <Row>
            <Col>
              <h1>MINI 2</h1>
              <h2>rise+grind</h2>
            </Col>
          </Row>

          <Form.Group>
          {this.state.toastAlert && (
                  <Toasty message={this.state.message} showA={this.state.toastAlert}/>
                )}
            <Form.Control
              name="firstName"
              size="lg"
              type="text"
              placeholder="First name here..."
              onChange={this.handleChange}
              className="mb-3"
            />
            <Form.Control
              name="awakeTime"
              size="lg"
              type="time"
              placeholder="Wake up time today?"
              onChange={this.handleChange}
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
