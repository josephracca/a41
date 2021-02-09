import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import "./mc5.css";
import Button from "../../shared/button/button";
import FormField from "../../shared/formControl/formControl";

const lib1 = [
  { wordNum: "w1", name: "First Adjective" },
  { wordNum: "w2", name: "First Noun" },
  { wordNum: "w3", name: "Another Adjective" },
  { wordNum: "w4", name: "First Verb" },
  { wordNum: "w5", name: "A...Plural Noun" },
  { wordNum: "w6", name: "A second Plural Noun" },
  { wordNum: "w7", name: "...and a third Plural Noun" },
  { wordNum: "w8", name: "and a fourth Plural Noun" },
  { wordNum: "w9", name: "Next Verb" },
  { wordNum: "w10", name: "...a second noun" },
  { wordNum: "w11", name: "Verb 3" },
  { wordNum: "w12", name: "LAST Plural Noun" },
  { wordNum: "w13", name: "and one last noun!" },
];

const allWords = document.getElementsByClassName("wordsAll");
const inputWords = [];

const FieldGroup = () => {
  return (
    <>
      {lib1.map((info, idx) => (
        <FormField {...info} name={info.name} key={idx} className="mt-3 wordsAll" type="text"/>
      ))}
    </>
  );
};
class MiniChallenge5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: false,
      result: "",
      wordsArray: []
    };
  }

  readValues = () => {
    for (let i = 0; i < allWords.length; i++) {
      inputWords.push(allWords[i].value);
    }

    if (inputWords.includes("")) {
      alert("You have an empty field...");
    } else {
      this.setState({
        result: `Spring is a(n) ${inputWords[0]} time of the year to plant a(n) ${inputWords[1]}, after the ${inputWords[2]} frost. First, ${inputWords[3]} the dirt using ${inputWords[4]} and ${inputWords[5]} so you can plant ${inputWords[6]}. ${inputWords[7]} ${inputWords[8]}, ${inputWords[9]} them, and watch them ${inputWords[10]} until summer or fall. ${inputWords[11]} grow in a few weeks, whereas Halloween ${inputWords[12]} may take months but it's worth the wait!`,
      });
    }
  };

  render() {
    return (
      <div className="bg5 slideUp">
        <Container className="endOftheRoad">

          <Row>
            <Col>
              <h1>MINI 5</h1>
              <h2> MADLIB GENERATOR </h2>
            </Col>
          </Row>

          <Form.Group>
            <FieldGroup />
          </Form.Group>

          <Row>
            <Col>
              <Button
                variant="warning"
                onClick={this.readValues}
                message="Generate MadLib Now!"
              />
            </Col>
          </Row>

          <Row className="my-5">
            <Col>
              <p className="pulse">
                {!this.state.result
                  ? "Waiting..."
                  : `YOUR MADLIB...${this.state.result}`}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MiniChallenge5;

//TO-DO: turn the madlib into a modal of some kind...