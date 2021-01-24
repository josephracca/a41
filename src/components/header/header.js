//navbar stick to base of screen
import { Container, Col, Row } from "react-bootstrap";
import './header.css';

import logo from "../../images/JR_Logo.png";

// three parts, refresh/restart button, home button, options button

// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSync, faHome, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

// const refresh = <FontAwesomeIcon icon={faSync} size="1x" color="white"/>;
// const home = <FontAwesomeIcon icon={faHome} size="1x" color="white"/>;
// const options = <FontAwesomeIcon icon={faEllipsisH} size="1x" color="white"/>;

// ReactDOM.render(element, document.body)

const Header = () => {
  return (
    <>
      <Container fluid className="bgBarLight">
        <Row>
          <Col>
          <span className="credits">JOSEPH<img src={logo} alt="Logo" className="width"/>RACCA</span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
