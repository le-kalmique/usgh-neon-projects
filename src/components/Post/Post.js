import React, { UseState } from "react";
import "./post.css";

export default function Post(props) {
    return (
        <div className={"post post_dark"}>
            <div className="post__user">
                <img src="" alt="avatar" className="post__avatar"/>
                <p className= ""></p>
            </div>

            <div className="content">

            </div>

            <div className="post__bottom-bar">
                <img src="" alt="like" className="post__bottom-iconkkk"/>
                <img src="" alt="comment" className="post__bottom-icon"/>
                <img src="" alt="share" className="post__bottom-icon"/>
            </div>
        </div>
    );
}
