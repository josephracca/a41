import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./mc5.css";
import Button from "../../shared/button/button";
import FormField from "../../shared/formControl/formControl";
import Bubble from "../../../images/chatBubble.png";
import Toasty from "../../shared/toast/toast";
import Title from "../../shared/titles/titles";

class MiniChallenge5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      w1: "",
      w2: "",
      w3: "",
      w4: "",
      w5: "",
      w6: "",
      w7: "",
      w8: "",
      w9: "",
      w10: "",
      w11: "",
      w12: "",
      w13: "",
      show: false,
      toastAlert: false,
      lib1: [
        { name: "1", placeholder: "First Adjective" },
        { name: "2", placeholder: "First Noun" },
        { name: "3", placeholder: "Another Adjective" },
        { name: "4", placeholder: "First Verb" },
        { name: "5", placeholder: "A...Plural Noun" },
        { name: "6", placeholder: "A second Plural Noun" },
        { name: "7", placeholder: "...and a third Plural Noun" },
        { name: "8", placeholder: "and a fourth Plural Noun" },
        { name: "9", placeholder: "Next Verb" },
        { name: "10", placeholder: "...a second noun" },
        { name: "11", placeholder: "Verb 3" },
        { name: "12", placeholder: "LAST Plural Noun" },
        { name: "13", placeholder: "and one last noun!" },
      ],
      allWords: document.getElementsByClassName("wordsAll"),
      inputWords: [],
    };
  }

  FieldGroup = () => {
    return (
      <>
        {this.state.lib1.map((info) => (
          <Col sm={6} md={4}>
            <FormField
              {...info}
              className="mt-3 wordsAll"
              type="text"
              onChange={this.handleChange}
            />
          </Col>
        ))}
      </>
    );
  };

  handleChange = (event) => {
    event.target.name === "1"
      ? this.setState({ w1: event.target.value })
      : event.target.name === "2"
      ? this.setState({ w2: event.target.value })
      : event.target.name === "3"
      ? this.setState({ w3: event.target.value })
      : event.target.name === "4"
      ? this.setState({ w4: event.target.value })
      : event.target.name === "5"
      ? this.setState({ w5: event.target.value })
      : event.target.name === "6"
      ? this.setState({ w6: event.target.value })
      : event.target.name === "7"
      ? this.setState({ w7: event.target.value })
      : event.target.name === "8"
      ? this.setState({ w8: event.target.value })
      : event.target.name === "9"
      ? this.setState({ w9: event.target.value })
      : event.target.name === "10"
      ? this.setState({ w10: event.target.value })
      : event.target.name === "11"
      ? this.setState({ w11: event.target.value })
      : this.setState({ w12: event.target.value });
  };

  DisappearToast = () => {
    setTimeout(() => {
      this.setState({
        toastAlert: false,
        result: "Waiting...",
      });
    }, 3250);
  };

  readValues = () => {
    for (let i = 0; i < this.state.allWords.length; i++) {
      this.state.inputWords.push(this.state.allWords[i].value);
    }

    if (this.state.inputWords.includes("")) {
      this.setState({
        result: "You have an empty field...",
        toastAlert: true,
        show: false,
      });
      this.DisappearToast();
    } else {
      this.setState({
        result: `Spring is a(n) 
        ${this.state.w1} time of the year to plant a(n) 
        ${this.state.w2}, after the 
        ${this.state.w3} frost. First, 
        ${this.state.w4} the dirt using 
        ${this.state.w5} and 
        ${this.state.w6} so you can plant 
        ${this.state.w7}. 
        ${this.state.w8} 
        ${this.state.w9}, 
        ${this.state.w10} them, and watch them 
        ${this.state.w11} until summer or fall. 
        ${this.state.w12} grow in a few weeks, whereas Halloween 
        ${this.state.w13} may take months but it's worth the wait!`,
        show: true,
      });
    }

    this.setState({ inputWords: [] });
  };

  resetAll = () => {
    this.setState({
      result: "",
      w1: "",
      w2: "",
      w3: "",
      w4: "",
      w5: "",
      w6: "",
      w7: "",
      w8: "",
      w9: "",
      w10: "",
      w11: "",
      w12: "",
      w13: "",
      show: false,
      toastAlert: false,
    });
  };

  EndGame = () => {
    return (
      <>
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={8} className="over">
              <h4 className="mt-5 pulse">
                {!this.state.result
                  ? "Waiting...but I believe in you!"
                  : `${this.state.result}`}
              </h4>
            </Col>
          </Row>
        </Container>
        <Row className="my-5">
          <Col>
            {this.state.show && (
              <img src={Bubble} alt="chatBubble" className="w100"></img>
            )}
          </Col>
        </Row>
        <Row>
          <Col className="mt-4">
            <Button
              variant="dark"
              onClick={this.resetAll}
              message="Generate New Story!"
            />
          </Col>
        </Row>
      </>
    );
  };

  WordBlanks = () => {
    return (
      <>
        <Row className="mb-3">
          <this.FieldGroup />
        </Row>
        <Row>
          {this.state.toastAlert && (
            <Toasty message={this.state.result} showA={this.state.toastAlert} />
          )}
        </Row>
        <Row>
          <Col>
            <Button
              variant="dark"
              onClick={this.readValues}
              message="Generate MadLib Now!"
            />
          </Col>
        </Row>
      </>
    );
  };

  Waiting = () => {
    return <h3 className="pulse mt-3">waiting...</h3>;
  };

  render() {
    return (
      <div className="bg5 slideRight">
        <Container className="endOftheRoad zoomer">
          <Title title="MINI 5" subtitle="MADLIB GENERATOR" />{" "}
          {!this.state.show && <this.WordBlanks />}
          {this.state.show === true ? <this.EndGame /> : <this.Waiting />}
        </Container>
      </div>
    );
  }
}

export default MiniChallenge5;
