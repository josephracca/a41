import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "../../App.css";
import "./options.css";
// import AButton from "../button/button";
// import FormField from "../formControl/formControl";
import Music from "../../audio/All_Or_Nothing.mp3";

import ReactAudioPlayer from "react-audio-player";

// need to figure out how to do a .map on this one...

// console.log(FieldGroup);
class OptionsPage extends React.Component {
  render() {
    return (
      <div className="bgOpt slideUp height100">
        <Container>
          <Row>
            <Col>
              <h2>OPTIONS</h2>
            </Col>
          </Row>

          <Row className="mb-5">
            {/* <Col className="mb-5">
              <figure>
                <span>
                  <figcaption>
                    <p>
                      {" "}
                      <i class="fas fa-volume-up"></i> + auditory stimulus!
                    </p>
                  </figcaption>
                  <audio controls src={Music} autoplay>
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                </span>
                <figcaption>
                  <p>
                    <i class="fas fa-music"></i> by{" "}
                    <a href="https://www.youtube.com/watch?v=NGv-ta9eFbs">
                      Sanny D.
                    </a>
                  </p>
                </figcaption>
              </figure>
            </Col> */}
            <Col>
              <ReactAudioPlayer src={Music} volume={.05} autoPlay controls={true} controlsList />
              <p>
                    <i class="fas fa-music"></i> by{" "}
                    <a href="https://www.youtube.com/watch?v=NGv-ta9eFbs">
                      Sanny D.
                    </a>
                  </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default OptionsPage;

