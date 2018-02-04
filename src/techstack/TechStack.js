import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from '../common';
import LibraryList from './LibraryList';

const TechStack = () => (
  <Provider store={createStore(reducers)}>
    <View style={style.container}>
      <Header headerText="Tech Stack" />
      <LibraryList />
    </View>
  </Provider>
);

const style = {
  container: {
    flex: 1,
    backgroundColor: 'gray',
  }
};

export default TechStack;
