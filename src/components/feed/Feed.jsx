import React, { useState, useEffect } from 'react';
import Share from '../share/Share';
import Post from '../post/Post';
import './feed.css';
import { nanoid } from 'nanoid';
import axios from 'axios';

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/posts`) //se c'username fa questo
        setPosts(res.data.posts);
        console.log(res.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, [username]);
  

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts?.map((post) => (
          <Post key={nanoid()} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;

