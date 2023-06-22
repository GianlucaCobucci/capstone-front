import React, {useState, useEffect} from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Users} from '../../jsonData'

const Post = ({post}) => {
  /* const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false) //perché non ci piace nessun post inizialmente
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`http://localhost:8800/api/users/${post.userId}`)
      const data = await response.json()
      console.log(data)
      setUser(data)
    }

    fetchUser()
  }, [post.userId])

  const likeHandler = () =>{
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  } */

  return (
    <div className='post w-100 shadow rounded my-4'>
      <div className="postWrapper p-3">
        <div className="postTop d-flex align-items-center justify-content-between">
            <div className="postTopLeft d-flex align-items-center">
                <img className="postProfileImg rounded-circle object-fit-cover" src="https://picsum.photos/50/50" alt="post profile" />
                <span className='postUsername fw-bold mx-3'>{Users?.username}</span>
                <span className='postDate'>{/* {post.createdAt} */}</span>
            </div>
            <div className="postTopRight" style={{cursor:'pointer'}} >
                <MoreVertIcon/>
            </div>
        </div>
        <div className="postCenter mt-4">
            <span className="postText">{/* {post.description} */}</span>
            <img className="postImg w-100 my-3 rounded" src="https://picsum.photos/500/250" alt="post" />
        </div>
        <div className="postBottom d-flex align-items-center justify-content-between">
            <div className="postBottomLeft d-flex align-items-center">
                <ThumbUpIcon /* onClick={likeHandler} */ className='likeIcon mx-2' />
                <span className="postLikeCounter ms-3">A {/* {{like}} */} persone piace il post</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText border-bottom-dashed cursor-pointer">{/* {post.comment} */} commenti</span>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Post