import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import theme from '../theme';
import SingleRepository from './RepositoryView/SingleRepository';
import ReviewForm from './ReviewForm';
import UserReviews from './UserReviews';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route exact path="/" component={RepositoryList} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/newreview" component={ReviewForm} />
        <Route exact path="/myreviews" component={UserReviews} />
        <Route path="/:id" component={SingleRepository} />
        <Redirect to="/"/>
      </Switch>
    </View>
  );
};

export default Main;