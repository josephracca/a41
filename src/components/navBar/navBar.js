import App from "../../App";



//navbar stick to base of screen
import {
  Container,
  Col,
  Row,
  OverlayTrigger,
  Popover,
  Button,
} from "react-bootstrap";
import "./navBar.css";

// three parts, refresh/restart button, home button, options button

// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, faHome, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const refresh = <FontAwesomeIcon icon={faSync} size="1x" color="white" />;
const home = <FontAwesomeIcon icon={faHome} size="1x" color="white" />;
const options = <FontAwesomeIcon icon={faEllipsisH} size="1x" color="white" />;

// ReactDOM.render(element, document.body)

let showMenu = function(){
  document.getElementById("home").className === "App d-none" ? document.getElementById("home").className = "App" : document.getElementById("home").className = "App d-none";
  console.log('test');
}

const NavBar = () => {
  return (
    <>
      <Container fluid className="bgBar">
        <Row>
          <Col>{refresh}</Col>
          <Col><Button onClick={showMenu}>{home}</Button></Col>
          {/* //need to have this be able to REMOVE ONLY the "d-none" from className*/}
          <Col>
            <OverlayTrigger
              trigger="click"
              key={"top"}
              placement={"top"}
              overlay={
                <Popover id={`popover-positioned-${"top"}`}>
                  <Popover.Title as="h3">{`OPTIONS`}</Popover.Title>
                  <Popover.Content>
                    {/* <strong>You like to change things up, huh?</strong> */}
                    {/* <br /> */}
                     {/* + auditory
                            stimulus! */}
                    <figure>
                      <span>
                        <figcaption>
                          <p>
                            {" "}
                            <i class="fas fa-volume-up"></i> + auditory
                            stimulus!
                          </p>
                        </figcaption>
                        {/* <audio controls src="./audio/final.mp3" autoplay>
                          Your browser does not support the
                          <code>audio</code> element.
                        </audio> */}
                      </span>
                      <figcaption>
                        <p>
                          <i class="fas fa-music"></i> by{" "}
                          <a href="https://www.youtube.com/watch?v=0iIQ_y6Bv7k">
                            StephenSeymourMusic
                          </a>
                        </p>
                      </figcaption>
                    </figure>
                  </Popover.Content>
                </Popover>
              }
            >
              <Button variant="dark">{options}</Button>
            </OverlayTrigger>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NavBar;
