import './feed.css'
import Share from '../share/Share'
import React from 'react'
import Post from '../post/Post';

const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        <Post/>
        {/* {Array.isArray(posts) && posts.map((post)=>(
          <Post key={post._id} post={post}/>
        ))} */}
      </div>
    </div>
  );
}

export default Feed
