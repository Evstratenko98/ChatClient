import React from 'react';
import './index.scss';

const Message = ({ sender, text, createAt }) => (
  <div className="message__wrap">
    <div className="message__message">
      <p className="message__person">{sender}:</p>
      <span className="message__text">{text}</span>
    </div>
    <span className="message__time">{createAt}</span>
  </div>
);

export default Message;
