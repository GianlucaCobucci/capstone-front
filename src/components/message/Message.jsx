import React from "react";
import "./message.css";
import moment from "moment";

const Message = ({ message, own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img src="https://picsum.photos/50/50" alt="" className="messageImg" />
        <p className="messageText">{message?.text}</p>
      </div>
      <div className="messageBottom">{moment(message?.createdAt).fromNow()}</div>
    </div>
  );
};

export default Message;
