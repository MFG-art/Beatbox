import React from "react";

let kick = new Audio("./audio/kick drum.wav");
let snare = new Audio("./audio/snare drum.wav");
let playPause = false;
let tempo = 120;

function Loop() {
  let kickPat = [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0];
  let snarePat = [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];

  let stepLength = 1000 * (15 / tempo);
  let i = 0;

  let step = setInterval(() => {
    console.log(i);
    if (kickPat[i] === 1) {
      kick.currentTime = 0;
      kick.play();
    }

    if (snarePat[i] === 1) {
      snare.currentTime = 0;
      snare.play();
    }

    i++;
    i %= 16;
    if (!playPause) clearInterval(step);
  }, stepLength);
}

function Body() {
  return (
    <div>
      <div className="main thing" style={{ height: "100vh" }}>
        <p>The beatbox will go here!</p>
        <button
          onClick={() => {
            kick.play();
          }}
        >
          Kick Drum
        </button>
        <button
          onClick={() => {
            snare.play();
          }}
        >
          Snare Drum
        </button>
        <button
          onClick={() => {
            playPause = !playPause;
            if (playPause) {
              Loop();
            }
          }}
        >
          Play / Pause
        </button>
      </div>
    </div>
  );
}

export default Body;
