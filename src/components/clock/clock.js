//always import react
import React from "react";
import {Button} from 'react-bootstrap';

class Clock extends React.Component {
  constructor(props) {
    console.log("constructor gets fired");
    super(props);
    this.state = {
      date: new Date(),
      show: true,
      // this will show and hide our clock
      // so even though it's not displayed on the screen, it will still show on the screen
    };
  }

  componentDidMount() {
    // we can handle any logic///
    console.log("componentDidMount fired");
    //what we want to do when we render the page, we want to set an interval to go every second...
    //set an interval
    this.timerID = setInterval(
        () => this.tick()
        , 1000);
    // we want this to fire every second so the second updates
  }

  componentWillUnmount(){
      //when the component is hidden/not on the screen
      clearInterval(this.timerID);
      // so will stop that so it doesn't keep running...
  }

  hideClock = () => {
    this.setState({ show: !this.state.show });
  };
  //IMPORTANT: needs to be written as an arrow function and has to do with the binding of the function and the specific state...

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="pb-5">
        {this.state.show ? (
          <>
          <h3>CURRENTLY:</h3>
          <h2>{this.state.date.toLocaleTimeString()}</h2>
          </>
        ) : (
          ""
        )}


        <Button variant="warning" onClick={this.hideClock}>{ this.state.show ? "Hide" : "Show"} Clock</Button>
      </div>
    );
  }
}

export default Clock;
