/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Input } from 'antd';
import { Field } from 'formik';
import io from 'socket.io-client';
import {
  GetMessagesAction,
  ResetMessagesAction,
  AddMessagesAction
} from '../../redux/actions/messages';
import { ResetRoomAction } from '../../redux/actions/room';
import Download from '../../../../components/download';
import Message from '../../../../components/message';
import FormContainer from '../../../../components/forms/formContainer';
import { URL, emits } from '../../../../constants/SOCKET';

import './index.scss';

const { Content } = Layout;
const socket = io(URL);

const ChatContent = () => {
  const dispatch = useDispatch();
  const room = useSelector((state) => state.room);
  const { username } = useSelector((state) => state.user);
  const { messages, isLoading } = useSelector((state) => state.messages);

  const selectedRoom = useRef(null);

  useEffect(() => {
    // socket.on(emits.alert, (alert) => console.log(alert));
    socket.on(emits.message, ({ sender, text, _id }) =>
      dispatch(AddMessagesAction({ sender, text, _id }))
    );

    return () => {
      dispatch(ResetRoomAction());
      dispatch(ResetMessagesAction());
    };
  }, []);

  useEffect(() => {
    if (messages.length) {
      dispatch(ResetMessagesAction());
      if (selectedRoom.current?._id)
        socket.emit(emits.unsubscribe, { username, roomId: selectedRoom.current._id });
    }
    selectedRoom.current = { ...room };
  }, [room]);

  useEffect(() => {
    if (room._id && !messages.length) {
      dispatch(GetMessagesAction({ roomId: room._id }));
      socket.emit(emits.subscribe, { username, roomId: room._id });
    }
  }, [messages, room]);

  const handleSubmit = (values, actions) => {
    socket.emit('sendMessage', {
      roomId: room._id,
      sender: username,
      text: values.text
    });
    actions.resetForm();
  };
  const validation = (values) => {
    const errors = {};
    if (!values.text) errors.text = 'Required';
    return errors;
  };

  return (
    <Content className="content">
      <div className="content__info">
        <span className="content__title">{room.title}</span>
      </div>
      <div className="content__messages">
        {isLoading && <Download />}
        {messages.map((message) => (
          <Message
            key={message._id}
            sender={message.sender}
            text={message.text}
            createAt={message.createAt}
            own={username === message.sender}
          />
        ))}
      </div>

      <FormContainer
        onSubmit={handleSubmit}
        className="content__form"
        validate={validation}
        initialValues={{ text: '' }}
      >
        {(props) => (
          <>
            <Input
              className="content__sendMessage"
              placeholder="Напишите сообщение"
              type="text"
              name="text"
              onChange={props.handleChange}
              value={props.values.text}
            />
            <button type="submit" className="content__submit">
              Отправить
            </button>
          </>
        )}
      </FormContainer>
    </Content>
  );
};

export default ChatContent;
