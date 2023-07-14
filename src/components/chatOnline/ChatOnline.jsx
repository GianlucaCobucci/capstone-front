import React, { useState, useEffect } from "react";
import "./chatOnline.css";
import axios from "axios";
import avatar from "../../assets/noAvatar.jpeg";
import { nanoid } from "nanoid";

const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get(`/users/friends/${currentId}`);
      setFriends(res.data.friendList);
    };
    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((friend) => onlineUsers.includes(friend._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(`/conversations/find/${currentId}/${user._id}`);
      setCurrentChat(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chatOnline">
      {onlineFriends.map((online) => (
        <div key={nanoid()} className="chatOnlineFriend" onClick={() => handleClick(online)}>
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={online?.profilePicture || "https://picsum.photos/50/50" || avatar}
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{online?.username}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatOnline;
