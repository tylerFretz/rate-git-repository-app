import { gql } from 'apollo-boost';

import { REPOSITORY_DETAILS, REVIEW_DETAILS } from './fragments';

export const REPOSITORIES = gql`
    query getRepositories(
        $orderBy: AllRepositoriesOrderBy,
        $orderDirection: OrderDirection,
        $filter: String
        $first: Int,
        $after: String
    ) {
        repositories(
            orderBy: $orderBy,
            orderDirection: $orderDirection,
            searchKeyword: $filter,
            first: $first,
            after: $after
        ) {
            edges {
                node {
                    ...repositoryDetails
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
    }
    ${REPOSITORY_DETAILS}
`;

export const REPOSITORY = gql`
    query getRepository($id: ID!, $first: Int, $after: String) {
        repository(id: $id) {
            ...repositoryDetails
            reviews(first: $first, after: $after) {
                ...reviewDetails
            }
        }
    }
    ${REPOSITORY_DETAILS}
    ${REVIEW_DETAILS}
`;

export const AUTH_USER = gql`
    query getAuthUser($includeReviews: Boolean = false) {
        authorizedUser {
            id
            username
            reviews @include(if: $includeReviews) {
                ...reviewDetails
            }
        }
    }
    ${REVIEW_DETAILS}
`;