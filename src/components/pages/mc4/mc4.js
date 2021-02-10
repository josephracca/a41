import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import "../../../App.css";
import "./mc4.css";
import Button from "../../shared/button/button";
import FormField from "../../shared/formControl/formControl";
import Toasty from "../../shared/toast/toast";
import Title from "../../shared/titles/titles"



class MiniChallenge4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      sum: false,
      result: "",
      toastAlert: false
    };
  }

  DisappearToast = () => {
    setTimeout(() => {
      this.setState({
        toastAlert: false,
        result: "",
      });
    }, 3250);
  };

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
    if (this.state.num1 === "" || this.state.num2 === "") {
      this.setState({
        result: `Uh oh, make sure both fields are filled, and try again!`,
        toastAlert: true
      });
      this.DisappearToast();
    } else {
      this.compareUs(this.state.num1, this.state.num2);
    }
  };

  handleChange = (event) => {
    event.target.name === "num1"
      ? this.setState({ num1: event.target.value })
      : this.setState({ num2: event.target.value });

  };

  render() {
    return (
      <div className="bg4 slideLeft height100">
        <Container>
        <Title title="MINI 4" subtitle={`greater than / less than / equal to`} />
        <p className="emoji">{`>=<`}</p>
        {this.state.toastAlert && (
                <Toasty
                  message={this.state.result}
                  showA={this.state.toastAlert}
                />
              )}
          <Form.Group>

            <FormField
              name="num1"
              size="lg"
              type="number"
              placeholder="Number 1"
              className="mb-3"
              onChange={this.handleChange}
            />
            <FormField
              name="num2"
              size="lg"
              type="number"
              placeholder="Number 2"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Row>
            <Col>
              <Button
                variant="warning"
                onClick={this.validateMe}
                message="Judge Us!"
              />
            </Col>
          </Row>

          <Row className="my-3">
            <Col>
              <h3 className="pulse">
                {!this.state.result
                  ? "Waiting..."
                  : `VERDICT: ${this.state.result}`}
              </h3>
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default MiniChallenge4;