import React from "react";
import "./game.css";

function Game(props) {
  return (
    <div className="game-container">
      <iframe src={props.link} frameBorder="0" className="game"/>
    </div>
  );
}

export default Game;