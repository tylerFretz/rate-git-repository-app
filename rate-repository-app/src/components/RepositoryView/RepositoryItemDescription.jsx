import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Text from '../utils/Text';
import theme from '../../theme';

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageContainer: {
        flex: 3
    },
    avatar: {
        borderRadius: 4,
        width: theme.dimensions.avatarWidth,
        height: theme.dimensions.avatarHeight
    },
    language: {
        padding: 5,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        fontSize: theme.fontSizes.subheading
    },
    repoInfo: {
        flex: 13,
        justifyContent: 'space-between'
    }
});


const RepositoryItemDescription = ({ fullName, description, language, uri }) => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.avatar} source={{ uri: uri }} />
            </View>
            <View style={styles.repoInfo}>
                <Text fontSize="heading" fontWeight="bold" testID="fullname">{fullName}</Text>
                <Text  fontSize="subheading" color="textSecondary" testID="description">{description}</Text>
                <Text style={styles.language} testID="language">{language}</Text>
            </View>
        </View>
    );
};

export default RepositoryItemDescription;

