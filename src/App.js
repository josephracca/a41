import React from "react";

import "./App.css";
import "./index.css";
import "./wickedcss.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MC1 from "./components/pages/mc1/mc1";
import MC2 from "./components/pages/mc2/mc2";
import MC3 from "./components/pages/mc3/mc3";
import MC4 from "./components/pages/mc4/mc4";
import MC5 from "./components/pages/mc5/mc5";
import MC6 from "./components/pages/mc6/mc6";
import MC7 from "./components/pages/mc7/mc7";
import MC8 from "./components/pages/mc8/mc8";
import MC9 from "./components/pages/mc9/mc9";

import Button from "./components/shared/button/button";
import NavBar from "../src/components/navBar/navBar";
import Header from "../src/components/header/header";
import Clock from "../src/components/clock/clock";
import Music from "../src/components/music/music";

const numMiniChallenges = 9;
const mcArray = [];

for (let i = 1; i <= numMiniChallenges; i++) {
  mcArray.push(i);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: true,
      mcOpen: false,
    };
  }

  toggleWindow = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
    this.setState({ mcOpen: !this.state.mcOpen });
  };

  menuButton = () => {
    if (this.state.menuOpen === false) {
      this.setState({ menuOpen: true });
      this.setState({ mcOpen: false });
    }
  };

  Main = () => {
    return (
      <div id="home" className="App zoomer height100 Menu">
        <Container fluid className="mt-5 smallWidth">
          <div className="bounceIn">
            <Row className="mb-1">
              <Col>
                <Row className="mt-5">
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
            <Col className="mb-5">
              {mcArray.map((element) => (
                <Button
                  onClick={this.toggleWindow}
                  as={Link}
                  to={`/mc${element}`}
                  classes="buttons pulse"
                  message={`${element}`}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

  Switched = () => {
    return (
      <div id="MCs" className="d-flex">
        <Container fluid className="px-0">
          <Switch>
            <Route path="/mc1">
              <MC1 className="pb-5 mb-5" />
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
            <Route path="/mc9">
              <MC9 className="pb-5 mb-5" />
            </Route>
          </Switch>
        </Container>
      </div>
    );
  };

  Footer = () => {
    return (
      <div className="bgOpt2 mb-5">
        <Container>
          <Row className="footer">
            <Col xs="12" lg="7" className="mb-5">
              <h2>Welcome! </h2>
              <h3>(to the underground...)</h3>
              <p className="leftAlign">
                Thanks for stopping by! This is my first project using React.
                Originally, this was done using Unity and C#. It's been a really
                fun learning experience to recreate an old assignment in a
                completely different language. But enough about me, have a look
                around and have fun!
              </p>
            </Col>
            <Col xs="12" md="12" lg="5" className="mx-0 px-0">
              <h2>Options</h2>
              <Clock />
              <Music />
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

  render() {
    return (
      <>
        <Router>
          <Header />
          {this.state.menuOpen && <this.Main />}
          {this.state.mcOpen && <this.Switched />}
          <NavBar actionName={this.menuButton} />
        </Router>
        <this.Footer />
      </>
    );
  }
}



export default App;
