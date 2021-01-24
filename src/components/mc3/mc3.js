import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import "./mc3.css";

class MiniChallenge3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      sum: false,
    };
  }

  validateMe = () => {
    // document.getElementById("")
    console.log("test");
    if (
      document.getElementById("num1").value === "" ||
      document.getElementById("num2").value === ""
    ) {
      alert(`Uh oh, make sure both fields are filled using NUMBERS only, and try again!`);
    } else {
      this.setState({
        num1: document.getElementById("num1").value,
        num2: document.getElementById("num2").value,
        sum: true,
      });
    }
  };

  render() {
    return (
      <div className="bg3 slideUp height100">
        <Container>
          <Row>
            <Col>
            <h1>MINI 3</h1>
        <p>mini sum thing</p>
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
              <Button onClick={this.validateMe}>Sum It Up!</Button>
            </Col>
          </Row>

          <Row className="my-3">
            <Col>
              <h2>{!this.state.sum
                ? "Waiting..."
                : `${this.state.num1} + ${this.state.num2} = ${parseFloat(this.state.num1) + parseFloat(this.state.num2)}`}</h2>
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
