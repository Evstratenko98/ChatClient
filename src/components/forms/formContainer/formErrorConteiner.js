import { useEffect } from 'react';

const FormErrorContainer = (props) => {
  useEffect(() => {
    props.setErrors(props.serverErrors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.serverErrors]);

  return props.children;
};

export default FormErrorContainer;
