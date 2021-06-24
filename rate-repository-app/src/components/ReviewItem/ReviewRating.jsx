import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
    container: {
        height: theme.dimensions.avatarHeight,
        width: theme.dimensions.avatarWidth,
        borderRadius: theme.dimensions.avatarWidth / 2,
        borderColor: theme.colors.primary,
        borderStyle: 'solid',
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    rating: {
        color: theme.colors.primary,
        fontSize: theme.fontSizes.heading,
        fontWeight: theme.fontWeights.bold,
    }
});

const ReviewRating = ({ rating }) => (
    <View style={styles.container}>
        <Text style={styles.rating}>{rating}</Text>
    </View>
);

export default ReviewRating;