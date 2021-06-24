import React from 'react';
import * as yup from 'yup';

import SignInContainer from './SignInContainer';
import useSignIn from '../../hooks/useSignIn';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required').max(30, "Too long, limit 30 characters"),
  password: yup.string().required('Password is required').max(50, "Too long, limit 50 characters")
});

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SignInContainer onSubmit={onSubmit} validationSchema={validationSchema} />
  );
};

export default SignIn;