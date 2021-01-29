import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Button from "../../shared/button/button";
//start with constructing a class

import "./mc9.css";

let responses = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes – definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

let buttonResponses = ["Find the Answer to Your Question", "Ask Another", "Another", "And Another", "I need another answer!"]
class MiniChallenge9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "waiting...",
      prompt: "The answer you seek awaits at the index of you.",
      buttonText: "Wait, wait, don't tell me..."
    };
  }

  GetNewAnswer = () => {
    this.setState({
      answer: responses[Math.floor(Math.random() * responses.length)],
      prompt: "You have no limit on answers. Ask another...",
      buttonText: buttonResponses[Math.floor(Math.random() * buttonResponses.length)]
    });
  };

  render() {
    return (
      <>
        <Container fluid className="height100 bg9">
            <Row>
                <Col>
                <h1>MINI 9</h1>
                <h2>Magic [7] Ball</h2>
                </Col>
            </Row>
          <Row className="px-5">
            <Col><h3>{this.state.prompt}</h3></Col>
          </Row>
          <Row>
            <Col>
              <Button
                message={this.state.buttonText}
                onClick={this.GetNewAnswer}
                classes="mt-2"
              />
            </Col>
          </Row>
          <Row className="pulse px-5 mt-5 rotate">
            <Col className="rotateIn"><h2 className="rotateIn">{this.state.answer}</h2></Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default MiniChallenge9;
