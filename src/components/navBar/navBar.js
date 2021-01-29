import "../navBar/navBar.css"
import { BrowserRouter as Router } from "react-router-dom";
import {
  Container,
  Col,
  Row,
} from "react-bootstrap";
import "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, faHome, faCamera } from "@fortawesome/free-solid-svg-icons";
import ShowMenu from '../shared/showMenu/showMenu';
import Button from "../shared/button/button";


const refresh = <FontAwesomeIcon icon={faSync} size="1x" color="white" />;
const home = <FontAwesomeIcon icon={faHome} size="1x" color="white" />;
const camera = <FontAwesomeIcon icon={faCamera} size="1x" color="white" />;

const NavBar = () => {
  const refreshPage = () => {
    window.location.reload();
  }

  const openIG = () => { window.open("https://www.instagram.com/jracca/", '_blank'); }

  return (
    <><Router>
      <Container fluid className="bgBar">
        <Row>
          <Col><Button variant="dark" onClick={refreshPage} message={refresh}></Button></Col>
          <Col><Button variant="dark" onClick={ShowMenu} message={home}></Button></Col>
          <Col><Button variant="dark" onClick={openIG} message={camera}></Button></Col>
        </Row>
      </Container>
    </Router>
    </>
  );
};

export default NavBar;
