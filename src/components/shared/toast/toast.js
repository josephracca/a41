import React from "react";
import { Col, Row, Toast } from "react-bootstrap";
import './toast.css';



//logic is that this would have to pop up on alert so take the logic from the toggle to activate a NEW toast

class TostiLocos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showA: true,
            setShowA: false,
            message: props.message
        }
    }

    toggleShowA = () => this.setState({ showA: !this.state.showA });

    render() {
        return (
            <Row>
                <Col xs={12}>
                    <Toast show={this.state.showA} onClose={this.toggleShowA} delay={2750} autohide>
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