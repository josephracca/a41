import React from "react";

import "../navBar/navBar.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, faHome, faCamera } from "@fortawesome/free-solid-svg-icons";

import Button from "../shared/button/button";

const refresh = <FontAwesomeIcon icon={faSync} size="1x" color="white" />;
const home = <FontAwesomeIcon icon={faHome} size="1x" color="white" />;
const camera = <FontAwesomeIcon icon={faCamera} size="1x" color="white" />;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: props.actionName,
    };
  }
  refreshPage = () => {
    window.location.reload();
  };

  openIG = () => {
    window.open("https://www.instagram.com/jracca/", "_blank");
  };

  render() {
    return (
      <>
        <Router>
          <Container fluid className="bgBar">
            <Row>
              <Col>
                <Button
                  variant="dark"
                  onClick={this.refreshPage}
                  message={refresh}
                  label="Refresh"
                ></Button>
              </Col>
              <Col>
                <Button
                  variant="dark"
                  onClick={this.state.action}
                  message={home}
                  label="Home"
                ></Button>
              </Col>
              <Col>
                <Button
                  variant="dark"
                  onClick={this.openIG}
                  message={camera}
                  label="Instagram"
                ></Button>
              </Col>
            </Row>
          </Container>
        </Router>
      </>
    );
  }
}

export default NavBar;
