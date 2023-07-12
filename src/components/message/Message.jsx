import React from "react";
import "./message.css";

const Message = ({own}) => {
  return (
    <div className={own ? "message own" : "message"}> {/* se c'è own allora metti message e own, altrimenti solo message */}
      <div className="messageTop">
        <img 
            src="https://picsum.photos/50/50" 
            alt="" 
            className="messageImg" 
        />
        <p className="messageText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptatem illum. Suscipit commodi similique at temporibus eligendi excepturi voluptates voluptatibus. Perferendis suscipit quos et sapiente cupiditate alias unde explicabo excepturi.</p>
      </div>
      <div className="messageBottom">Un'ora fa</div>
    </div>
  );
};

export default Message;
