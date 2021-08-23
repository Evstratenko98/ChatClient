import React from "react";
import Styles from "./Profile.module.scss";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
const Profile = () => {
   const { user } = useSelector((state) => state.user);
   const history = useHistory();

   const logout = () => {
      Cookies.remove("userId");
      history.push("/auth");
   };
   return (
      <div className={Styles.wrapper}>
         <button type="button" className={Styles.logo}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="16"
               height="16"
               fill="currentColor"
               className="bi bi-chat-dots-fill"
               viewBox="0 0 16 16"
            >
               <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
         </button>
         <h2>Chat for friends</h2>
         <p>Добро пожаловать, {user.username}</p>
         <p>Чтобы начать общение, перейдите в раздел нужной комнаты.</p>
         <p>
            Ниже представлены данные вашего профиля, которые будут доступны
            другим пользователям, когда напишите сообщение в комнате.
         </p>

         <div className={Styles.data}>
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
            <p>Login: {user.username}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <button type="button" className={Styles.logout} onClick={logout}>
               Выйти из профиля
            </button>
         </div>
      </div>
   );
};

export default Profile;
