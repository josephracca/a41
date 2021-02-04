import React from "react";
import { Col, Row, Toast } from "react-bootstrap";
import './toast.css';
class TostiLocos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showA: props.showA,
            message: props.message
        }
    }

    //CAN TRY TO HAVE A THE DISAPPEAR TOAST BE HERE ISNTEAD?

    render() {
        return (
            <Row className="mb-3">
                <Col xs={12}>
                    <Toast show={this.state.showA} delay={2750} autohide>
                        <Toast.Header className="redBG white">
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded mr-2"
                                alt=""
                            />
                            <strong className="mr-auto">Ooh, well das awkward...</strong>
                        </Toast.Header>
                        <Toast.Body className="textDark">{this.state.message}</Toast.Body>
                    </Toast>
                </Col>
            </Row>
        );
    }
}

export default TostiLocos;