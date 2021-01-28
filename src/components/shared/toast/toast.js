import React from "react";
import { Col, Row, Toast, Button } from "react-bootstrap";




//logic is that this would have to pop up on alert so take the logic from the toggle to activate a NEW toast

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showA: true,
            setShowA: false
        }
    }

    toggleShowA = () => this.setState({ showA: !this.state.showA });

    render() {
        return (
            <Row>
                <Col xs={12}>
                    <Toast show={this.state.showA} onClose={this.toggleShowA} delay={3000} autohide>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded mr-2"
                                alt=""
                            />
                            <strong className="mr-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                </Col>
                {/* <Col xs={1}>
                    <Button onClick={this.toggleShowA}>
                        Toggle
            </Button>
                </Col> */}
            </Row>
        );
    }
}

export default Example;