import React from "react";
import Styles from "./Registration.module.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import API from "../../api";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reqUser } from "../../redux/actions/userActions";
const Registration = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const dispatch = useDispatch();
   const history = useHistory();
   const onSubmit = (data) => {
      if (data.password !== data.repeatPassword)
         return alert("Пароли не совпадают!");
      API.registration(data).then((res) => {
         const { username, password } = res;
         dispatch(reqUser({ username, password }));
         history.push("/home");
      });
   };

   return (
      <div className={Styles.wrapper}>
         <div className={Styles.content}>
            <Link to="/" className={Styles.logo}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#000"
                  className="bi bi-chat-dots-fill"
                  viewBox="0 0 16 16"
               >
                  <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
               </svg>
            </Link>
            <h1 className={Styles.title}>Регистрация</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
               <input
                  className={Styles.input}
                  placeholder="Введите логин"
                  type="text"
                  {...register("username", { required: true })}
               />
               <input
                  className={Styles.input}
                  placeholder="Введите пароль"
                  type="password"
                  {...register("password", { required: true })}
               />
               <input
                  className={Styles.input}
                  placeholder="Повторите пароль"
                  type="password"
                  {...register("repeatPassword", { required: true })}
               />
               <input
                  className={Styles.input}
                  placeholder="Введите свой возраст"
                  type="text"
                  {...register("age", { required: true })}
               />
               <input
                  className={Styles.input}
                  placeholder="Введите свой гендер"
                  type="text"
                  {...register("gender", { required: true })}
               />

               {errors.exampleRequired && <span>This field is required</span>}

               <button type="submit" className={Styles.submit}>
                  Войти
               </button>
            </form>
         </div>
      </div>
   );
};

export default Registration;
