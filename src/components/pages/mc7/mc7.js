import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./mc7.css";
import Button from "../../shared/button/button";
import FormField from "../../shared/formControl/formControl";

import JohnMayer from "../../../images/JMayer.png";

class MiniChallenge7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 2,
      result: "",
    };
  }

  reverseIt = () => {
    const captured = document.getElementById(
      "You can type just about anything here!"
    ).value;

    if (captured === "") {
      this.setState({ result: `Nice try, but there's nothing to reverse...` });
    } else {
      let reverse = "";

      for (let i = captured.length - 1; i >= 0; i--) {
        reverse = reverse + captured[i];
      }
      captured === reverse
        ? this.setState({
            result: `(ooh a palindrome, I see what you did there...): ${reverse}`,
          })
        : this.setState({ result: `Es rever ni: ${reverse}` });
    }
  };

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
                <FormField
                  id="You can type just about anything here!"
                  name="You can type just about anything here!"
                  type="string"
                  size="lg"
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
                  {!this.state.result
                    ? "Waiting on the world to change..."
                    : `${this.state.result}`}
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
