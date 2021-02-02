import React from "react";

import { Button, Container, Row, Col } from "react-bootstrap";
import ShowMenu from "../../shared/showMenu/showMenu";
import { BrowserRouter as Link } from "react-router-dom";
import AButton from "../../shared/button/button";
import "../../../App.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: true,
      mcOpen: false,
    };
  }

  render() {
    return (
      <>
        <div id="home" className="App slideUp height100 Menu">
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
              <Col className="mb-5">
                {utils.range(1, 9).map((element) => (
                  <AButton
                    onClick={ShowMenu}
                    // as={Link}
                    to={`/mc${element}`}
                    classes="buttonW"
                    message={`${element}`}
                  />
                ))}
                <Button
                  onClick={ShowMenu}
                  as={Link}
                  to={`/Home`}
                  classes="buttonW pulse"
                  message={`Home`}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

const utils = {
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
};

export default Home;
