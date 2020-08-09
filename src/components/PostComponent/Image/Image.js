import React from "react";

import Loader from "../../Loader/Loader";
import "./image.css";

function Image({src}) {
  return <div className="post_image_container">
    loading
    <img src={src} alt="post-content" className="post_image"/>
  </div>
}

export default Image;