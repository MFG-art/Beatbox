import React from "react";

let pause = true;
let kick = new Audio("./audio/kick drum.wav");

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
            pause = !pause;
          }}
        >
          Play / Pause
        </button>
      </div>
    </div>
  );
}
export default Body;
