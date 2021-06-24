import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';
import { StyleSheet, View } from 'react-native';

import FormikTextInput from '../utils/FormikTextInput';
import Button from '../utils/Button';
import theme from '../../theme';

import { CREATE_REVIEW } from '../../graphql/mutations';

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: theme.colors.backgroundLight,
        justifyContent: 'space-around',
        padding: 15
    }
})

const initialValues = {
    repositoryName: '',
    ownerName: '',
    rating: '',
    text: null
};

const validationSchema = yup.object().shape({
    repositoryName: yup.string().trim().required('Repository name is required'),
    ownerName: yup.string().trim().required('Repository owner name is required'),
    rating: yup.number().min(0, 'Minimum rating is 0').max(100, 'Maximum rating is 100').required('Please provided a rating between 0 and 100'),
    text: yup.string().trim().nullable()
})


//TODO: allow a user to submit only 1 review per repo
const ReviewForm = () => {
    const history = useHistory();
    const [createReview] = useMutation(CREATE_REVIEW);

    const onSubmit = async (values) => {
        const formatedInput = { ...values, rating: Number(values.rating) };

        try {
            const { data } = await createReview({ variables: formatedInput });
            if (data?.createReview) {
                history.push(`/${data.createReview.repositoryId}`);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ handleSubmit }) => (
                <View style={styles.formContainer}>
                    <FormikTextInput name='ownerName' placeholder='Repository owner username' />
                    <FormikTextInput name='repositoryName' placeholder='Repository name' />
                    <FormikTextInput name='rating' placeholder='Rating' keyboardType='numeric' />
                    <FormikTextInput name='text' placeholder='Review text' multiline />
                    <Button onPress={handleSubmit} style={{ marginLeft: 10, marginRight: 10 }}>
                        Create a review
                    </Button>
                </View>
            )}
        </Formik>
    );
};

export default ReviewForm;