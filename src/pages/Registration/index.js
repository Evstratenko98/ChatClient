import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Styles from "./index.module.scss";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { GetUserAction, ResetAction } from "../../redux/actions/user";
import { types } from "../../constants/ACTION_TYPES";

const Registration = () => {
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
                <Link to="/" className={Styles.logo}>
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
                </Link>
                <h1 className={Styles.title}>Регистрация</h1>

                <Formik
                    initialValues={{
                        username: "",
                        password: "",
                        confirmPassword: "",
                        age: "",
                        gender: "",
                        type: types.registration,
                    }}
                    validate={(values) => {
                        const errors = {};

                        if (!values.username) errors.username = "Required";
                        if (!values.password) errors.password = "Required";
                        if (!values.age) errors.age = "Required";
                        if (!values.gender) errors.gender = "Required";
                        if (values.password !== values.confirmPassword)
                            errors.confirmPassword = "Password mismatch";

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
                            <input
                                className={Styles.input}
                                placeholder="Повторите пароль"
                                type="password"
                                name="confirmPassword"
                                onChange={props.handleChange}
                                value={props.values.confirmPassword}
                            />
                            <input
                                className={Styles.input}
                                placeholder="Введите свой возраст"
                                type="text"
                                name="age"
                                onChange={props.handleChange}
                                value={props.values.age}
                            />
                            <input
                                className={Styles.input}
                                placeholder="Введите свой гендер"
                                type="text"
                                name="gender"
                                onChange={props.handleChange}
                                value={props.values.gender}
                            />
                            <button type="submit" className={Styles.submit}>
                                Зарегистрироваться
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Registration;
