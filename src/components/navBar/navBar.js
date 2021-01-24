import "../navBar/navBar.css"
import { BrowserRouter as Router, Link } from "react-router-dom";


//navbar stick to base of screen
import {
  Container,
  Col,
  Row,
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
  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <><Router>
      <Container fluid className="bgBar">
        <Row>
          <Col><Button variant="dark" onClick={refreshPage}>{refresh}</Button></Col>
          <Col><Button variant="dark" onClick={showMenu}>{home}</Button></Col>
          {/* //need to have this be able to REMOVE ONLY the "d-none" from className*/}
          <Col>
              <Button variant="dark" as={Link} to="/options">{options}</Button>
          </Col>
        </Row>
      </Container>
      </Router>
    </>
  );
};

export default NavBar;
