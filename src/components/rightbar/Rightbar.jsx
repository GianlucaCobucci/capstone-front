import React from "react";
import "./rightbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Users } from "../../jsonData";
import Online from "../online/Online"

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <a href="https://magic.wizards.com/it" target="_blank" rel="noreferrer">
          <img
            src="https://mtgrocks.com/wp-content/uploads/2021/02/magicarenax.jpg"
            alt="advertisement"
            className="rightbarAd w-100 mt-3 rounded"
          />
        </a>
        <h4 className="rightbarTitle my-4">Amici online</h4>
        <ul className="rightbarFriendList list-unstyled">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">Informazioni utente </h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Città:</span>
            <span className="rightbarInfoValue">Roma</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Mazzo preferito:</span>
            <span className="rightbarInfoValue">Mono Red Burn</span>
          </div>
        </div>

        <h4 className="rightbarTitle">Amici</h4>

        <div className="rightBarFollowings">
          <div className="rightbarFollowing">
            <img
              src="https://picsum.photos/50/50"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>

        <div className="rightBarFollowings">
          <div className="rightbarFollowing">
            <img
              src="https://picsum.photos/50/50"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>

        <div className="rightBarFollowings">
          <div className="rightbarFollowing">
            <img
              src="https://picsum.photos/50/50"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>

        <div className="rightBarFollowings">
          <div className="rightbarFollowing">
            <img
              src="https://picsum.photos/50/50"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>

        <div className="rightBarFollowings">
          <div className="rightbarFollowing">
            <img
              src="https://picsum.photos/50/50"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>

        <div className="rightBarFollowings">
          <div className="rightbarFollowing">
            <img
              src="https://picsum.photos/50/50"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar" style={{ width: "35%" }}>
      <div className="rightbarWrapper mt-3">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;

