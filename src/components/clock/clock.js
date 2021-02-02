import React from "react";
import { Button } from 'react-bootstrap';

class Clock extends React.Component {
  constructor(props) {
    console.log("constructor gets fired");
    super(props);
    this.state = {
      date: new Date(),
      show: true,
      mode: true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick()
      , 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  hideClock = () => {
    this.setState({ show: !this.state.show });
  };

  hourToggle = () => {
    this.setState({ mode: !this.state.mode });
  };

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="pb-5">
        {this.state.show ? (
          <>
            <h2 className="clock">{this.state.mode ? this.state.date.toLocaleTimeString() : this.state.date.toLocaleTimeString('en-GB')}</h2>
          </>
        ) : (
            ""
          )}
        <Button variant="warning" onClick={this.hideClock}>{this.state.show ? "Hide" : "Show"} Clock</Button>{" "}
        {this.state.show && <Button variant="warning" onClick={this.hourToggle}>{this.state.mode ? "24HR" : "12HR"}</Button> }
      </div>
    );
  }
}

export default Clock;
