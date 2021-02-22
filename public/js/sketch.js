let hihat; //serves as a container that will store a sound source
let hihatPattern; // stores the note patterns for the high hat as an array
let hihatPhrase; //defines how the high hat pattern is interpreted

let kickDrum;
let kickDrumPattern;
let kickDrumPhrase;

let clap;
let clapPattern;
let clapPhrase;

let drums; //this will be our 'part'

function preload(p5, parent) {
  this.hihat = loadSound("assets/hh_sample.mp3"); //This comes from p5.js
  this.kickDrum = loadSound("assets/bass_sample.mp3");
  this.clap = loadSound("assets/clap_sample.mp3");
}

function setup(p5, parent) {
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
  this.drums.addPhrase(hihatPhrase);
  this.drums.addPhrase(kickDrumPhrase);
  drums.addPhrase(clapPhrase);
}
