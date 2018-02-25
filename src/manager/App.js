import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import config from '../app/config/Config';
import RouterComponent from './Router';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp(config.firebase);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }} >
          <RouterComponent />
        </View>
      </Provider>
    );
  }
}

export default App;
