import React from 'react'
import './chatOnline.css'

const ChatOnline = () => {
  return (
    <div className='chatOnline'>
        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
                <img className='chatOnlineImg'
                    src="https://picsum.photos/50/50" 
                    alt=""
                />

                <div className="chatOnlineBadge">

                </div>
            </div>
            <span className="chatOnlineName">
                Mario Rossi
            </span>
        </div>
    </div>
  )
}

export default ChatOnline