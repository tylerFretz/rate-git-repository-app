import React from 'react';
import { View, StyleSheet } from 'react-native';
import FormikTextInput from '../utils/FormikTextInput';

import theme from '../../theme';
import Button from '../utils/Button';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        padding: 15,
        marginTop: 50
    },
    fieldContainer: {
        marginBottom: 15
    }
});

const SignUpForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <View style={styles.fieldContainer}>
                <FormikTextInput name='username' placeholder='Username' />
            </View>
            <View style={styles.fieldContainer}>
                <FormikTextInput name='password' placeholder='Password' secureTextEntry />
            </View>
            <View style={styles.fieldContainer}>
                <FormikTextInput name='passwordConfirm' placeholder='Password confirmation' secureTextEntry />
            </View>
            <Button onPress={onSubmit}>
                Sign up
            </Button>
        </View>
    );
};

export default SignUpForm;