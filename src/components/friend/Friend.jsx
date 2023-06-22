import React from "react";

const Friend = ({user}) => {
  return (
    <li className="sidebarFriend mb-4 ms-3">
      <img
        className="sidebarFriendImg rounded-circle object-fit-cover me-2 mb-0"
        src="https://picsum.photos/40/40"
        alt="friend"
      />
      <span className="sidebarFriendName mb-0">{user.username}</span>
    </li>
  );
};

export default Friend;
