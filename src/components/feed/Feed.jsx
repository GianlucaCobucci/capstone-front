import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import { Posts } from "../../jsonData";
import {nanoid} from 'nanoid';

import React from "react";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={nanoid()} post={post}/>
        ))}
        <Post/>
      </div>
    </div>
  );
};

export default Feed;
