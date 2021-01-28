import "../navBar/navBar.css"
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, faHome, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import ShowMenu from '../shared/showMenu';


const refresh = <FontAwesomeIcon icon={faSync} size="1x" color="white" />;
const home = <FontAwesomeIcon icon={faHome} size="1x" color="white" />;
const options = <FontAwesomeIcon icon={faEllipsisH} size="1x" color="white" />;

const NavBar = () => {
  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <><Router>
      <Container fluid className="bgBar">
        <Row>
          <Col><Button variant="dark" onClick={refreshPage}>{refresh}</Button></Col>
          <Col><Button variant="dark" onClick={ShowMenu}>{home}</Button></Col>
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
