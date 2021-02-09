import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./mc7.css";
import Button from "../../shared/button/button";
import FormField from "../../shared/formControl/formControl";
import JohnMayer from "../../../images/JMayer.png";
import Toasty from "../../shared/toast/toast";
// import DisappearToast from "../../shared/toast/disappearToast";

class MiniChallenge7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stringEntered: "",
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

  reverseIt = () => {
    if (this.state.stringEntered === "") {
      this.setState({ message: `Nice try, but there's nothing to reverse...`, toastAlert: true });
      this.DisappearToast();
    } else {
      let reverse = "";

      for (let i = this.state.stringEntered.length - 1; i >= 0; i--) {
        reverse = reverse + this.state.stringEntered[i];
      }
      this.state.stringEntered === reverse
        ? this.setState({
            message: `(ooh a palindrome, I see what you did there...): ${reverse}`,
          })
        : this.setState({ message: `Es rever ni: ${reverse}` });
    }
  };

  handleChange = (event) => {
    event.target.name === "userInput" && this.setState({stringEntered: event.target.value})
  }


  render() {
    return (
      <div className="bg7 slideUp">
        <Container>
          <Row>
            <Col>
              <h1>MINI 7</h1>
              <h2> REVERSE IT </h2>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="4" className="wiggle">
              <Image className="width100" src={JohnMayer} />
            </Col>
            <Col>
              <Col className="paddingTop">
              {this.state.toastAlert && (
                  <Toasty
                    message={this.state.message}
                    showA={this.state.toastAlert}
                  />
                )}
                <FormField
                  name="userInput"
                  placeholder="You can type just about anything here!"
                  type="string"
                  size="lg"
                  onChange={this.handleChange}
                />
                <Button
                  variant="warning"
                  onClick={this.reverseIt}
                  message="Reverse it!"
                  classes="mt-3"
                />
              </Col>
              <Col>
                <h2 className="pulse paddingTop">
                  {!this.state.message
                    ? "Waiting on the world to change..."
                    : `${this.state.message}`}
                </h2>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MiniChallenge7;
