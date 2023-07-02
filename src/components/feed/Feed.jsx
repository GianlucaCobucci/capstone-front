import React, { useState, useEffect } from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import { nanoid } from "nanoid";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Loader from "../loader/Loader";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const extractUsername = location.pathname.split("/").at(-1);

  useEffect(() => {
    const fetchPosts = async () => {
      let endpoint;

      if (extractUsername) {
        endpoint = `/posts/profile/${extractUsername}`;
        //console.log(endpoint);
      } else {
        endpoint = "/posts";
      }

      try {
        const res = await axios.get(endpoint);
        setPosts(res.data.posts);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
    // eslint-disable-next-line
  }, [username, location]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {isLoading ? (
          <Loader /> // Mostra il loader se isLoading è true
        ) : (
          posts?.map((post) => <Post key={nanoid()} post={post} />)
        )}
      </div>
    </div>
  );
};

export default Feed;
