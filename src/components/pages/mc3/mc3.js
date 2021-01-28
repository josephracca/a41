import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "../../../App.css";
import "./mc3.css";



class MiniChallenge3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1Set: "",
      num2Set: "",
      sum: false,
      message: ""
    };
  }

  validateMe = () => {

    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    
    if (
      num1 === "" ||
      num2 === ""
    ) {
      this.setState({message: `Uh oh, make sure both fields are filled and try again!`});
    } else {
      this.setState({
        num1Set: num1,
        num2Set: num2,
        sum: true,
        message: `${num1} + ${num2} = ${
          parseFloat(num1) + parseFloat(num2)
        }`
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
              <h2>mini sum thing</h2>
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
              <Button onClick={this.validateMe}>Sum It Up!</Button>
            </Col>
          </Row>

          <Row className="my-3 pulse">
            <Col>
              <h2>
                {!this.state.message
                  ? "Waiting..."
                  : this.state.message}
              </h2>
            </Col>
          </Row>
          
        </Container>
      </div>
    );
  }
}

export default MiniChallenge3;
