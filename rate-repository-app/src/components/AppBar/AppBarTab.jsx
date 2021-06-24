import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../../theme';
import Text from '../utils/Text';

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    text: {
        color: theme.colors.white,
        fontSize: theme.fontSizes.appBar,
        fontWeight: theme.fontWeights.bold
    }
});

const AppBarTab = ({ title, uri, onPress }) => (
    <Link
        onPress={onPress}
        to={uri}
        component={TouchableWithoutFeedback}
    >
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    </Link>
);

export default AppBarTab;