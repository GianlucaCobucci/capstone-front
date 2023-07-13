import React, { useState, useEffect } from "react";
import "./conversation.css";
import axios from "axios";
import avatar from "../../assets/noAvatar.jpeg";


const Conversations = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);
  //console.log(user)

  useEffect(() => {
    const friendId = conversation.members.find(
      (member) => member !== currentUser._id
    );
    const getUser = async () => {
      try {
        const res = await axios.get(`/users?userId=${friendId}`);
        setUser(res.data);
        //console.log(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversations">
      <img
        src={user?.profilePicture || "https://picsum.photos/50/50" || avatar} //se c'è la prima metti prima, sennò seconda, sennò terza
        alt=""
        className="conversationImg"
      />
      <span className="conversationName">{user?.user?.username}</span>
    </div>
  );
};

export default Conversations;
