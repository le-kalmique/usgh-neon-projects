import React, { UseState } from "react";
import "./game.css";

export default function Game(props) {
    return (
        <div className="game-container">
            <iframe src={props.link} frameBorder="0" className="game"/>
        </div>
    );
}