import React from "react";
import { Container, Row, Col, ButtonGroup } from "react-bootstrap";
import "./mc8.css";
import Button from "../../shared/button/button";
import FormField from "../../shared/formControl/formControl";
import Title from "../../shared/titles/titles"

import Toasty from "../../shared/toast/toast";
class MiniChallenge8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userCurrentGuess: "",
      result: "",
      randomNum: "",
      currentGame: "",
      gameSelect: false,
      theRange: "",
      numberGuesses: 1,
      toastAlert: false,
    };
  }

  evalNum = (numPass) => {
    if (!numPass && numPass !== 0) {
      this.setState({
        result:
          "Whoops, did you mean to leave that blank? I won't count that against you.",
      });
    } else if (numPass < 1 || numPass > this.state.theRange) {
      this.setState({
        result: `"${numPass}" is actually um... OUT of range. To review, the number is between 1 and ${this.state.theRange}`,
      });
    } else if (numPass !== this.state.randomNum) {
      if (numPass < this.state.randomNum) {
        this.setState({
          result: `Your guess "${numPass}" is lower than the correct number.`,
        });
      } else if (numPass > this.state.randomNum) {
        this.setState({
          result: `Your guess "${numPass}" is higher than the correct number.`,
        });
      }
      this.setState({ numberGuesses: this.state.numberGuesses + 1 });
    } else {
      this.setState({
        result: `"${this.state.randomNum}" is right! It took you ${
          this.state.numberGuesses
        } guess${this.state.numberGuesses > 1 ? `es` : ``}.`,
      });
    }
  };

  SetNumber = (props) => {
    if (!props) {
      this.setState({
        result: "Nothing was entered for custom game! Try again.",
        toastAlert: true,
      });
      this.DisappearToast();
    } else if (props < 0) {
      this.setState({
        result: "Ooh, no negativity here please.",
        toastAlert: true,
      });
      this.DisappearToast();
    } else if (props === "0") {
      this.setState({ result: "Ooh, no zeros please.", toastAlert: true });
      this.DisappearToast();
    } else {
      this.setState({
        randomNum: Math.ceil(Math.random() * props),
        gameSelect: true,
        currentGame: `Got it! I've selected a number between 1 and ${props}...`,
        result: `Start guessing!`,
        theRange: props,
      });
    }
  };

  ResetAll = () => {
    this.setState({
      userCurrentGuess: "",
      result: "",
      randomNum: "",
      currentGame: "",
      gameSelect: false,
      theRange: "",
      numberGuesses: 1,
      toastAlert: false,
    });
  };

  GameChoices = () => {
    return (
      <Row>
        <Col xs="12" id="gameSelect">
          <ButtonGroup aria-label="Basic example">
            <Button
              classes="px-4"
              onClick={() => this.SetNumber(10)}
              variant="dark"
              number="10"
              message="Easy"
            />
            <Button
              classes="px-4"
              onClick={() => this.SetNumber(50)}
              variant="dark"
              number="50"
              message="Medium"
            />
            <Button
              classes="px-4"
              onClick={() => this.SetNumber(100)}
              variant="dark"
              number="100"
              message="Hard"
            />
          </ButtonGroup>
          <FormField
            id="Custom Number"
            name="Custom Number"
            type="number"
            size="lg"
            className="mt-4"
            onChange={this.handleChange}
          />
          <Button
            onClick={() => this.SetNumber(this.state.theRange)}
            classes="mt-3"
            variant="dark"
            number="10"
            message="Play With This Number"
          />
        </Col>
      </Row>
    );
  };

  ResetBtn = () => {
    return (
      <Button
        variant="danger"
        onClick={this.ResetAll}
        message="Start New Game"
        classes="mt-5"
      />
    );
  };

  GuessingArea = () => {
    return (
      <>
        <h4>{`Guess # ${this.state.numberGuesses}`}</h4>
        <Col className="paddingTop">
          <FormField
            id="Guess here!"
            name="Guess here!"
            type="number"
            size="lg"
            onChange={this.handleChange}
          />
          {!this.state.result.includes("right") && (
            <Button
              variant="warning"
              onClick={() => this.evalNum(this.state.userCurrentGuess)}
              message="Check your guess!"
              classes="mt-3"
            />
          )}
        </Col>
      </>
    );
  };

  handleChange = (event) => {
    event.target.name === "Custom Number"
      ? this.setState({ theRange: event.target.value })
      : this.setState({ userCurrentGuess: parseInt(event.target.value) });
  };

  DisappearToast = () => {
    setTimeout(() => {
      this.setState({
        toastAlert: false,
        result: "Waiting...",
      });
    }, 3250);
  };

  render() {
    return (
      <div className="bg8 slideUp">
        <Container>
          <Title title="MINI 8" subtitle="GUESS IT" />
          <Row className="mt-3">
            <Col xs="12">
              {this.state.toastAlert && (
                <Toasty
                  message={this.state.result}
                  showA={this.state.toastAlert}
                />
              )}
              <h3>
                {!this.state.currentGame
                  ? `I'll pick a random number and you try to guess it. Ready to play? Select difficulty level or use your own number for an extra challenge.`
                  : this.state.currentGame}
              </h3>
            </Col>
          </Row>
          {!this.state.gameSelect && <this.GameChoices />}
          <Row>
            <Col>
              {this.state.gameSelect && <this.GuessingArea />}
              <Col>
                <h2 className="pulse paddingTop">
                  {!this.state.result
                    ? "Waiting for your game choice..."
                    : `${this.state.result}`}
                </h2>
                {this.state.gameSelect && <this.ResetBtn />}
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MiniChallenge8;