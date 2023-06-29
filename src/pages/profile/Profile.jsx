import React, { useEffect, useState } from "react";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import axios from 'axios';
import { useParams } from "react-router";

const Profile = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const { username } = useParams();
  console.log(username);

  useEffect(() => {
    
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`/users?username=${username}`);
        setUser(res.data.user);
        console.log(res.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchUserPosts = async () => {
      try {
        const res = await axios.get(`/posts/profile/${username}`);
        setPosts(res.data.posts);
        console.log(res.data.posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
    fetchUserPosts();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture || "https://picsum.photos/200/200"}
                alt="profile cover"
              />
              <img
                className="profileUserImg"
                src={user.profilePicture || "https://picsum.photos/200/200"}
                alt="profile user"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed posts={posts} />
            <Rightbar user={user} />
            {/* questa prop indica la rightbar nella homepage o nella profile page */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
