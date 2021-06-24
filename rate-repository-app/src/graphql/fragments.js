import { gql } from '@apollo/react-hooks';

export const REPOSITORY_DETAILS = gql`
    fragment repositoryDetails on Repository {
        id
        name
        ownerName
        createdAt
        fullName
        description
        language
        ownerAvatarUrl
        stargazersCount
        forksCount
        reviewCount
        ratingAverage
        url
        authorizedUserHasReviewed
    }
`;

export const REVIEW_DETAILS = gql`
    fragment reviewDetails on ReviewConnection {
        edges{
            node {
                id
                text
                createdAt
                rating
                repositoryId
                user {
                    username
                }
            }
            cursor
        }
        pageInfo {
            endCursor
            startCursor
            totalCount
            hasNextPage
        }
    }
`;