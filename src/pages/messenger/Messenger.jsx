import React, { useContext, useEffect, useState, useRef } from "react";
import Topbar from "../../components/topbar/Topbar";
import "bootstrap/dist/css/bootstrap.css";
import Conversations from "../conversations/Conversations";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { nanoid } from "nanoid";
import { io } from "socket.io-client";

const Messenger = () => {
  const [conversations, setConversations] = useState([]);
  //console.log(conversations);
  const [currentChat, setCurrentChat] = useState(null);
  //console.log(currentChat)
  const [messages, setMessages] = useState([]);
  //console.log(messages)
  const [newMessage, setNewMessage] = useState("");
  //console.log(newMessage)
  const [arrivalMessage, setArrivalMessage] = useState(null);
  //console.log(arrivalMessage)
  const [onlineUsers, setOnlineUsers] = useState([]);
  //console.log(arrivalMessage)
  const { user } = useContext(AuthContext);
  //console.log(user)
  const scrollRef = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(user.followings.filter(f => users.some(u=>u.userId === f)));
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`/conversations/${user._id}`);
        //console.log(res);
        setConversations(res.data.conversation);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`/messages/${currentChat?._id}`);
        setMessages(res.data.messages);
        //console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat]);
  //console.log(messages)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );
    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId: receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post(`/messages`, message);
      setMessages([...messages, res.data.savedMessage]);
      setNewMessage("");
      //console.log(res)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" }); //scrolla automaticamente alla fine fella conversazione
  }, [messages]);

  return (
    <>
      <Topbar />
      <div className="d-flex h-100">
        <div className="p-2 flex-grow-1" style={{ width: "10%" }}>
          <div className="h-100 p-2">
            <input
              placeholder="Cerca amici"
              type="text"
              className="form-control mb-2 border-0 border-bottom border-gray"
            />
            {conversations.map((conversation) => (
              <div key={nanoid()} onClick={() => setCurrentChat(conversation)}>
                <Conversations conversation={conversation} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="p-2 flex-grow-1" style={{ width: "30%" }}>
          <div
            className="h-100 p-2 d-flex flex-column justify-content-between"
            style={{ position: "relative" }}
          >
            {currentChat /* finisce a riga 87 */ ? (
              <>
                <div key={nanoid()} className="overflow-auto pr-2">
                  {messages.map((message) => (
                    <div key={nanoid()} ref={scrollRef}>
                      <Message
                        key={message._id}
                        message={message}
                        own={message?.sender === user?._id}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-2 d-flex align-items-center justify-content-between">
                  <textarea
                    onChange={(event) => setNewMessage(event.target.value)}
                    value={newMessage}
                    className="form-control rounded p-2 flex-grow-1"
                    placeholder="Scrivi qualcosa..."
                    name="chatMessageInput"
                    id="chatMessageInput"
                    cols="60"
                    rows="10"
                  ></textarea>
                  <button
                    onClick={handleSubmit}
                    className="btn btn-danger mx-4 text-white"
                    style={{ width: "70px", height: "40px" }}
                  >
                    Invia
                  </button>
                </div>
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <span style={{ fontSize: "20px" }}>
                  <i>Inizia una conversazione</i>
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="p-2 flex-grow-1">
          <div className="h-100 p-2">
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
