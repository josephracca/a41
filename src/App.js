// import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Button from "../src/components/button/button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import MC1 from "../src/components/mc1/mc1";
import MC2 from "../src/components/mc2/mc2";
import MC3 from "../src/components/mc3/mc3";
import MC4 from "../src/components/mc4/mc4";
import MC5 from "../src/components/mc5/mc5";
import MC6 from "../src/components/mc6/mc6";
import Options from "../src/components/options/options";
import NavBar from "../src/components/navBar/navBar";
import Header from "../src/components/header/header";
// import Logo from "../src/components/logo/logo";
// import { Router } from "react-router-dom";
import React from "react";
import "./wickedcss.min.css";

// import logo from "./images/JR_Logo.png";

//import react router dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showMenu() {
    document.getElementById("home").className === "App d-none"
      ? (document.getElementById("home").className = "App")
      : (document.getElementById("home").className = "App d-none");
    console.log("test");
  }

  render() {
    return (
      <Router>
        {/* <Options className="d-none" /> */}
        <Header />
        
        <div id="home" className="App mainBG slideUp">
          <Container fluid className="mt-5 smallWidth">
            <Row className="mb-1">
              <Col>
                <Row className="wiggle mt-5">
                  <Col>
                    <span className="title">ALL FOR ONE</span>
                  </Col>
                </Row>
                <Row className="">
                  <Col>
                    <h3>A TiNy, YeT ReAcTiVe
                    <br />
                    ColL3cti0n of miNi CHaLLeNgeS</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                {utils.range(1, 9).map((element) => (
                  <Button
                    onClick={this.showMenu}
                    as={Link}
                    to={`/mc${element}`}
                    classes="buttonW pulse"
                    message={`${element}`}
                  />
                ))}
                {/* <Button
                  onClick={this.showMenu}
                  as={Link}
                  to="/mc1"
                  classes="buttonW pulse"
                  message="1"
                />
                <Button
                  onClick={this.showMenu}
                  as={Link}
                  to="/mc2"
                  classes="buttonW pulse"
                  message="2"
                />
                <Button
                  onClick={this.showMenu}
                  as={Link}
                  to="/mc3"
                  classes="buttonW pulse"
                  message="3"
                /> */}
              </Col>
            </Row>
            {/* <Row>
              <Col>
                <Button
                  onClick={this.showMenu}
                  as={Link}
                  to="/mc4"
                  classes="buttonW pulse"
                  message="4"
                />
                <Button
                  onClick={this.showMenu}
                  as={Link}
                  to="/mc5"
                  classes="buttonW pulse"
                  message="5"
                />
                <Button
                  onClick={this.showMenu}
                  as={Link}
                  to="/mc6"
                  classes="buttonW pulse"
                  message="6"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  onClick={this.showMenu}
                  as={Link}
                  to=""
                  classes="buttonW pulse"
                  message="7"
                />
                <Button
                  onClick={this.showMenu}
                  as={Link}
                  to=""
                  classes="buttonW pulse"
                  message="8"
                />
                <Button
                  onClick={this.showMenu}
                  as={Link}
                  to=""
                  classes="buttonW pulse"
                  message="9"
                />
              </Col>
            </Row> */}
            <Row>
              <Col>
                <Button
                  onClick={this.showMenu}
                  as={Link}
                  to="/options"
                  classes="gray pulse"
                  message="options"
                />
              </Col>
            </Row>
            
            {/* <Logo /> */}
          </Container>
        </div>

        <Switch>
          <Route path="/mc1">
            <MC1 className="pb-5 mb-5" />
            <Header />
          </Route>
          <Route path="/mc2">
            <MC2 className="pb-5 mb-5" />
          </Route>
          <Route path="/mc3">
            <MC3 className="pb-5 mb-5" />
          </Route>
          <Route path="/mc4">
            <MC4 className="pb-5 mb-5" />
          </Route>
          <Route path="/mc5">
            <MC5 className="pb-5 mb-5" />
          </Route>
          <Route path="/mc6">
            <MC6 className="pb-5 mb-5" />
          </Route>
          <Route path="/options">
            <Options className="pb-5 mb-5" />
          </Route>
        </Switch>
        <NavBar />
        
      </Router>
    );
  }
}

const utils = {
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
};

export default App;
