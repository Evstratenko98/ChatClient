import React from 'react';
import './index.scss';

const Message = ({ sender, text, createAt, own }) => (
  <div className={own ? 'message__wrap message__wrap_own' : 'message__wrap'}>
    <div className={own ? 'message__message message__message_own' : 'message__message'}>
      <p className="message__person">{sender}:</p>
      <span className="message__text">{text}</span>
    </div>
    <span className="message__time">{createAt}</span>
  </div>
);

export default Message;
