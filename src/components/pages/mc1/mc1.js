import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import ValidateString from "../../validation/validation";
import "./mc1.css";
import Toasty from "../../shared/toast/toast";
class MiniChallenge1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      message: "",
      toastAlert: false,
      alert: "",
    };
  }

  DisappearToast = () => {
    setTimeout(() => {
      this.setState({
        toastAlert: false,
      });
    }, 3250);
  };

  validateMe = () => {
    if (this.state.firstName === "" || this.state.lastName === "") {
      this.setState({
        message: "Uh oh, make sure both fields are filled, and try again!",
        toastAlert: true,
      });
    } else if (ValidateString(this.state.firstName) || ValidateString(this.state.lastName)) {
      this.setState({
        message: "Uh oh, no numbers allowed!",
        toastAlert: true,
      });
    } else {
      this.setState({
        message: `Hello, ${this.state.firstName} ${this.state.lastName}!`,
      });
    }
    this.DisappearToast();
  };

  handleChange = (event) => {
    event.target.name === "First" ? this.setState({firstName: event.target.value}) : this.setState({lastName: event.target.value});
  }

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
                {this.state.toastAlert && (
                  <Toasty message={this.state.message} />
                )}
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="First Name..."
                  className="mb-3"
                  onChange={this.handleChange}
                  name="First"
                />
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Last Name..."
                  onChange={this.handleChange}
                  name="Last"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={this.validateMe}>Submit!</Button>
            </Col>
          </Row>
          <Row></Row>
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