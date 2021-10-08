import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Field } from 'formik';
import { GetUserAction, ResetAction } from '../../redux/actions/user';
import { types } from '../../constants/ACTION_TYPES';
import Logo from '../../components/logo';
import FORM from '../../components/forms/index';
import Styles from './index.module.scss';

const { FormContainer } = FORM;
const Registration = () => {
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
    if (!values.age) errors.age = 'Required';
    if (!values.gender) errors.gender = 'Required';
    if (values.password !== values.confirmPassword) errors.confirmPassword = 'Password mismatch';

    return errors;
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.content}>
        <Logo />
        <h1 className={Styles.title}>Регистрация</h1>
        <FormContainer
          onSubmit={handleSubmit}
          validate={validtation}
          initialValues={{
            username: '',
            password: '',
            confirmPassword: '',
            age: '',
            gender: '',
            type: types.registration
          }}
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
              <Field
                className={Styles.input}
                placeholder="Повторите пароль"
                type="password"
                name="confirmPassword"
                onChange={props.handleChange}
                value={props.values.confirmPassword}
              />
              <Field
                className={Styles.input}
                placeholder="Введите свой возраст"
                type="text"
                name="age"
                onChange={props.handleChange}
                value={props.values.age}
              />
              <Field
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
            </>
          )}
        </FormContainer>
      </div>
    </div>
  );
};

export default Registration;
