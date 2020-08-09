import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart, faShareSquare as solidShare, faComment as solidComment } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';

import "./postComponent.css";
import Game from "./Game/Game";
import Poll from "./Poll/Poll";
import Post from "../../utils/models/post";

function PostComponent({postFilling}) {
  const [liked, setLiked] = useState (postFilling.liked);
  const [amountOfLikes, setAmountOfLikes] = useState (postFilling.amountOfLikes);

  function cb() {
    if (liked) {
      setLiked(false);
      setAmountOfLikes(amountOfLikes-1);
    } else {
      setLiked(true);
      setAmountOfLikes(amountOfLikes+1);
    }
  }
  return (
    <article className="post shadow">
      <div className="post_info">
        <img className="post_user-image" src={ postFilling.profilePhotoURL } alt="avatar"/>
        <div className="post_meta">
        <h3 className="post_user-name">{ postFilling.author }</h3>
        <datetime className="post_time">{ postFilling.date }</datetime>
        </div>
      </div>
      <div className="post_content">
        { postFilling.content.contentType.includes(Post.ContentType.Game) ? <Game link={postFilling.content.data.game} /> : '' }
        { postFilling.content.contentType.includes(Post.ContentType.Images) ? postFilling.content.data.images.map((link, index) => <img src={link} alt={index} className={"post_image light_shadow"} key={index} />) : '' }
        { postFilling.content.contentType.includes(Post.ContentType.Videos) ? <iframe title="video" src={postFilling.content.data.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="post_video" /> : '' }
        { postFilling.content.contentType.includes(Post.ContentType.Text) ? <p className="post_text"> {postFilling.content.data.text} </p> : '' }
        { postFilling.content.contentType.includes(Post.ContentType.Poll) ? <Poll /> : '' }
      </div>
      <div className="post_stats">
        <div className="post_stats-item" onClick={cb}><FontAwesomeIcon className="post_icon" icon={ liked ? solidHeart : emptyHeart}/> {amountOfLikes}</div>
        <div className="post_stats-item"><FontAwesomeIcon className="post_icon" icon={solidComment}/> {postFilling.amountOfComments}</div>
        <div className="post_stats-item"><FontAwesomeIcon className="post_icon" icon={solidShare}/></div>
      </div>
    </article>
  )
}

export default PostComponent;