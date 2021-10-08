import React from 'react';
import { Form, Formik } from 'formik';
import FormErrorContainer from './formErrorConteiner';

const FormContainer = (props) => {
  const { serverErrors, className, ...other } = props;
  return (
    <Formik {...other}>
      {(formik) => {
        const { setErrors } = formik;
        return (
          <FormErrorContainer serverErrors={serverErrors && serverErrors} setErrors={setErrors}>
            <Form className={className}>{props.children(formik)}</Form>
          </FormErrorContainer>
        );
      }}
    </Formik>
  );
};

export default FormContainer;
