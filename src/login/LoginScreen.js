import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from '../common';
import config from '../app/config/Config';
import LoginForm from './LoginForm';

class LoginScreen extends Component {

  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp(config.firebase);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button
              onClick={() => firebase.auth().signOut()}
            >Log out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={style.screen}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const style = {
  screen: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  }
};

export default LoginScreen;
