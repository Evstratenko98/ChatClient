import React from "react";
import Styles from "./Messages.module.scss";

import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Message/Message";

const Messages = ({ messages, sender }) => {
   return (
      <ScrollToBottom className={Styles.messages}>
         {messages.map((message, i) => (
            <div key={i}>
               <Message message={message} sender={sender} />
            </div>
         ))}
      </ScrollToBottom>
   );
};

export default Messages;
