import React from 'react'
import './profile.css'
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const Profile = () => {
  return (
<>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileCoverImg" src="https://picsum.photos/200/200" alt="" />
            <img className="profileUserImg" src="https://picsum.photos/200/200" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Gianluca Cobucci</h4>
                <span className="profileInfoDesc">Descrizione</span>

            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/> {/* questa prop indica la rightbar nella homepage o nella profile page */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile