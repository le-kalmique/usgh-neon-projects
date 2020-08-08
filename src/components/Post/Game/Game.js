import React, {useEffect, useState} from "react";
import "./game.css";

import { ReactTinyLink } from 'react-tiny-link'


function Game(props) {

  const [preview, setPreview] = useState({loading: true})

  const playableGame =
    <div className="game-container">
      <iframe src={props.link} frameBorder="0" className="game"/>
    </div>;

  // const getPreview = () => {
  //   linkPreviewGenerator(props.link)
  //     .then(previewData => {
  //       setPreview(previewData);
  //     })
  // }
  //
  // useEffect(() => {
  //   getPreview()
  // }, []);

  return (
    <ReactTinyLink maxLine={1} minLine={1} url={props.link}
    />
  );
}

export default Game;