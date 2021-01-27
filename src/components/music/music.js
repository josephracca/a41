import React from "react";
import ReactAudioPlayer from "react-audio-player";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nothing from "../../audio/fireflies.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const musicNote = <FontAwesomeIcon icon={faMusic} size="1x" color="white" />;

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        autoPlay: true
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

  render() {
    return (
      <div className="my-2">
        <p>
              {musicNote} Fireflies by{" "}
              <a href="https://www.youtube.com/watch?v=VPs9-2Rasyw">8-Bit Universe</a>
            </p>
        <ReactAudioPlayer
          src={Nothing}
          volume={0.006}
          autoPlay={this.state.autoPlay}
          controls={true}
        />
        
      </div>
    );
  }
}

// function MusicPlayer() {
//   return (
//     <div className="pb-5 mb-5">
//       <ReactAudioPlayer
//         src={Music}
//         volume={0.001}
//         autoPlay
//         controls={true}
//         controlsList
//       />
//     </div>
//   );
// }

export default Song;
