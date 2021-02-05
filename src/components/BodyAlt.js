/**
 * Create 'step'component
 * step will have a step number, on/off variable, and instrument type
 *Note information will be saved in localStorage array
 *
 * The body will make up the biggest section of the webpage and will be interactive
 */

import React from "react";

//The Beatbox class contains the entire drum machine application including the grid, play/pause button, and save options
//todo: implement play/pause, save buttons. Add option to name patterns? WILL THE SAMPLE PLAYBACK
class Beatbox extends React.Component {
  render() {
    return (
      <div className={"body"}>
        <Grid />
      </div>
    );
  }
}
// The grid class only contains the beat steps. Each sample has it's own row of 16 steps
class Grid extends Beatbox {
  constructor(props) {
    super(props);
    this.state = {
      kickNotes: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      snareNotes: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    };
  }

  render() {
    return (
      <div className="grid">
        {/*This row of steps triggers the kick drum sample*/}
        <div className="row">
          <div className="sample-name">KICK DRUM</div>
          {this.state.kickNotes.map((step, i) => {
            let instrument = "kick-drum";
            return <Step props={{ step, i, instrument }} key={i} />;
          })}
        </div>
        {/*This row of steps triggers the snare drum sample*/}
        <div className="row">
          <div className="sample-name">SNARE DRUM</div>
          {this.state.snareNotes.map((step, i) => {
            let instrument = "snare-drum";
            return <Step props={{ step, i, instrument }} key={i} />;
          })}
        </div>
      </div>
    );
  }
}
//Each step makes up a single note and contains information about it's index, instrument, and if it will play or not
class Step extends Grid {
  constructor(props) {
    super(props);
    this.state = {
      step: this.props.props.step,
      index: this.props.props.i,
      instrument: this.props.props.instrument,
    };

    //onClick event is initialized with constructor
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ step: !prevState.step }));
    console.log(this.state);
  }

  render() {
    return (
      <div
        className={this.state.step ? "step-on" : "step-off"}
        data-index={this.state.index}
        data-instrument={this.state.instrument}
        data-step={this.state.step}
        onClick={() => {
          this.handleClick();
        }}
      ></div>
    );
  }
}

export default Beatbox;
