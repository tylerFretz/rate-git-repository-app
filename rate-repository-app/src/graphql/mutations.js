import { gql } from 'apollo-boost';

export const AUTHORIZE = gql`
    mutation authorizeMutation($credentials: AuthorizeInput!) {
      authorize(credentials: $credentials) {
        accessToken
      }
    }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      username
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($repositoryName: String!, $ownerName: String!, $rating: Int!, $text: String) {
    createReview(review: { repositoryName: $repositoryName, ownerName: $ownerName, rating: $rating, text: $text }) {
      id
      text
      createdAt
      rating
      repositoryId
      user {
        username
      }
    }
  }
`;


export const DELETE_REVIEW = gql`
  mutation deleteReview($id: ID!) {
    deleteReview(id: $id)
  }
`;