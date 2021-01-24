import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
// import "../../App.css";
import "./mc6.css";
import AButton from "../button/button";
import FormField from "../formControl/formControl";

// need to figure out how to do a .map on this one...

class MiniChallenge6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numSelected: "",
      result: "",
    };
  }

  validateMe = () => {
    // console.log(numInput.value);
    let numInput = document.getElementById("Your Number...");

    if (!numInput.value) {
      alert(`You had one job...just give me any number.`);
    } else {
      console.log(numInput.value);

      if (Math.abs(numInput.value % 2) === 1) {
        this.setState({ result: `${numInput.value} is an odd number.` });
      } else {
        this.setState({ result: `${numInput.value} is an even number.` });
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

  // generateBtn = () => {
  //     };

  render() {
    return (
      <div className="bg6 slideUp">
        <Container>
          <Row>
            <Col>
              <h1>MINI SIX</h1>
              <p> ODD'R EVEN </p>
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
              <p>
                {!this.state.result
                  ? "Waiting..."
                  : `Beep boop...check returns...${this.state.result}`}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MiniChallenge6;
