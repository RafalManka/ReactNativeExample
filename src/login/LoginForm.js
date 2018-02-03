import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from '../common';

class LoginForm extends Component {

    state = {
      email: '',
      password: '',
      error: '',
      loading: false,
      loggedIn: false
    }

    onButtonPress() {
      this.logIn();
    }

    signIn() {
      const { email, password } = this.state;
      firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(() => {
          this.setState({ error: 'Authentication failed', loading: false });
        });
    }

    logIn() {
      const { email, password } = this.state;
      this.setState({ error: '', loading: true });
      firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .catch(() => {
          this.signIn();
        });
    }

    renderButton() {
      if (this.state.loading) {
        return <Spinner size='small' />;
      }
      return <Button onClick={this.onButtonPress.bind(this)}>Log in</Button>;
    }

    render() {
      return (
        <View style={style.container}>
          <Card>
            <CardSection>
              <Input
                label={'email'}
                value={this.state.email}
                placeholder='user@gmail.com'
                onChangeText={email => this.setState({ email })}
              />
            </CardSection>
            <CardSection>
              <Input
                label={'password'}
                value={this.state.password}
                placeholder='password'
                secureTextEntry
                onChangeText={password => this.setState({ password })}
              />
            </CardSection>
              <Text style={style.error}>{this.state.error}</Text>
            <CardSection>{this.renderButton()}</CardSection>
          </Card>
        </View>
      );
    }
}

const style = {
  error: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  input: {
    height: 50,
    width: 100
  }
};

export default LoginForm;
