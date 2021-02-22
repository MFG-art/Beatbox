import React from "react";
import Sketch from "react-p5";
import "p5/lib/addons/p5.sound";

export default class Beatbox extends React.Component() {
  hihat; //serves as a container that will store a sound source
  hihatPattern; // stores the note patterns for the high hat as an array
  hihatPhrase; //defines how the high hat pattern is interpreted

  kickDrum;
  kickDrumPattern;
  kickDrumPhrase;

  clap;
  clapPattern;
  clapPhrase;

  drums; //this will be our 'part'

  preload = (p5, parent) => {
    this.hihat = p5.loadSound("assets/hh_sample.mp3"); //This comes from p5.js
    this.kickDrum = p5.loadSound("assets/bass_sample.mp3");
    this.clap = p5.loadSound("assets/clap_sample.mp3");
  };

  setup = (p5, parent) => {
    this.hihatPattern = [1, 0, 1, 0, 1, 0, 1, 0];
    this.hihatPhrase = new p5.Phrase(
      "hihat",
      (time) => {
        this.hihat.play(time);
      },
      this.hihatPattern
    ); //This comes from p5.js

    this.kickDrumPattern = [1, 0, 0, 1, 0, 0, 0, 0];
    this.kickDrumPhrase = new p5.Phrase(
      "kickDrum",
      (time) => {
        this.kickDrum.play(time);
      },
      this.kickDrumPattern
    );

    this.clapPattern = [0, 0, 0, 0, 1, 0, 0, 0];
    this.clapPhrase = new p5.Phrase(
      "clap",
      (time) => {
        this.clap.play(time);
      },
      this.clapPattern
    );

    this.drums = new p5.Part();
    this.drums.addPhrase(this.hihatPhrase);
    this.drums.addPhrase(this.kickDrumPhrase);
    this.drums.addPhrase(this.clapPhrase);
  };

  render() {
    return (
      <div>
        <Sketch preload={this.preload} setup={this.setup} />
      </div>
    );
  }
}
