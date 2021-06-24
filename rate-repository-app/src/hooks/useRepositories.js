import { useQuery } from '@apollo/react-hooks';

import { REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ sortCriteria, filter, first }) => {
  const sortAndFilter = {
    ...sortCriteriaOptions[sortCriteria],
    filter
  };

  const { data, loading, fetchMore } = useQuery(REPOSITORIES, {
    variables: { first, ...sortAndFilter },
    fetchPolicy: "cache-and-network",
  });

  let repositories = [];

  if (data?.repositories) {
    repositories = data.repositories.edges.map(({ node }) => node);
  }

  const handleFetchMore = async () => {
    if (filter) return;

    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) return;

    console.log("Fetching more!");

    await fetchMore({
      query: REPOSITORIES,
      variables: {
        after: data?.repositories.pageInfo.endCursor,
        first,
        ...sortAndFilter
      },
      updateQuery: (prevResults, { fetchMoreResult }) => {
        const newRepositories = fetchMoreResult?.repositories;

        if(!newRepositories) return prevResults;

        const nextResults = {
          repositories: {
            ...prevResults.repositories,
            edges: [
              ...prevResults.repositories.edges,
              ...newRepositories.edges,
            ],
            pageInfo: newRepositories.pageInfo
          }
        };

        return nextResults;
      },
    });
  };
  
  return {
    repositories,
    loading,
    handleFetchMore
  };
};

const sortCriteriaOptions = {
  latest: { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
  highestRated: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
  lowestRated: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' }
};

export default useRepositories;