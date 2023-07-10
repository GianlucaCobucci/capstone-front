import React, { useState, useEffect, useContext } from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import avatar from "../../assets/noAvatar.jpeg";
import cover from "../../assets/noCover.jpeg";
import moment from "moment";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  //console.log(post)
  const [like, setLike] = useState(post?.likes.length);
  //console.log(post)
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data.user);
      //console.log(res.data.user)
    };
    fetchUser();
  }, [post.userId]);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  const likeHandler = async () => {
    try {
      const response = await axios.put(`/posts/${post._id}/like`, {
        userId: currentUser._id,
      });
      //console.log(response);
      setLike(isLiked ? like - 1 : like + 1);
      setIsLiked(!isLiked);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post w-100 shadow rounded my-4">
      <div className="postWrapper p-3">
        <div className="postTop d-flex align-items-center justify-content-between">
          <div className="postTopLeft d-flex align-items-center">
            <Link to={`/profile/${user?.username}`}>
              <img
                className="postProfileImg rounded-circle object-fit-cover"
                src={user?.profilePicture || avatar} //se c'è immagine inserita da database mettila, altrimento metti jpeg preimpostato
                alt="post"
                width="50"
                height="50"
              />
            </Link>

            <span className="postUsername fw-bold mx-3">{user?.username}</span>

            <span className="postDate">
              {moment(post?.createdAt).fromNow()}
            </span>
          </div>

          <div className="postTopRight" style={{ cursor: "pointer" }}>
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter mt-4">
          <span className="postText">{post?.description}</span>
          <img
            className="postImg w-100 my-3 rounded"
            src={post?.img ? post.img : cover}
            alt="post"
          />
        </div>
        <div className="postBottom d-flex align-items-center justify-content-between">
          <div className="postBottomLeft d-flex align-items-center">
            <ThumbUpIcon className="likeIcon mx-2" onClick={likeHandler} />
            <span className="postLikeCounter ms-3">
              A {like} persone piace il post
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText border-bottom-dashed cursor-pointer">
              {post?.comment} commenti
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
