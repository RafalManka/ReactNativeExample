import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from '../../common';


class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPressed() {
    const { email, password } = this.props;
    console.log(`email = ${email}`);
    console.log(`password = ${password}`);
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }} >
          <Text style={style.error.text}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.progress === true) {
      return <Spinner size="large" />;
    }
    return <Button onClick={this.onButtonPressed.bind(this)} >Create</Button>;
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
          <Input
            label="Email"
            placeholder="your@email.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          {this.renderError()}

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}

const style = {
  error: {
    text: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, progress } = auth;
  return { email, password, error, progress };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
