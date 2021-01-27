import React from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import "./mc8.css";
import AButton from "../button/button";
import FormField from "../formControl/formControl";

// let this.state.randomNum;
let numberGuesses = 1;





class MiniChallenge8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userCurrentGuess: "",
            result: "",
            randomNum: "",
            currentGame: "",
            gameSelect: false
        };
    }

    generateRand = () => {
        // let arrayNum = [];
        let userGuessed = parseInt(document.getElementById("Guess here!").value);
        console.log(this.state.randomNum, userGuessed);

        userGuessed !== this.state.randomNum ? this.setState({ result: "true" }) : this.setState({ result: "false" });

        if (!userGuessed) {
            this.setState({ result: "Whoops, did you mean to leave that blank? I won't count that against you." });

        }

        else if (userGuessed !== this.state.randomNum) {
            if (userGuessed < this.state.randomNum) {
                this.setState({ result: `Your guess "${userGuessed}" is lower than the correct number.` });
            }
            else if (userGuessed > this.state.randomNum) {
                this.setState({ result: `Your guess "${userGuessed}" is higher than the correct number.` });
            }
            numberGuesses++;
        } else {
            this.setState({ result: `${this.state.randomNum} is right! It took you ${numberGuesses} guess(es).` });
        }

        // for (let i=1000; i > 0 ; i--){
        //     arrayNum.push(Math.ceil(Math.random()*50));
        // }
        // console.log(arrayNum, arrayNum.includes(1), arrayNum.indexOf(1));
        // console.log(arrayNum, arrayNum.includes(50), arrayNum.indexOf(50));
    };

    EventHandler = (props) => {
        this.state.randomNum = Math.ceil(Math.random() * props);
        this.setState({
            currentGame: `Got it! I've selected a number between 1 and ${props}...`,
            gameSelect: true
        })
        if (!props) {
            alert("nothing entered for custom game!");
        }
        console.log(props, this.state);
    }

    ResetAll = () => {
        this.setState({
            userCurrentGuess: 2,
            result: "",
            randomNum: ""
        })
        console.log(this.state);
    }

    GameChoices = () => {
        return (

            <Row>
                <Col xs="12" id="gameSelect">
                    <ButtonGroup aria-label="Basic example">
                        <AButton classes="px-4" onClick={() => this.EventHandler(10)} variant="dark" number="10" message="Easy" />
                        <AButton classes="px-4" onClick={() => this.EventHandler(50)} variant="dark" number="50" message="Medium" />
                        <AButton classes="px-4" onClick={() => this.EventHandler(100)} variant="dark" number="100" message="Hard" />
                    </ButtonGroup>
                    <FormField
                        id="Custom Number"
                        name="Custom Number"
                        type="number"
                        size="sm"
                    />
                    <AButton onClick={() => this.EventHandler(document.getElementById("Custom Number").value)} classes="mt-3" variant="dark" number="10" message="Play With This Number" />
                    {/* onClicks for these should be an event handler and then it should pass the number associated to the button as the number  */}

                </Col>
            </Row>

        )
    }


    render() {
        return (
            <div className="bg8 slideUp">
                <Container>
                    <Row>
                        <Col xs="12">
                            <h1>MINI 8</h1>
                            <h2> GUESS IT </h2>
                            <h3>{!this.state.currentGame ? `I'll pick a random number and you try to guess it. Wanna play? You can also select difficulty level for an extra challenge.` : this.state.currentGame}</h3>
                        </Col>

                    </Row>

                    {!this.state.gameSelect && <this.GameChoices />}

                    <Row>
                        <Col>
                            <Col className="paddingTop">
                                <FormField
                                    id="Guess here!"
                                    name="Guess here!"
                                    type="number"
                                    size="lg"
                                />
                                <AButton
                                    variant="warning"
                                    onClick={this.generateRand}
                                    message="Check your guess!"
                                    classes="mt-3"
                                />
                            </Col>
                            <Col>
                                <h2 className="pulse paddingTop">
                                    {!this.state.result
                                        ? "Waiting for a guess..."
                                        : `${this.state.result}`}
                                </h2>
                                {this.gameSelect && <AButton
                                    variant="danger"
                                    onClick={this.ResetAll}
                                    message="Start New Game"
                                    classes="mt-5"
                                />}
                            </Col>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MiniChallenge8;