import { Container, Col, Row } from "react-bootstrap";
import './header.css';

import logo from "../../images/JR_Logo.png";

const Header = () => {
  return (
    <>
      <Container fluid className="bgBarLight">
        <Row>
          <Col>
          <span className="credits">JOSEPH<img src={logo} alt="Logo" className="logoWidth"/>RACCA</span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
