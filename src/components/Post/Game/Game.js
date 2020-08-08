import React, {useEffect, useState} from "react";
import "./game.css";

import Microlink from '@microlink/react'
import mql from '@microlink/mql';
import styled from 'styled-components'

const MyCustomCard = styled(Microlink)`
  max-width: 100%;
  border-radius: 0.42857em;
  background: "#222222";
  width : "100%";
`

function Game(props) {

  const [preview, setPreview] = useState({loading: true})

  const previewGame =
    <MyCustomCard url={props.link} style={{}}
               onClick={(ev) => {ev.preventDefault(); setGameElement(playableGame)}}/>;

  
  const [gameElement, setGameElement] = useState(previewGame)


  const playableGame =
    <div className="game-container" onClick={()=> {setGameElement(previewGame)}}>
      <iframe title="game" src={props.link} frameBorder="0" className="game"/>
    </div>;




  //
  // const getPreview = () => {
  //   mql('https://instagram.com/p/BvDTdWdnzkj/')
  //     .then(data => {
  //         setPreview(data);
  //
  //       })
  // }
  //
  // useEffect(() => {
  //   getPreview()
  // }, []);

  return (
    gameElement
  );
}

export default Game;