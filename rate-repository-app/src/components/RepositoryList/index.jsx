import React, { useState } from 'react';

import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [sorting, setSorting] = useState('latest');
  
  const [filter, setFilter] = useState('');
  const { repositories, loading, handleFetchMore } = useRepositories({
    sortCriteria: sorting,
    filter,
    first: 8
  });

  const onEndReached = () => {
    handleFetchMore();
  };

  return <RepositoryListContainer
           repositories={repositories}
           loading={loading}
           setSortingCriteria={setSorting}
           sorting={sorting}
           setFilter={setFilter}
           filter={filter}
           onEndReached={onEndReached}
         />;
};

export default RepositoryList;