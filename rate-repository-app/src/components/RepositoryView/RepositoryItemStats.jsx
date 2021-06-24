import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../utils/Text';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    statsContainer: {
        padding: 10,
        alignItems: 'center'
    }
});


const RepositoryItemStats = ({ stars, forks, reviews, rating }) => {

    const formatData = data => {
        if (data >= 1000 ) {
            return (data / 1000).toFixed(1) + "k";
        }
        else {
            return data;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.statsContainer}>
                <Text fontWeight="bold" fontSize="subheading" testID="starsCount">{formatData(stars)}</Text>
                <Text color="textSecondary" fontSize="subheading">Stars</Text>
            </View>
            <View style={styles.statsContainer}>
                <Text fontWeight="bold" fontSize="subheading" testID="forksCount">{formatData(forks)}</Text>
                <Text color="textSecondary" fontSize="subheading">Forks</Text>
            </View>
            <View style={styles.statsContainer}>
                <Text fontWeight="bold" fontSize="subheading" testID="reviewsCount">{formatData(reviews)}</Text>
                <Text color="textSecondary" fontSize="subheading">Reviews</Text>
            </View>
            <View style={styles.statsContainer}>
                <Text fontWeight="bold" fontSize="subheading" testID="ratingAverage">{rating}</Text>
                <Text color="textSecondary" fontSize="subheading">Rating</Text>
            </View>
        </View>
    );
};

export default RepositoryItemStats;