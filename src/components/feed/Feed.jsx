import React, {useState, useEffect} from 'react'
import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
//import { Posts } from '../jsonData'

const Feed = () => {
  const [posts, setPosts] = useState([])
  //const [loading, setLoading] = useState(true)
  //const [error, setError] = useState(false)

  useEffect(()=>{
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8800/api/posts")
        const data = await response.json();
        setPosts(data);
        console.log(data);
      } catch (error) {
        console.error("Errore durante il recupero dei post:", error);
      }
    };    
    fetchPosts()
  },[])

  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {/* {Array.isArray(posts) && posts.map((post)=>(
          <Post key={post._id} post={post}/>
        ))} */}
      </div>
    </div>
  );
  
}

export default Feed
