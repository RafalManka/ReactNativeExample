import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../common';

class LoginScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <Header headerText={'Login'} />
        <Text>Hello World!</Text>
      </View>
    );
  }
}

const style = {
  container: {
    backgroundColor: 'gray',
    flex: 1
  }
};

export default LoginScreen;
