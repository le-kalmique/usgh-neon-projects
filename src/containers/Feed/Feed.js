import React, {useState} from 'react';
import Loader from "../../components/Loader/Loader";

import InfiniteScroll from "react-infinite-scroll-component";

import "./feed.css";
import PostComponent from "../../components/PostComponent/PostComponent";
import Post from "../../utils/models/post";

function Feed() {
  // const [page, setPage] = useState(0);
  // const [posts, addPosts] = useState([]);

  const posts = [
    {
      author : "Donald Trump",
      profilePhotoURL : "https://www.freepngimg.com/save/94356-trump-face-donald-ghostbusters-facial-expression-drawing/128x128",
      date : "Today, 10:27",
      amountOfLikes : 245,
      liked : false,
      amountOfComments : 14,
      content : {
        contentType : [
          Post.ContentType.Text,
          Post.ContentType.Images
        ],
        data : {
          text : "Guys, I have finally reached 112% in Hollow Knight! It was extremely hard, but I guess you should try it :)",
          images : ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e2a5dcd-6a82-4182-9032-d31b5d6db4d9/dcuxuv6-1931eaa5-3561-4537-a701-30a188884c35.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvM2UyYTVkY2QtNmE4Mi00MTgyLTkwMzItZDMxYjVkNmRiNGQ5XC9kY3V4dXY2LTE5MzFlYWE1LTM1NjEtNDUzNy1hNzAxLTMwYTE4ODg4NGMzNS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.aALzHnHU3tsSyiaOCx0P9TZSp5lmoAOWTQjJuWN18x0"]
        }
      }
    },
    {
      author : "Elon Musk",
      profilePhotoURL : "https://images.squarespace-cdn.com/content/v1/5381d542e4b0b3a648eed917/1443280972352-0LLUX8HE0NTD568IZQL9/ke17ZwdGBToddI8pDm48kAVIZRW_aYGT8hI2PHSWyxxZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHGBpfSbmMvNk_5Kv8o6B2Q79dUHlavNfCsQ8BCsAzNraEcAfnVBrEqrgp1UxUHGkY/image-asset.png?format=750w",
      date : "Today, 08:08",
      amountOfLikes : 188,
      liked : false,
      amountOfComments : 27,
      content : {
        contentType : [
          Post.ContentType.Text,
          Post.ContentType.Videos,
          Post.ContentType.Poll
        ],
        data : {
          text : "Hey, check my first experience in Unity! I believe I did great! What would you say?",
          video : "https://www.youtube.com/embed/xPACyhqlLm0"
        }
      }
    },
    {
      author : "Dong Nguyen",
      profilePhotoURL : "https://img.pngio.com/flappy-bird-hd-free-windows-phone-app-market-flappy-bird-icon-300_300.jpg",
      date : "Some time ago",
      amountOfLikes : 366,
      liked : false,
      amountOfComments : 88,
      content : {
        contentType : [
          Post.ContentType.Text,
          Post.ContentType.Game
        ],
        data : {
          text : "Hello everyone. I'm working on my biggest project and I'm dying for you to try it. Write comments and stay tuned for updates. Thank you.",
          game : "https://gfront.tlgrm.ru/game/flappy/"
        }
      }
    },
    {
      author : "Dong Nguyen",
      profilePhotoURL : "https://img.pngio.com/flappy-bird-hd-free-windows-phone-app-market-flappy-bird-icon-300_300.jpg",
      date : "Some time ago",
      amountOfLikes : 134,
      liked : false,
      amountOfComments : 88,
      content : {
        contentType : [
          Post.ContentType.Text,
          Post.ContentType.Game
        ],
        data : {
          text : "Hello everyone. I'm working on my biggest project and I'm dying for you to try it. Write comments and stay tuned for updates. Thank you.",
          game : "https://gfront.tlgrm.ru/game/2048/"
        }
      }
    },
    {
      author : "Dong Nguyen",
      profilePhotoURL : "https://img.pngio.com/flappy-bird-hd-free-windows-phone-app-market-flappy-bird-icon-300_300.jpg",
      date : "Some time ago",
      amountOfLikes : 134,
      liked : false,
      amountOfComments : 88,
      content : {
        contentType : [
          Post.ContentType.Text,
          Post.ContentType.Game
        ],
        data : {
          text : "Hello everyone. I'm working on my biggest project and I'm dying for you to try it. Write comments and stay tuned for updates. Thank you.",
          game : "https://gfront.tlgrm.ru/game/hextris/"
        }
      }
    }
  ];

  const getPosts = () => {
    // fetch(`https://picsum.photos/v2/list?page=${page}?limit=10`)
    //   .then(ans => ans.json())
    //   .then(imageList => {
    //     addPosts(posts.concat(imageList));
    //     setPage(page+1);
    //   })
  }

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={getPosts}
      hasMore={false}
      loader={<Loader/>}
      className="scroll">
      {
        posts.map((i, index) => (
          <PostComponent postFilling={i} key={index}/>
        ))
      }
      <div className="new-post-button">
          <p className="plus">+</p>
      </div>
    </InfiniteScroll>
  )
}

export default Feed;