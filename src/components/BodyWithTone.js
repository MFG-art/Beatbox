import React from "react";
import { context, Player } from "tone";
import { Tone } from "tone/build/esm/core/Tone";

export default class Beatbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
    this.handleClick = this.handleClick.bind(this);
    this.player = new Player({ url: "./audio/kick_drum.mp3" }).toDestination();
  }

  async handleClick() {
    await Tone.start();
    this.player.start(context.currentTime);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>start</button>
      </div>
    );
  }
}
