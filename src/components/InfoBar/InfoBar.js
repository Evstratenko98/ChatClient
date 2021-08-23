import React from "react";
import Styles from "./InfoBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage } from "../../redux/actions/messageActions";

const InfoBar = () => {
   const dispatch = useDispatch();
   const { user } = useSelector((state) => state.user);
   const leftForRoom = () => {
      dispatch(deleteMessage());
   };

   return (
      <div className={Styles.infoBar}>
         <div className={Styles.infoBar__content}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="16"
               height="16"
               fill="#fff"
               className="bi bi-person-bounding-box"
               viewBox="0 0 16 16"
            >
               <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
               <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            </svg>
            <h4 className={Styles.infoBar__title}>{user.username}</h4>
         </div>
         <button className={Styles.leftButton} onClick={leftForRoom}>
            Выйти
         </button>
      </div>
   );
};

export default InfoBar;
