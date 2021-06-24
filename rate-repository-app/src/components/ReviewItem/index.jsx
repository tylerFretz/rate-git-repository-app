import React from 'react';
import { Alert, View, StyleSheet, Text } from 'react-native';
import { useHistory } from 'react-router-native';
import { useMutation } from '@apollo/react-hooks';
import { Button } from 'react-native-paper';

import { DELETE_REVIEW } from '../../graphql/mutations';
import ReviewRating from './ReviewRating';
import ReviewHeader from './ReviewHeader';
import theme from '../../theme';


const ReviewItem = ({ review, userReviewItem = false, refetch }) => {
    const history = useHistory();
    const [deleteReview] = useMutation(DELETE_REVIEW);

    const onViewRepoPress = () => {
        history.push(`/${review.repositoryId}`);
    };

    const onDeletePress = () => {
        Alert.alert(
            'Delete review',
            'Are you sure you want to delete this review?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: async () => {
                        if(refetch) {
                            await deleteReview({ variables: { id: review.id } });
                            await refetch({ includeReviews: true });
                        }
                    }
                }
            ]
        );
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <ReviewRating rating={review.rating} />
                <View style={{ paddingLeft: 20 }}>
                    <ReviewHeader username={review.user.username} createdAt={review.createdAt} />
                    <View>
                        <Text style={styles.content}>{review.text}</Text>
                    </View>
                </View>
            </View>
            {userReviewItem && (
                <View style={styles.buttonsContainer}>
                    <Button mode='contained' onPress={onViewRepoPress} color='blue'>
                        View repository
                    </Button>
                    <Button mode='contained' onPress={onDeletePress} color='red'>
                        Delete review    
                    </Button>            
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 10
    },
    content: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        paddingRight: 70
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: theme.colors.white,
        padding: 10
    }
});


export default ReviewItem;