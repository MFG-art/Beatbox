/**
 * Create 'step'component
 * step will have a step number, on/off variable, and instrument type
 *Note information will be saved in localStorage array
 *
 * The body will make up the biggest section of the webpage and will be interactive
 */

import React from "react";

let kick = new Audio("./audio/bass_sample.mp3");
let snare = new Audio("./audio/clap_sample.mp3");
let playPause = false;
let tempo = 100;

//The Beatbox class contains the entire drum machine application including the grid, play/pause button, and save options
//todo: implement play/pause, save buttons. Add option to name patterns? WILL THE SAMPLE PLAYBACK
class Beatbox extends React.Component {
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

    this.onNoteUpdate = this.onNoteUpdate.bind(this);
  }

  onNoteUpdate(note) {
    console.log("inside the beatbox component");
    console.log(this.state);
    // console.log(note);
    console.log(note.target.dataset);
    let dataset = note.target.dataset;

    switch (dataset.instrument) {
      case "kick-drum":
        console.log("This is a kick drum");
        let updatedKickNotes = this.state.kickNotes;
        updatedKickNotes[dataset.index] = !updatedKickNotes[dataset.index];
        this.setState({ kickNotes: updatedKickNotes });
        break;
      case "snare-drum":
        console.log("This is a snare drum");
        let updatedSnareNotes = this.state.snareNotes;
        updatedSnareNotes[dataset.index] = !updatedSnareNotes[dataset.index];
        this.setState({ snareNotes: updatedSnareNotes });
        break;
      default:
        break;
    }
    console.log(this.state);
  }

  Loop() {
    let kickPat = this.state.kickNotes;
    let snarePat = this.state.snareNotes;
    let stepLength = 1000 * (15 / tempo);
    let i = 0;

    let step = setInterval(() => {
      console.log(i);
      if (kickPat[i] === true) {
        kick.currentTime = 0;
        kick.play();
      }

      if (snarePat[i] === true) {
        snare.currentTime = 0;
        snare.play();
      }

      i++;
      i %= 16;
      if (!playPause) clearInterval(step);
    }, stepLength);
  }
  render() {
    return (
      <div
        className={"body"}
        onClick={(note) => {
          this.onNoteUpdate(note);
        }}
      >
        <Grid
          kickNotes={this.state.kickNotes}
          snareNotes={this.state.snareNotes}
          // onNoteUpdate={(note) => {
          //   this.onNoteUpdate(note);
          // }}
        />
      </div>
    );
  }
}
// The grid class only contains the beat steps. Each sample has it's own row of 16 steps
class Grid extends Beatbox {
  constructor(props) {
    super(props);
    this.state = {
      kickNotes: this.props.kickNotes,
      snareNotes: this.props.snareNotes,
      // onNoteUpdate: (note) => {
      //   this.props.onNoteUpdate(note);
      // },
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
            return (
              <Step
                props={{ step, i, instrument }}
                // onNoteUpdate={(note) => {
                //   this.onNoteUpdate(note);
                // }}
                key={i}
              />
            );
          })}
        </div>
        {/*This row of steps triggers the snare drum sample*/}
        <div className="row">
          <div className="sample-name">SNARE DRUM</div>
          {this.state.snareNotes.map((step, i) => {
            let instrument = "snare-drum";
            return (
              <Step
                props={{ step, i, instrument }}
                // onNoteUpdate={(note) => {
                //   this.onNoteUpdate(note);
                // }}
                key={i}
              />
            );
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
      // onNoteUpdate: (note) => {
      //   this.props.onNoteUpdate(note);
      // },
    };

    //onClick event is initialized with constructor
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ step: !prevState.step }));
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
