import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import FilterInput from './FilterInput';
import SortByMenu from './SortByMenu';
import RepositoryItem from '../RepositoryView';
import theme from '../../theme';


class RepositoryListContainer extends Component {

  renderHeader = () => {
    const {
      filter,
      setFilter,
      sorting,
      setSortingCriteria
    } = this.props;

    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' , height: 60, borderBottomWidth: 2 }}>
        <FilterInput filter={filter} setFilter={setFilter} />
        <SortByMenu sorting={sorting} setSortingCriteria={setSortingCriteria} />
      </View>
    );
  };

  render() {
    const {
      repositories,
      loading,
      onEndReached
    } = this.props;


    const renderItem = ({ item }) => <RepositoryItem repo={item} />;

    if (loading) {
      return <ActivityIndicator color={theme.colors.primary} size='large' style={{ top: 100 }} />;
    };

    return (
      <FlatList
          data={repositories}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={item => item.id}
          ListHeaderComponent={this.renderHeader}
          renderItem={renderItem}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
      />
    );
  };
};

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.mainBackground
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export default RepositoryListContainer;