import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart, faShareSquare as solidShare, faComment as solidComment } from '@fortawesome/free-solid-svg-icons'  // поставленный лайк
import { faHeart as emptyHeart, faShareSquare as emptyShare, faComment as emptyComment } from '@fortawesome/free-regular-svg-icons' // сердце без лайка

import Image from "./Image/Image";
import Text from "./Text/Text"

import "./post.css";
import Game from "./Game/Game";

function Post({content}) {

  const postContents = [];
  content.forEach(item => {
    //check for item type
    if (typeof item == "string") postContents.push(<Text text={item}/>)
    // else postContents.push(<Image src={item.download_url}/>);
    else postContents.push(<Game link="https://gfront.tlgrm.ru/game/flappy/"/>)
  });

  return <article className="post">
    <div className="post_info">
      <img className="post_user-image" src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="avatar"/>
      <div className="post_meta">
        <h3 className="post_user-name">User Name</h3>
        <datetime className="post_time">7 Aug 04:20</datetime>
      </div>
    </div>
    <div className="post_content">
      {postContents.map(item =>
        item
      )}
    </div>
    <div className="post_stats">
      <div className="post_stats-item"><FontAwesomeIcon className="post_icon" icon={solidHeart}/> 245</div>
      <div className="post_stats-item"><FontAwesomeIcon className="post_icon" icon={solidShare}/> 44</div>
      <div className="post_stats-item"><FontAwesomeIcon className="post_icon" icon={solidComment}/> 14</div>
    </div>
  </article>
}

export default Post;