import React from "react";

import "./App.css";
import "./index.css";
import "./wickedcss.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import MC1 from "../src/components/mc1/mc1";
import MC2 from "../src/components/mc2/mc2";
import MC3 from "../src/components/mc3/mc3";
import MC4 from "../src/components/mc4/mc4";
import MC5 from "../src/components/mc5/mc5";
import MC6 from "../src/components/mc6/mc6";
import MC7 from "../src/components/mc7/mc7";
import MC8 from "../src/components/mc8/mc8";

import Button from "../src/components/button/button";
import NavBar from "../src/components/navBar/navBar";
import Header from "../src/components/header/header";
import Clock from "../src/components/clock/clock";
import Music from "../src/components/music/music";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showMenu() {
    document.getElementById("home").className === "App d-none"
      ? (document.getElementById("home").className = "App")
      : (document.getElementById("home").className = "App d-none");
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <div id="home" className="App mainBG slideUp height100">
            <Container fluid className="mt-5 smallWidth">
              <div className="bounceIn">
                <Row className="mb-1">
                  <Col>
                    <Row className="wiggle mt-5">
                      <Col>
                        <span className="title">ALL FOR ONE</span>
                      </Col>
                    </Row>
                    <Row className="floater">
                      <Col>
                        <h3>
                          A TiNy, YeT ReAcTiVe
                          <br />
                          ColL3cti0n of miNi CHaLLeNgeS
                        </h3>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <Row className="zoomer mb-5">
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
                </Col>
              </Row>
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
            <Route path="/mc7">
              <MC7 className="pb-5 mb-5" />
            </Route>
            <Route path="/mc8">
              <MC8 className="pb-5 mb-5" />
            </Route>
          </Switch>
          <NavBar />
        </Router>

        <div  className="bgOpt2">
        <Container>
          <Row className="mx-5">
            <Col xs="12" lg="4" className="mb-5">
              <h2>Welcome to the underground...</h2>
              <p>Thanks for stopping by: This is my first project using react. Originally, this was done using Unity and C#. It's been a really fun learning experience to recreate an old assignment in a completely different language. But enough about me, have a look around and have fun!</p>
            </Col>
            <Col xs="12" md="4">
              <Clock />
            </Col>
            <Col xs="12" md="4">
              <Music />
            </Col>
          </Row>
        </Container>
        </div>
      </>
    );
  }
}

const utils = {
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i)
};

export default App;
