import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import "./mc4.css";
import AButton from "../button/button";

class MiniChallenge3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      sum: false,
      result: "",
    };
  }

  compareUs() {
    // this.setState({result: "true"});
    // console.log(this.state.num1);
    if (
      parseFloat(document.getElementById("num1").value) >
      parseFloat(document.getElementById("num2").value)
    ) {
      this.setState({
        result:
          "Your first number is greater than your second number.\n\nYour second number is less than your first number.",
      });
    } else if (
      parseFloat(document.getElementById("num1").value) <
      parseFloat(document.getElementById("num2").value)
    ) {
      this.setState({
        result:
          "Your first number is less than your second number.\n\nYour second number is less than your first number.",
      });
    } else {
      this.setState({
        result:
          "Your first and second number are equal. Nothing to see here, folks. Move along.",
      });
    }
  }


  validateMe = () => {
    // document.getElementById("")
    // console.log("test");
    if (
      document.getElementById("num1").value === "" ||
      document.getElementById("num2").value === ""
    ) {
      alert(
        `Uh oh, make sure both fields are filled using NUMBERS only, and try again!`
      );
    } else {
      // this.setState({
      //   num1: document.getElementById("num1").value,
      //   num2: document.getElementById("num2").value,
      //   // sum: true,

      // });
      //call function that compares
      this.compareUs();
    }
  };

  render() {
    return (
      <div className="bg4">
        <Container>
          <Row>
            <Col>
              <h1>MINI 4</h1>
              <p> greater than or equal to </p>
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

          {/* <Row>
    <Col>
    <span id="sum">SUM HERE</span>
    </Col>
</Row> */}

          <Row>
            <Col>
              {/* <Button onClick={this.validateMe}>Judge Us!</Button> */}
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

export default MiniChallenge3;
