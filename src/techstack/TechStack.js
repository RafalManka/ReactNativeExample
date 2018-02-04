import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from '../common';

class TechStack extends Component {

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={style.container}>
          <Header headerText="Tech Stack" />
          <Text>Hello world</Text>
        </View>
      </Provider>
    );
  }

}

const style = {
  container: {
    flex: 1,
    backgroundColor: 'gray',
  }
};

export default TechStack;
