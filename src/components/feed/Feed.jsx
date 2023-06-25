import React, {useState, useEffect} from 'react'
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
//import { Posts } from "../../jsonData";
import {nanoid} from 'nanoid';
import axios from 'axios'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async() => {
      const res = await axios.get("posts/timeline/648752d0db8b2b612e9029bb")
      setPosts(res.data.userPosts)
    }
    fetchPosts()
  },[])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={nanoid()} post={post}/>
        ))}
      </div>
    </div>
  );
};

export default Feed;
