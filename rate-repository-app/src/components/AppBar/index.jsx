import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useHistory } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import Constants from 'expo-constants';

import theme from '../../theme';
import AppBarTab from './AppBarTab';
import { AUTH_USER } from '../../graphql/queries';
import AuthStorageContext from '../../contexts/AuthStorageContext';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    minHeight: theme.dimensions.appBarMinHeight,
    paddingHorizontal: 10
  }
});

const AppBar = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const { data } = useQuery(AUTH_USER);
  const history = useHistory();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push('/');
    console.log("Signed out");
  };

  return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <AppBarTab title="Repositories" uri="/" />
          {data?.authorizedUser ? (
            <>
              <AppBarTab title="Create a review" uri="/newreview" />
              <AppBarTab title="My reviews" uri="/myreviews" />
              <AppBarTab title="Sign out" onPress={signOut} />
            </>
          ) : (
            <>
              <AppBarTab title="Sign in" uri="/sign-in" />
              <AppBarTab title="Sign up" uri="/sign-up" />
            </>
          )}
        </ScrollView>
      </View>
  );
};

export default AppBar;