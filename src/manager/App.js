import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View } from 'react-native';
import firebase from 'firebase';

import reducers from './reducers';
import config from '../app/config/Config';
import LoginForm from './login/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp(config.firebase);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
