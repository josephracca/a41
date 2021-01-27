import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import "./mc6.css";
import AButton from "../button/button";
import FormField from "../formControl/formControl";
class MiniChallenge6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numSelected: "",
      result: "",
    };
  }

  validateMe = () => {
    let numInput = document.getElementById("Your Number...").value;
    let lastDigit = numInput[numInput.length-1];

    if (!numInput) {
      this.setState({result: `You had one job...just give me any REAL number.`});
    } else {
      if (Math.abs(lastDigit % 2) === 1) {
        this.setState({ result: `${numInput} is an odd number.` });
      } else {
        this.setState({ result: `${numInput} is an even number.` });
      }
    }
  };

  checkStatus = () => {
    if (this.state.numSelected % 2 === 1) {
      return "is an odd number.";
    } else {
      return "is an even number.";
    }
  };

  render() {
    return (
      <div className="bg6 slideUp height100">
        <Container>
          <Row>
            <Col>
              <h1>MINI 6</h1>
              <h2> ODD'R EVEN </h2>
            </Col>
          </Row>
          <Form.Group>
            <FormField
              id="Your Number..."
              name="Your Number..."
              type="number"
              size="lg"
            />
          </Form.Group>

          <Row>
            <Col>
              <AButton
                variant="warning"
                onClick={this.validateMe}
                message="CHECK NUMBER"
              />
            </Col>
          </Row>

          <Row className="my-3">
            <Col>
              <h2>
                {!this.state.result
                  ? "Waiting..."
                  : `Beep boop...${this.state.result}`}
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MiniChallenge6;
