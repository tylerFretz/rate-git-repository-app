import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { format, parseISO } from 'date-fns';

import theme from '../../theme';


const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start'
    },
    owner: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.heading,
        fontWeight: theme.fontWeights.bold
    },
    date: {
        color: theme.colors.textSecondary,
        fontSize: theme.fontSizes.subheading,
    }
});

const ReviewHeader = ({ username, createdAt }) => {

    const formattedCreatedAt = format(parseISO(createdAt), 'd.M.y');

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.owner}>{username}</Text>
            </View>
            <View>
                <Text style={styles.date}>{formattedCreatedAt}</Text>
            </View>
        </View>
    );
};

export default ReviewHeader;