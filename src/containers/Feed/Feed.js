import React, {useEffect, useState} from 'react';
import Loader from "../../components/Loader/Loader";

import InfiniteScroll from "react-infinite-scroll-component";

import "./feed.css";
import Post from "../../components/Post/Post";

function Feed() {
  const [page, setPage] = useState(0);
  const [posts, addPosts] = useState([]);

  const getPosts = () => {
    fetch(`https://picsum.photos/v2/list?page=${page}?limit=10`)
      .then(ans => ans.json())
      .then(imageList => {
        addPosts(posts.concat(imageList));
        setPage(page+1);
      })
  }

  useEffect(() => {
    getPosts();
  }, [])


  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={getPosts}
      hasMore={true}
      loader={<Loader/>}
      className="scroll"
    >
      {posts.map((i, index) => (
        <Post key={index} content={['oh wow look this is Image ' + index, i]}/>
      ))}
      <NewPostButton/>
    </InfiniteScroll>
  )
}

function NewPostButton() {
  return(
      <div className="new-post-button">
          <p className="plus">+</p>
      </div>
  );

}

export default Feed;