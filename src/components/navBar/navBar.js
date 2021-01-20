//navbar stick to base of screen
import { Container, Col, Row } from "react-bootstrap";
import './navBar.css'

// three parts, refresh/restart button, home button, options button

// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, faHome, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const refresh = <FontAwesomeIcon icon={faSync} size="1x" color="white"/>;
const home = <FontAwesomeIcon icon={faHome} size="1x" color="white"/>;
const options = <FontAwesomeIcon icon={faEllipsisH} size="1x" color="white"/>;

// ReactDOM.render(element, document.body)

const NavBar = () => {
  return (
    <>
      <Container fluid className="bgBar">
        <Row>
          <Col>{refresh}</Col>
          <Col>{home}</Col>
          <Col>{options}</Col>
        </Row>
      </Container>
    </>
  );
};

export default NavBar;
