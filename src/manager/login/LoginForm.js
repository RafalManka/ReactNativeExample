import React, { Component } from 'react';
import { Card, CardSection, Input } from '../../common';


class LoginForm extends Component {

  onEmailChange(text) {

  }

  render() {
    return (
      <Card>
        <CardSection>
        <Input
          label="Email"
          placeholder="your@email.com"
          onChangeText={this.onEmailChange.bind(this)}
        />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
          />
        </CardSection>

        <CardSection>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
