import React from "react";
import Styles from "./Room.module.scss";

import { useDispatch } from "react-redux";
import { reqMessage } from "../../redux/actions/messageActions";

const Room = ({ room }) => {
   const dispatch = useDispatch();

   const getMessages = () => {
      localStorage.setItem("roomId", room._id);
      dispatch(reqMessage(room._id));
   };

   return (
      <button type="button" className={Styles.room} onClick={getMessages}>
         <h4 className={Styles.room__title}>{room.title}</h4>
      </button>
   );
};

export default Room;
