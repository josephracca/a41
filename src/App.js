// import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Button from "../src/components/button/button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import MC1 from "../src/components/mc1/mc1";
import NavBar from "../src/components/navBar/navBar";
import Header from "../src/components/header/header"
// import { Router } from "react-router-dom";

import logo from "./images/JR_Logo.png";


//import react router dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/list">
            <RenderList />
          </Route>
          <Route path="/mc1">
            <MC1 className="pb-5 mb-5"/>
          </Route>
          {/* now we need to just make sure all of these other links work */}
          {/* what happened was the props weren't getting passed to the button click */}
        </Switch>

      <div className="App">
        <Container className="mt-2">
          <Row>
            <Col><span className="title">ALL FOR ONE</span></Col>
          </Row>
          <Row>
            <Col>
              <Button as={Link} to="/mc1" classes="buttonW" message="1" />
              <Button as={Link} to="" classes="buttonW" message="2" />
              <Button as={Link} to="" classes="buttonW" message="3" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button as={Link} to="" classes="buttonW" message="4" />
              <Button as={Link} to="" classes="buttonW" message="5" />
              <Button as={Link} to="" classes="buttonW" message="6" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button as={Link} to="" classes="buttonW" message="7" />
              <Button as={Link} to="" classes="buttonW" message="8" />
              <Button as={Link} to="" classes="buttonW" message="9" />
            </Col>
          </Row>
          <Row className="mt-5">
          <Col><span className="credits">joseph<img src={logo} alt="Logo" className="width"/>racca</span></Col>
          </Row>
        </Container>
        {/* <MC1 /> */}
        


      </div>
{/* <Header /> */}
      <NavBar />
    </Router>
  );
  function RenderList() {
    return <MC1 />;
  }
}

export default App;
