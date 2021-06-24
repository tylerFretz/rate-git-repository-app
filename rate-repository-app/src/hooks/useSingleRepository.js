import { useQuery } from '@apollo/react-hooks';

import { REPOSITORY } from '../graphql/queries';

const useSingleRepository = ({ repoId, first }) => {
    const { data, loading, fetchMore } = useQuery(REPOSITORY, {
        fetchPolicy: "cache-and-network",
        variables: { id: repoId, first }
    });

    const handleFetchMore = async () => {
        const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

        if (!canFetchMore) return;

        console.log("Fetching more reviews!");

        await fetchMore({
            query: REPOSITORY,
            variables: {
                id: repoId,
                after: data?.repository.reviews.pageInfo.endCursor,
                first,
            },
            updateQuery: (prevResults, { fetchMoreResult }) => {
                const newReviews = fetchMoreResult?.repository.reviews;

                if (!newReviews) return prevResults;

                const nextResults = {
                    repository: {
                        ...prevResults.repository,
                        reviews: {
                            ...prevResults.repository.reviews,
                            edges: [
                                ...prevResults.repository.reviews.edges,
                                ...newReviews.edges,
                            ],
                            pageInfo: newReviews.pageInfo
                        }
                    }
                };

                return nextResults;
            }
        });
    };

    const repository = data?.repository;

    const reviews = data?.repository.reviews?.edges.map(edge => edge.node);

    return {
        repository,
        reviews,
        loading,
        handleFetchMore
    };
};

export default useSingleRepository;