import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import "./mc6.css";
import Button from "../../shared/button/button";
import FormField from "../../shared/formControl/formControl";
class MiniChallenge6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numSelected: "",
      message: "",
    };
  }

  validateMe = (number) => {

    let lastDigit = parseInt(number[number.length - 1]);
    // console.log(number, lastDigit);

    if (!number) {
      this.setState({
        message: `You had one job...just give me any REAL number.`,
      });
    } else {
      Math.abs(lastDigit % 2) === 1
        ? this.setState({
            message: `${number} is an odd number.`,
          })
        : this.setState({
            message: `${number} is an even number.`,
          });
    }
  };

  handleChange = (event) => {
    this.setState({ numSelected: event.target.value });
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
              placeholder="Your Number..."
              name="userInput"
              type="number"
              size="lg"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Row>
            <Col>
              <Button
                variant="warning"
                onClick={() => this.validateMe(this.state.numSelected)}
                message="CHECK NUMBER"
              />
            </Col>
          </Row>

          <Row className="my-3">
            <Col>
              <h2 className="pulse">
                {!this.state.message
                  ? "Waiting..."
                  : `Beep boop...${this.state.message}`}
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MiniChallenge6;
