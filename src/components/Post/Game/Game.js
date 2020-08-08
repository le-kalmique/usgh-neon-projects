import React, {useEffect, useState} from "react";
import "./game.css";

import Microlink from '@microlink/react'
import mql from '@microlink/mql';


function Game(props) {

  const [preview, setPreview] = useState({loading: true})

  const previewGame =
    <div className="preview">
      <img className="preview_image"/>
      <div className="preview_info">
        <h3 className="preview_title">{preview.title}</h3>
        <p className="preview_text"/>
        <p className="preview_link"/>
      </div>
    </div>

  const [gameElement, setGameElement] = useState(previewGame)


  const playableGame =
    <div className="game-container" onClick={()=> {setGameElement(previewGame)}}>
      <iframe src={props.link} frameBorder="0" className="game"/>
    </div>;



    // <Microlink url={props.link} style={{background: "#222222", color: "white"}}
    //                              onClick={(ev) => {ev.preventDefault(); setGameElement(playableGame)}}
    // image={{url: 'https://instagram.com/p/BvDTdWdnzkj/\''}}/>
    //


  const getPreview = () => {
    mql('https://instagram.com/p/BvDTdWdnzkj/')
      .then(data => {
          setPreview(data);

        })
  }

  useEffect(() => {
    getPreview()
  }, []);

  return (
    gameElement
  );
}

export default Game;