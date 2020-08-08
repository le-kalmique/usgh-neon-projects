import React from "react";

import Image from "./Image/Image";
import Text from "./Text/Text"

import "./post.css";

function Post({content}) {

  const postContents = [];
  content.forEach(item => {
    //check for item type
    if (typeof item == "string") postContents.push(<Text text={item}/>)
    else postContents.push(<Image src={item.download_url}/>);
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
  </article>
}

export default Post;