import "./online.css";
import React from "react";

const Online = ({user}) => {
    return (
      <li className="d-flex align-items-center mb-3">
        <div className="position-relative me-2">
          <img
            src={user?.profilePicture}
            alt="profile"
            className="rightbarProfileImg rounded-circle"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="mx-2">{user?.username}</span>
      </li>
    );
  };
  
  export default Online;
