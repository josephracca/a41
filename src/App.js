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
import NavBar from "../src/components/navBar/navBar";
import Header from "../src/components/header/header";
// import { Router } from "react-router-dom";
import React from "react";


import logo from "./images/JR_Logo.png";

//import react router dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={

    }
  }

  showMenu(){
    document.getElementById("home").className === "App d-none" ? document.getElementById("home").className = "App" : document.getElementById("home").className = "App d-none";
    console.log('test');
  }

  render(){
    return (
      <Router>
        <div id="home" className="App">
          <Container className="mt-2">
            <Row>
              <Col>
                <span className="title">ALL FOR ONE</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={this.showMenu} as={Link} to="/mc1" classes="buttonW" message="1" />
                <Button onClick={this.showMenu} as={Link} to="/mc2" classes="buttonW" message="2" />
                <Button onClick={this.showMenu} as={Link} to="/mc3" classes="buttonW" message="3" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={this.showMenu} as={Link} to="/mc4" classes="buttonW" message="4" />
                <Button onClick={this.showMenu} as={Link} to="" classes="buttonW" message="5" />
                <Button onClick={this.showMenu} as={Link} to="" classes="buttonW" message="6" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={this.showMenu} as={Link} to="" classes="buttonW" message="7" />
                <Button onClick={this.showMenu} as={Link} to="" classes="buttonW" message="8" />
                <Button onClick={this.showMenu} as={Link} to="" classes="buttonW" message="9" />
              </Col>
            </Row>
            <Row className="my-5 space">
              <Col>
                <span className="credits">
                  joseph
                  <img src={logo} alt="Logo" className="width" />
                  racca
                </span>
              </Col>
            </Row>
          </Container>
          {/* <MC1 /> */}
        </div>

        <Switch>
          {/* <Route path="/list">
            <RenderList />
          </Route> */}
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
          {/* now we need to just make sure all of these other links work */}
          {/* what happened was the props weren't getting passed to the button click */}
        </Switch>
        {/* <Header /> */}
        <NavBar />
      </Router>
    );
    // function RenderList() {
    //   // return <MC1 />;
    // }
  }


  
}

export default App;
