import React, { useState, useEffect } from "react";
import Styles from "./Home.module.scss";
import Room from "../../components/Room/Room";
import Profile from "../../components/Profile/Profile";
import Chat from "../../components/Chat/Chat";
import API from "../../api";
import { useSelector } from "react-redux";
const Home = () => {
   const [rooms, setRooms] = useState([]);
   const { messages } = useSelector((state) => state.messages.messages);

   useEffect(() => {
      API.getRooms().then((res) => {
         setRooms(res.rooms);
      });
   }, []);

   return (
      <div className={Styles.wrapper}>
         <div className={Styles.rooms}>
            <div className={Styles.rooms__content}>
               <h3 className={Styles.rooms__title}>Комнаты чата:</h3>
               {rooms &&
                  rooms.map((key, index) => (
                     <Room room={key} key={`home--${index}`} />
                  ))}
            </div>
         </div>
         <div className={Styles.block}>
            <div className={Styles.chat}>
               {messages ? <Chat /> : <Profile />}
            </div>
         </div>
      </div>
   );
};

export default Home;
