import React, {useState} from 'react'
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { Users } from "../../jsonData";

const Post = ({ post }) => {
  //console.log(post)
  
  const [like, setLike] = useState(post?.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked)
  }

  return (
    <div className="post w-100 shadow rounded my-4">
      <div className="postWrapper p-3">
        <div className="postTop d-flex align-items-center justify-content-between">
          <div className="postTopLeft d-flex align-items-center">

            <img
              className="postProfileImg rounded-circle object-fit-cover"
              src={
                Users.find((user) => user.id === post?.userId)?.profilePicture
              }
              alt="post"
            />

            <span className="postUsername fw-bold mx-3">
              {Users.find((user) => user.id === post?.userId)?.username}
            </span>

            <span className="postDate">{post?.date}</span>

          </div>

          <div className="postTopRight" style={{ cursor: "pointer" }}>
            <MoreVertIcon />
          </div>

        </div>
        <div className="postCenter mt-4">
          <span className="postText">{post?.description}</span>
          <img
            className="postImg w-100 my-3 rounded"
            src={post?.photo}
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
