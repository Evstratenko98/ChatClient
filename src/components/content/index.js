/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    GetMessagesAction,
    ResetMessagesAction,
    AddMessagesAction,
} from "../../redux/actions/messages";
import { ResetRoomAction } from "../../redux/actions/room";
import Download from "../../components/download";
import { Layout } from "antd";
import { Formik } from "formik";
import { Input } from "antd";
import Message from "../message";

import io from "socket.io-client";
import { URL } from "../../constants/SOCKET";

import "./index.scss";

const { Content } = Layout;
const socket = io(URL);

const ChatContent = () => {
    const dispatch = useDispatch();
    const room = useSelector((state) => state.room);
    const { username } = useSelector((state) => state.user);
    const { messages, isLoading } = useSelector((state) => state.messages);

    const selectedRoom = useRef(null);

    useEffect(() => {
        socket.on("alert", (alert) => console.log(alert));
        socket.on("message", ({ sender, text }) => dispatch(AddMessagesAction({ sender, text })));

        return () => {
            dispatch(ResetRoomAction());
            dispatch(ResetMessagesAction());
        };
    }, []);

    useEffect(() => {
        if (messages.length) {
            dispatch(ResetMessagesAction());
            socket.emit("unsubscribe", { username, roomId: selectedRoom.current._id });
        }
        selectedRoom.current = { ...room };
    }, [room]);

    useEffect(() => {
        if (room._id && !messages.length) {
            dispatch(GetMessagesAction({ roomId: room._id }));

            socket.emit("subscribe", { username, roomId: room._id });
        }
    }, [messages, room]);

    return (
        <Content className="content">
            <div className="content__info">
                <span className="content__title">{room.title}</span>
            </div>
            <div className="content__messages">
                {isLoading && <Download />}
                {messages.map((message, index) => (
                    <Message
                        key={`message--${index}`}
                        sender={message.sender}
                        text={message.text}
                        createAt={message.createAt}
                    />
                ))}
            </div>
            <Formik
                initialValues={{ text: "" }}
                validate={(values) => {
                    const errors = {};
                    if (!values.text) errors.text = "Required";
                    return errors;
                }}
                onSubmit={(values, actions) => {
                    // console.log({ username, ...values });
                    socket.emit("sendMessage", {
                        roomId: room._id,
                        sender: username,
                        text: values.text,
                    });
                    actions.resetForm();
                }}
            >
                {(props) => (
                    <form onSubmit={props.handleSubmit} className="content__form">
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
                    </form>
                )}
            </Formik>
        </Content>
    );
};

export default ChatContent;
