import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import * as WebBrowser from 'expo-web-browser';

import useSingleRepository from '../../hooks/useSingleRepository';
import RepositoryItemDescription from './RepositoryItemDescription';
import RepositoryItemStats from './RepositoryItemStats';
import ReviewItem from '../ReviewItem';
import theme from '../../theme';
import Buttton from '../utils/Button';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: theme.colors.white,
        borderBottomWidth: 10,
        borderBottomColor: theme.colors.mainBackground
    },
    seperator: {
        height: 10,
        backgroundColor: theme.colors.mainBackground
    }
});

const ItemSeparator = () => <View style={styles.seperator} />;

const RepositoryInfo = ({ repository }) => {

    const openGitHubLink = () => {
        WebBrowser.openBrowserAsync(repository.url)
    } ;

    return (
        <View style={styles.container}>
            <RepositoryItemDescription
                fullName={repository.fullName}
                description={repository.description}
                language={repository.language}
                uri={repository.ownerAvatarUrl}
            />
            <RepositoryItemStats
                stars={repository.stargazersCount}
                forks={repository.forksCount}
                reviews={repository.reviewCount}
                rating={repository.ratingAverage}
            />
            <Buttton onPress={openGitHubLink} style={{ marginLeft: 10, marginRight: 10 }}>
                Open in GitHub
            </Buttton>
            <View style={{ height: 10 }} />
        </View>
    );
};

const SingleRepository = () => {
    const { id } = useParams(); 
    const { repository, reviews, loading, handleFetchMore } = useSingleRepository({ repoId: id, first: 2 });

    if (loading) {
        return <Text>Loading...</Text>
    }

    const onEndReached = () => {
        handleFetchMore();
    };

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
        />
    );
};

export default SingleRepository;