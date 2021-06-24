import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import theme from '../../theme';
import SignUpForm from './SignUpForm';

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: theme.colors.backgroundLight,
        padding: 15,
    }
});

const initialValues = {
    username: '',
    password: '',
    passwordConfirm: '',
};

const SignUpContainer = ({ onSubmit, validationSchema }) => (
    <View style={styles.formContainer}>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
    </View>
);

export default SignUpContainer;