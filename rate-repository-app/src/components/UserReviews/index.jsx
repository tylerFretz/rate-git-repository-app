import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { View, FlatList, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { AUTH_USER } from '../../graphql/queries';
import theme from '../../theme';
import ReviewItem from '../ReviewItem';


const UserReviews = () => {
    const { data, loading, refetch } = useQuery(AUTH_USER, {
        variables: { includeReviews: true }
    });

    let userReviews = []

    if (data?.authorizedUser.reviews) {
        userReviews = data.authorizedUser.reviews.edges.map((edge) => edge.node);
    }

    const renderItem = ({ item }) => <ReviewItem review={item} userReviewItem={true} refetch={refetch} />;

    if (loading) {
      return <ActivityIndicator color={theme.colors.primary} size='large' style={{ top: 100 }} />;
    };

    return (
        <FlatList
            data={userReviews}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    );
};

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.mainBackground
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export default UserReviews;