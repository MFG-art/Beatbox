/**
 * Create 'step'component
 * step will have a step number, on/off variable, and instrument type
 *Note information will be saved in localStorage array
 *
 */

import React from "react";

class Beatbox extends React.Component {
  render() {
    return (
      <div className={"body"}>
        <Grid />
      </div>
    );
  }
}

class Grid extends Beatbox {
  constructor(props) {
    super(props);
    this.state = {
      kickNotes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      snareNotes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
  }
  render() {
    return (
      <div className="grid">
        <div className="row">
          {this.state.kickNotes.map((step, i) => {
            return <Step props={(step, i)} />;
          })}
        </div>
        <div className="row">
          {this.state.snareNotes.map((step, i) => {
            return <Step props={(step, i)} />;
          })}
        </div>
      </div>
    );
  }
}
class Step extends Grid {
  constructor(props) {
    super(props);
    this.state = {
      step: this.props.step,
      index: this.props.i,
    };
  }
  render() {
    return <div className="step"></div>;
  }
}

export default Beatbox;
