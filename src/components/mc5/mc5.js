import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import "./mc5.css";
import AButton from "../button/button";
import FormField from "../formControl/formControl";

// need to figure out how to do a .map on this one...

let lib1 = [
  {name: "Plural Noun 1"},
  {name: "Plural Noun 2"},
  {name: "Plural Noun 3"},
  {name: "Plural Noun 4"},
  {name: "Plural Noun 5"},
  {name: "Adjective 1"},
  {name: "Adjective 2"},
  {name: "Noun 1"},
  {name: "Noun 2"},
  {name: "Noun 3"},
  {name: "Verb 1"},
  {name: "Verb 2"},
  {name: "Verb 3"},
];

console.log(lib1);

const FieldGroup = (props) => {
  return(
    <>
    {lib1.map(info => 
    <FormField {...info}/>
      )}
    {/* <FormField type="text" placeholder="New field" id="new" /> */}
  </>
  )
};

console.log(FieldGroup);

class MiniChallenge3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      sum: false,
      result: "",
    };
  }

  compareUs() {
    // this.setState({result: "true"});
    // console.log(this.state.num1);
    if (
      parseFloat(document.getElementById("num1").value) >
      parseFloat(document.getElementById("num2").value)
    ) {
      this.setState({
        result:
          "Your first number is greater than your second number.\n\nYour second number is less than your first number.",
      });
    } else if (
      parseFloat(document.getElementById("num1").value) <
      parseFloat(document.getElementById("num2").value)
    ) {
      this.setState({
        result:
          "Your first number is less than your second number.\n\nYour second number is less than your first number.",
      });
    } else {
      this.setState({
        result:
          "Your first and second number are equal. Nothing to see here, folks. Move along.",
      });
    }
  }

  validateMe = () => {
    // document.getElementById("")
    // console.log("test");
    if (
      document.getElementById("num1").value === "" ||
      document.getElementById("num2").value === ""
    ) {
      alert(
        `Uh oh, make sure both fields are filled using NUMBERS only, and try again!`
      );
    } else {
      // this.setState({
      //   num1: document.getElementById("num1").value,
      //   num2: document.getElementById("num2").value,
      //   // sum: true,

      // });
      //call function that compares
      this.compareUs();
    }
  };

  render() {
    return (
      <div className="bg4">
        <Container>
          <Row>
            <Col>
              <h1>MINI 5</h1>
              <p> MADLIB GEN </p>
            </Col>
          </Row>
          <Form.Group>
            {/* <FormField type="text" placeholder="New field" id="new" /> */}
            <FieldGroup />
            {/* dot map these */}
          </Form.Group>

          {/* <Row>
    <Col>
    <span id="sum">SUM HERE</span>
    </Col>
</Row> */}

          <Row>
            <Col>
              {/* <Button onClick={this.validateMe}>Judge Us!</Button> */}
              <AButton
                variant="warning"
                onClick={this.validateMe}
                message="Judge Us!"
              />
            </Col>
          </Row>

          <Row className="my-3">
            <Col>
              <p>
                {!this.state.result
                  ? "Waiting..."
                  : `Verdict is: ${this.state.result}`}
              </p>
            </Col>
          </Row>

          {/* <Row>
            <Col className="d-flex justify-content-between">
              <Button>{`< Menu`}</Button>
              <Button>Quit X</Button>
            </Col>
          </Row> */}
        </Container>
      </div>
    );
  }
}

export default MiniChallenge3;
