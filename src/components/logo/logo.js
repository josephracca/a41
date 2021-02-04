import { Row, Col } from "react-bootstrap";
import "../../../App.css";
import Logo from "../../images/JR_Logo.png";

const Button = (props) => {
  return (
    <>
      <Row className="my-5 space">
        <Col>
          <span className="credits">
            joseph
            <img src={Logo} alt="Logo" className="width" href=""/>
            racca
          </span>
        </Col>
      </Row>
    </>
  );
};

export default Button;
