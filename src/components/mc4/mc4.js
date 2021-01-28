import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import "./mc4.css";
import AButton from "../button/button";

class MiniChallenge4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      sum: false,
      result: "",
    };
  }

  compareUs(x, y) {

    if (parseFloat(x) > parseFloat(y)) {
      this.setState({
        result:
          `${x} is greater than ${y}, which means ${y} is less than ${x}. Uh, duh!`,
      });
    } else if (parseFloat(x) < parseFloat(y)) {
      this.setState({
        result:
          `${x} is less than ${y}, which means ${y} is greater than ${x}. Uh, duh!`,
      });
    } else {
      this.setState({
        result:
          `When two numbers are the same, that makes them equal. Nothing else to see here, folks. Move along...`,
      });
    }
  }

  validateMe = () => {
    const nums1 = document.getElementById("num1").value;
    const nums2 = document.getElementById("num2").value;
    if (nums1 === "" || nums2 === "") {
      this.setState({
        result: `Uh oh, make sure both fields are filled, and try again!`,
      });
    } else {
      this.compareUs(nums1, nums2);
    }
  };

  render() {
    return (
      <div className="bg4 slideUp height100">
        <Container>
          <Row>
            <Col>
              <h1>MINI 4</h1>
              <h3>{`greater than / less than / equal to`}</h3>
              <h1>{`>=<`}</h1>
            </Col>
          </Row>
          <Form.Group>
            <Form.Control
              id="num1"
              size="lg"
              type="number"
              placeholder="Number 1"
              className="mb-3"
            />
            <Form.Control
              id="num2"
              size="lg"
              type="number"
              placeholder="Number 2"
            />
          </Form.Group>

          <Row>
            <Col>
              <AButton
                variant="warning"
                onClick={this.validateMe}
                message="Judge Us!"
              />
            </Col>
          </Row>

          <Row className="my-3">
            <Col>
              <p>
                {!this.state.result
                  ? "Waiting..."
                  : `Verdict is: ${this.state.result}`}
              </p>
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default MiniChallenge4;

// Pak ganern ang ganda naman yung effects nito...
// Let's see what this one looks like...
// this really is like sizzling with this puff of smoke coming out of the top At least you won't lose your spot when you're in VS Code jamming out to some Puff the Magic Dragon