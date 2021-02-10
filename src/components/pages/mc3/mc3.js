import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "../../../App.css";
import "./mc3.css";
import FormField from "../../shared/formControl/formControl";
import Toasty from "../../shared/toast/toast";
import Title from "../../shared/titles/titles"



class MiniChallenge3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      message: "",
      toastAlert: false
    };
  }

  validateMe = () => {
    if (
      this.state.num1 === "" ||
      this.state.num2 === ""
    ) {
      this.setState({message: `Uh oh, make sure you've entered a number into both fields and try again!`, toastAlert: true});
      this.DisappearToast();
    } else {
      this.setState({
        message: `${this.state.num1} + ${this.state.num2} = 
          ${parseInt(this.state.num1) + parseInt(this.state.num2)}`
      });
    }
  };

  DisappearToast = () => {
    setTimeout(() => {
      this.setState({
        toastAlert: false,
        message: "Waiting...",
      });
    }, 3250);
  };

  handleChange = (event) => {
    
    event.target.name === "Number 1"
      ? this.setState({ num1: event.target.value })
      : this.setState({ num2: event.target.value });
  };

  render() {
    return (
      <div className="bg3 slideUp height100">
        <Container>

          <Title title="MINI 3" subtitle="mini sum thing" />
          {this.state.toastAlert && (
                  <Toasty
                    message={this.state.message}
                    showA={this.state.toastAlert}
                  />
                )}

          <Form.Group>

          <FormField
              key="num1"
              size="lg"
              type="number"
              placeholder="Number 1"
              className="mb-3"
              name="Number 1"
              onChange={this.handleChange}
            />
            <FormField
              key="num2"
              size="lg"
              type="number"
              placeholder="Number 2"
              className="mb-3"
              name="Number 2"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Row>
            <Col>
              <Button variant="warning" onClick={this.validateMe}>Sum It Up!</Button>
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
