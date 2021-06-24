import React from 'react';
import * as yup from 'yup';

import SignUpContainer from './SignUpContainer';
import useSignUp from '../../hooks/useSignUp';
import useSignIn from '../../hooks/useSignIn';

const validationSchema = yup.object().shape({
  username: yup.string()
            .required('Username is required')
            .max(30, "Too long, limit 30 characters")
            .min(1, "Username must be at least 1 character"),
  password: yup.string()
            .required('Password is required')
            .max(50, "Too long, limit 50 characters")
            .min(5, "Password must be at least 5 characters"),
  passwordConfirm: yup.string()
            .oneOf([yup.ref('password'), null], "Passwords don't match")
            .required('Password confirm is required')
});

const SignUp = () => {
    const [signUp] = useSignUp();
    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            await signUp({ username, password });
            await signIn({ username, password });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <SignUpContainer onSubmit={onSubmit} validationSchema={validationSchema} />
    );
};

export default SignUp;

