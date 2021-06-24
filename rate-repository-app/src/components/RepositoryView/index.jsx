import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';

import theme from '../../theme';
import RepositoryItemStats from './RepositoryItemStats';
import RepositoryItemDescription from './RepositoryItemDescription';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: theme.colors.white
    }
});


const RepositoryItem = ({ repo }) => {
    const history = useHistory();

    const onPress = () => {
        history.push(`/${repo.id}`);
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <RepositoryItemDescription
                    fullName={repo.fullName}
                    description={repo.description}
                    language={repo.language}
                    uri={repo.ownerAvatarUrl}
                />
                <RepositoryItemStats
                    stars={repo.stargazersCount}
                    forks={repo.forksCount}
                    reviews={repo.reviewCount}
                    rating={repo.ratingAverage}
                />
            </View>
        </TouchableOpacity>
    );
};

export default RepositoryItem;