import React from "react";
import "./rightbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Users } from "../../jsonData";
import Online from "../../components/online/Online";
import magicHubAmazon from '../../assets/magichub-amazon.jpg';


const Rightbar = ({ user }) => {  //è child di profile
  const HomeRightbar = () => {
    return (
      <>
        <a href="https://magic.wizards.com/it" target="_blank" rel="noreferrer">
          <img
            src="https://mtgrocks.com/wp-content/uploads/2021/02/magicarenax.jpg"
            alt="advertisement"
            className="rightbarAd w-100 mt-0 rounded"
          />
        </a>
        <h4 className="rightbarTitle my-4">Amici online</h4>
        <ul className="rightbarFriendList list-unstyled">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
        <a href="https://www.amazon.it/Magic-The-Gathering/s?k=Magic+The+Gathering" target="_blank" rel="noreferrer">
          <img
            src={magicHubAmazon}
            alt="amazon"
            className="rightbarAd w-100 mt-0 rounded"
          />
        </a>
      </>
    );
  };

  const ProfileRightbar = () => { //questa è rightbar che trovo se sono sulla pagina profile
    return (
      <>
        <h4 className="rightbarTitle">Informazioni utente </h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Città:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Mazzo preferito:</span>
            <span className="rightbarInfoValue">{user.deck}</span>
          </div>
        </div>

        <h4 className="rightbarTitle">Amici</h4>

        <div className="rightBarFollowings">
          <div className="rightbarFollowing">
            <img
              src="https://picsum.photos/50/50"
              alt=""
              className="rightbarFollowingImg rounded-circle"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>

        <div className="rightBarFollowings">
          <div className="rightbarFollowing">
            <img
              src="https://picsum.photos/50/50"
              alt=""
              className="rightbarFollowingImg rounded-circle"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>

        <div className="rightBarFollowings">
          <div className="rightbarFollowing">
            <img
              src="https://picsum.photos/50/50"
              alt=""
              className="rightbarFollowingImg rounded-circle"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>

        <div className="rightBarFollowings">
          <div className="rightbarFollowing">
            <img
              src="https://picsum.photos/50/50"
              alt=""
              className="rightbarFollowingImg rounded-circle"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>

        <div className="rightBarFollowings">
          <div className="rightbarFollowing">
            <img
              src="https://picsum.photos/50/50"
              alt=""
              className="rightbarFollowingImg rounded-circle"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>

        <div className="rightBarFollowings">
          <div className="rightbarFollowing">
            <img
              src="https://picsum.photos/50/50"
              alt=""
              className="rightbarFollowingImg rounded-circle"
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
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
