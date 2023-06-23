import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import 'bootstrap/dist/css/bootstrap.min.css';

const Post = () => {
  
  return (
    <div className='post w-100 shadow rounded my-4'>
      <div className="postWrapper p-3">
        <div className="postTop d-flex align-items-center justify-content-between">
            <div className="postTopLeft d-flex align-items-center">
                <img className="postProfileImg rounded-circle object-fit-cover" src="https://picsum.photos/50/50" alt="post" />
                <span className='postUsername fw-bold mx-3'>Gianluca Cobucci</span>
                <span className='postDate'>5 minutes ago</span>
            </div>
            <div className="postTopRight" style={{cursor:'pointer'}} >
                <MoreVertIcon/>
            </div>
        </div>
        <div className="postCenter mt-4">
            <span className="postText">Primo post</span>
            <img className="postImg w-100 my-3 rounded" src="https://picsum.photos/650/300" alt="post" />
        </div>
        <div className="postBottom d-flex align-items-center justify-content-between">
            <div className="postBottomLeft d-flex align-items-center">
                <ThumbUpIcon className='likeIcon mx-2' />
                <span className="postLikeCounter ms-3">A 32 persone piace il post</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText border-bottom-dashed cursor-pointer">9 commenti</span>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Post