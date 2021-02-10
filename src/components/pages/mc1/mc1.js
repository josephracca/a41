import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import ValidateString from "../../validation/validation";
import "./mc1.css";
import Toasty from "../../shared/toast/toast";
import FormField from "../../shared/formControl/formControl";
import Title from "../../shared/titles/titles"


class MiniChallenge1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
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
    if (this.state.firstName === "" || this.state.lastName === "") {
      this.setState({
        message: "Uh oh, make sure both fields are filled, and try again!",
        toastAlert: true,
      });
      this.DisappearToast();
    } else if (
      ValidateString(this.state.firstName) ||
      ValidateString(this.state.lastName)
    ) {
      this.setState({
        message: "Uh oh, no numbers allowed!",
        toastAlert: true,
      });
      this.DisappearToast();
    } else {
      this.setState({
        message: `Hello, ${this.state.firstName} ${this.state.lastName}!`,
      });
    }
  };

  handleChange = (event) => {
    event.target.name === "First"
      ? this.setState({ firstName: event.target.value })
      : this.setState({ lastName: event.target.value });
  };

  render() {
    return (
      <div className="bg slideLeft height100">
        <Container className="centered smallWidth">
        <Title title="MINI 1" subtitle="Welcome!" />
          <h3>Tell me a little about yourself...</h3>
          <Row>
            <Col xs={12}>
              {" "}
              <div className="mb-3">
                {this.state.toastAlert && (
                  <Toasty
                    message={this.state.message}
                    showA={this.state.toastAlert}
                  />
                )}

                
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
          <Col xs={12} sm={6}>
                <FormField
                  size="lg"
                  type="text"
                  placeholder="First Name..."
                  className="mb-3"
                  onChange={this.handleChange}
                  name="First"
                />
                </Col>
                <Col xs={12} sm={6}>
                <FormField
                  size="lg"
                  type="text"
                  placeholder="Last Name..."
                  onChange={this.handleChange}
                  name="Last"
                />
                </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={this.validateMe} variant="warning">Submit!</Button>
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
