import React from "react";
import Styles from "./Messages.module.scss";

import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Message/Message";

const Messages = ({ messages }) => {
   return (
      <ScrollToBottom className={Styles.messages}>
         {messages.map((message, index) => (
            <div key={`message-${index}`}>
               <Message message={message.text} sender={message.sender} />
            </div>
         ))}
      </ScrollToBottom>
   );
};

export default Messages;
