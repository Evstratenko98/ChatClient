import React from "react";
import Styles from "./Message.module.scss";

import { useSelector } from "react-redux";
const Message = ({ message, sender }) => {
   console.log(message, sender);
   const { user } = useSelector((state) => state.user);

   return user.username === sender ? (
      <div className={Styles.myMessageWrapper}>
         <div className={Styles.myMessage}>
            <p>{message}</p>
         </div>
      </div>
   ) : (
      <div className={Styles.messageWrapper}>
         <div className={Styles.message}>
            <p>{sender}:</p>
            <p>{message}</p>
         </div>
      </div>
   );
};

export default Message;
