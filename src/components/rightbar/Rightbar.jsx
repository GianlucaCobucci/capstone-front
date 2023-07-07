import React, { useEffect, useState } from "react";
import "./rightbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Users } from "../../jsonData";
import Online from "../../components/online/Online";
import magicHubAmazon from "../../assets/magichub-amazon.jpg";
import axios from "axios";
//import cover from '../../assets/noCover.jpeg'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const Rightbar = ({ user }) => {
  //è child di profile
  const [friends, setFriends] = useState([]);
  const [followed, setFollowed] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);

  useEffect(() => {
    setFollowed(currentUser.followings?.includes(user?.id));
  }, [currentUser, user?.id]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        if (user && user._id) {
          const friendList = await axios.get(`/users/friends/${user._id}`);
          setFriends(friendList.data.friendList);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        const response = await axios.put(`/users/${user?._id}/unfollow`, {
          userId: currentUser._id,
        });
        if (response.status === 200) {
          dispatch({ type: "UNFOLLOW", payload: user._id });
          setFollowed(false);
        }
      } else {
        const response = await axios.put(`/users/${user?._id}/follow`, {
          userId: currentUser._id,
        });
        if (response.status === 200) {
          dispatch({ type: "FOLLOW", payload: user._id });
          setFollowed(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };


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
        <a
          href="https://www.amazon.it/Magic-The-Gathering/s?k=Magic+The+Gathering"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={magicHubAmazon}
            alt="amazon"
            className="rightbarAd w-100 mt-0 rounded"
          />
        </a>
      </>
    );
  };

  const ProfileRightbar = () => {
    //questa è rightbar che trovo se sono sulla pagina profile
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Smetti di seguire" : "Segui"}
            {followed ? <RemoveCircleIcon /> : <AddCircleIcon />}
          </button>
        )}
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
          {friends.map((friend) => (
            <Link
              to={`/profile/${friend.username}`}
              style={{ textDecoration: "none", color: "black" }}
              key={friend._id}
            >
              <div className="rightbarFollowing">
                <img
                  src="https://picsum.photos/50/50" //se c'è immagine in database sarebbe src={friend.profilePicture ? friend.profilePicture : cover }
                  alt=""
                  className="rightbarFollowingImg rounded-circle"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
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
