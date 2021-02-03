import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Fireflies from "../../audio/fireflies.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
// import Button from "../shared/button/button";

const musicNote = <FontAwesomeIcon icon={faMusic} size="1x" color="white" />;
// const playSymbol = <FontAwesomeIcon icon={faPlay} size="1x" color="white" />;
// const pauseSymbol = <FontAwesomeIcon icon={faPause} size="1x" color="white" />;

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        autoPlay: true,
        playing: true
    };
  }
  componentDidMount() {
      this.songID = setInterval(
          () => {
              this.playMusic()
          }, 1000)
  }

  componentWillUnmount(){
      clearInterval(this.songID)
  }

  playMusic() {
      this.setState({autoPlay: true})
  }

  // musicHandler(){
  //   console.log("test");
  //   this.state.playing ? this.setState({playing: false}) : this.setState({playing: true});
  // }

  render() {
    return (
      <div className="my-2">
        <p>
              {musicNote} Fireflies by{" "}
              <a href="https://www.youtube.com/watch?v=VPs9-2Rasyw">8-Bit Universe</a>
            </p>
        <ReactAudioPlayer
          src={Fireflies}
          volume={0.006}
          autoPlay={this.state.autoPlay}
          controls={true}
        />
        {/* <Button src={Fireflies} onClick={this.musicHandler} message={this.state.playing ? pauseSymbol : playSymbol}/> */}
        
      </div>
    );
  }
}

export default Song;
