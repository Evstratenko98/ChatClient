import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Field } from 'formik';
import Logo from '../../components/logo';
import { GetUserAction, ResetAction } from '../../redux/actions/user';
import FORM from '../../components/forms/index';
import Styles from './index.module.scss';

const { FormContainer } = FORM;

const Authorization = (owner) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { _id } = useSelector((state) => state.user);

  useEffect(() => {
    Cookies.remove('userId');
    dispatch(ResetAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (_id) history.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_id]);

  const handleSubmit = (values) => dispatch(GetUserAction(values));
  const validtation = (values) => {
    const errors = {};

    if (!values.username) errors.username = 'Required';
    if (!values.password) errors.password = 'Required';

    return errors;
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.content}>
        <Logo />
        <h1 className={Styles.title}>Войти в приложение</h1>
        <FormContainer
          onSubmit={handleSubmit}
          initialValues={{ username: '', password: '' }}
          validate={validtation}
        >
          {(props) => (
            <>
              <Field
                className={Styles.input}
                placeholder="Введите логин"
                type="text"
                name="username"
                onChange={props.handleChange}
                value={props.values.username}
              />
              <Field
                className={Styles.input}
                placeholder="Введите пароль"
                type="password"
                name="password"
                onChange={props.handleChange}
                value={props.values.password}
              />
              <button type="submit" className={Styles.submit}>
                Войти
              </button>
            </>
          )}
        </FormContainer>

        <Link to="/reg" className={Styles.Reg}>
          Регистрация
        </Link>
      </div>
    </div>
  );
};

export default Authorization;
