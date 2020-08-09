import React, {useEffect, useState} from "react";
import "./game.css";

import Microlink from '@microlink/react'
import styled from 'styled-components'
import mql from '@microlink/mql';

const MyCustomCard = styled(Microlink)`
  max-width: 100%;
  border-radius: 0.42857em;
  background: "#222222";
  width : "100%";
  margin : .4rem 0;
`

function Game({link}) {

  const [preview, setPreview] = useState("");

  console.log(preview);

  let previewGame = (<div class="game-preview-container" onClick={()=> {setGameElement({preview : false, data : playableGame})}}>
                          <div class = "game-preview" alt="" cache={false}/>
                      
                          <img src="/images/play.png" class = "play" alt="" />
                        </div>);
    

  
  const [gameElement, setGameElement] = useState({preview : true,
                                                  data : previewGame});

  const playableGame =
    <div className="game-container" onClick={()=> {setGameElement({preview : true, data : previewGame})}}>
      <iframe title="game" src={link} frameBorder="0" className="game"/>
    </div>;

  function getPreview () {
    mql(link)
      .then(data => {
          if (data.data.logo && preview == "") {
            setPreview(data.data.logo.url);
            previewGame = <div class="game-preview-container" onClick={()=> {setGameElement({preview : false, data : playableGame})}}>
              <div style={{backgroundImage : `url(${data.data.logo.url})`}} class = "game-preview" alt="" cache={false}/>          
              <img src="/images/play.png" class = "play" alt="" />
            </div>;
            if (gameElement.preview)
              setGameElement({preview : true,
                data : previewGame});
          }
        });
  }

  if (preview == "")
    getPreview();

  return (
    gameElement.data
  );
}

export default Game;