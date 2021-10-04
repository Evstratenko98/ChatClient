import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import Styles from "./index.module.scss";
import { GetUserAction, ResetAction } from "../../redux/actions/user";

const Authorization = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { _id } = useSelector((state) => state.user);

    useEffect(() => {
        Cookies.remove("userId");
        dispatch(ResetAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (_id) history.push("/");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_id]);

    return (
        <div className={Styles.wrapper}>
            <div className={Styles.content}>
                <button type="button" className={Styles.logo}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#fff"
                        className="bi bi-chat-dots-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                </button>
                <h1 className={Styles.title}>Войти в приложение</h1>

                <Formik
                    initialValues={{ username: "", password: "" }}
                    validate={(values) => {
                        const errors = {};

                        if (!values.username) errors.username = "Required";
                        if (!values.password) errors.password = "Required";

                        return errors;
                    }}
                    onSubmit={(values, actions) => {
                        dispatch(GetUserAction(values));
                        actions.resetForm();
                    }}
                >
                    {(props) => (
                        <form onSubmit={props.handleSubmit}>
                            <input
                                className={Styles.input}
                                placeholder="Введите логин"
                                type="text"
                                name="username"
                                onChange={props.handleChange}
                                value={props.values.username}
                            />
                            <input
                                className={Styles.input}
                                placeholder="Введите пароль"
                                type="password"
                                name="password"
                                onChange={props.handleChange}
                                value={props.values.password}
                            />
                            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                            <button type="submit" className={Styles.submit}>
                                Войти
                            </button>
                        </form>
                    )}
                </Formik>

                <Link to="/reg" className={Styles.Reg}>
                    Регистрация
                </Link>
            </div>
        </div>
    );
};

export default Authorization;
