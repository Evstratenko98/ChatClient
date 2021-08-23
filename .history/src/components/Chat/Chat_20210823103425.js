import React, { useState, useEffect } from "react";
import Styles from "./Chat.module.scss";
import io from "socket.io-client";
import InfoBar from "../InfoBar/InfoBar";
import SendMessageForm from "../SendMessageForm/SendMessageForm";
import Messages from "../Messages/Messages";

import { useSelector } from "react-redux";

const ENDPOINT = "localhost:5000";

let socket;

const Chat = () => {
   const { user } = useSelector((state) => state.user);
   // const { messages } = useSelector((state) => state.messages.messages);
   const [newSender, setNewSender] = useState("");
   const [message, setMessage] = useState("");
   const [messages, setMessages] = useState([]);
   const roomId = localStorage.getItem("roomId");

   useEffect(() => {
      socket = io(ENDPOINT);

      if (roomId) socket.emit("join", { username: user.username, roomId });

      return socket.on("disconnect", { username: user.username, roomId });
   }, [ENDPOINT]);

   useEffect(() => {
      const { username } = user;

      socket.on("message", ({ text, sender }) => {
         setNewSender(sender);
         setMessages((messages) => [...messages, { text: text }]);
      });
   }, []);

   const sendMessage = (event) => {
      event.preventDefault();

      if (message) {
         socket.emit("sendMessage", message, user.username, roomId, () => {
            setMessage("");
         });
      }
   };

   return (
      <div className={Styles.wrapper}>
         <InfoBar />
         <Messages messages={messages} sender={newSender} />
         <SendMessageForm
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
         />
      </div>
   );
};

export default Chat;
