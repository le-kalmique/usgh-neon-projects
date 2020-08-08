import React, { UseState } from "react";
import "./post.css";

export default function Post(props) {
    return (
        <div className={"post post_dark"}>
            <AuthorSec/>

            <Content/>

            <BottomBar/>
        </div>
    );
}

function AuthorSec(props) {
    return (
        <div className="author-sec">
            <div className="avatar-sec">
                <img src="" alt="avatar" className="author-sec__avatar"/>
                <p className= "author-sec__nickname">Kek</p>
            </div>
            <p className="timestamp">Дата</p>
        </div>
    );
}

function BottomBar(props) {
    return(
        <div className="post__bottom-bar">
            <img src="" alt="like" className="post__bottom-iconkkk"/>
            <img src="" alt="comment" className="post__bottom-icon"/>
            <img src="" alt="share" className="post__bottom-icon"/>
        </div>
    );
}

function Content(props) {
    return(
        <div className="content">
        </div>
    );
}