import React from "react";
import Styles from "./SendMessageForm.module.scss";

const SendMessageForm = ({ setMessage, sendMessage, message }) => {
   return (
      <form className={Styles.form}>
         <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={Styles.form__input}
            placeholder="Введите сообщение"
         />
         <input
            type="submit"
            className={Styles.form__submit}
            onClick={(e) => sendMessage(e)}
         />
      </form>
   );
};

export default SendMessageForm;
