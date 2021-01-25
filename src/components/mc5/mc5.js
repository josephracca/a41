import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
// import "../../App.css";
import "./mc5.css";
import AButton from "../button/button";
import FormField from "../formControl/formControl";

// need to figure out how to do a .map on this one...

const lib1 = [
  { type: "text", name: "Plural Noun 1" },
  { type: "text", name: "Plural Noun 2" },
  { type: "text", name: "Plural Noun 3" },
  { type: "text", name: "Plural Noun 4" },
  { type: "text", name: "Plural Noun 5" },
  { type: "text", name: "Adjective 1" },
  { type: "text", name: "Adjective 2" },
  { type: "text", name: "Noun 1" },
  { type: "text", name: "Noun 2" },
  { type: "text", name: "Noun 3" },
  { type: "text", name: "Verb 1" },
  { type: "text", name: "Verb 2" },
  { type: "text", name: "Verb 3" },
];

const allWords = document.getElementsByClassName("wordsAll");
const inputWords = [];

const FieldGroup = (props) => {
  return (
    <>
      {lib1.map((info) => (
        <FormField {...info} />
      ))}
    </>
  );
};
class MiniChallenge5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      sum: false,
      result: "",
    };
  }

  validateMe = () => {
    if (
      document.getElementById("num1").value === "" ||
      document.getElementById("num2").value === ""
    ) {
      alert(
        `Uh oh, make sure both fields are filled using NUMBERS only, and try again!`
      );
    } else {
    }
  };

  readValues = () => {
    for (let i = 0; i < allWords.length; i++) {
      inputWords.push(allWords[i].value);
    }

    if (inputWords.includes("")) {
      console.log("true");
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
        <Container className="mb-5 endOftheRoad">

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
              <AButton
                variant="warning"
                onClick={this.readValues}
                message="Generate MadLib Now!"
              />
            </Col>
          </Row>

          <Row className="my-5">
            <Col>
              <p>
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
