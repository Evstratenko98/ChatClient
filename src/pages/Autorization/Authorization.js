import React from "react";
import Styles from "./Authorization.module.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reqUser } from "../../redux/actions/userActions";
import { useHistory } from "react-router";

const Authorization = () => {
   const dispatch = useDispatch();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const history = useHistory();

   const onSubmit = async (data) => {
      dispatch(reqUser(data));
      history.push("/home");
   };

   return (
      <div className={Styles.wrapper}>
         <div className={Styles.content}>
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
            <h1 className={Styles.title}>Войти в приложение</h1>
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

               {errors.exampleRequired && <span>This field is required</span>}

               <button type="submit" className={Styles.submit}>
                  Войти
               </button>
            </form>
            <Link to="reg" className={Styles.Reg}>
               Регистрация
            </Link>
         </div>
      </div>
   );
};

export default Authorization;
