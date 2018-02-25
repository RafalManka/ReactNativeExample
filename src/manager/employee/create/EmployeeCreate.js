import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection, Input, Button } from '../../../common';

class EmployeeCreate extends Component {
  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="Name"
              placeholder="Jane"
            />
          </CardSection>
        </Card>

        <Card>
          <CardSection>
            <Input
              label="Phone"
              placeholder="555-555-555"
            />
          </CardSection>
        </Card>

        <Card>
          <CardSection>
            <Button>Create</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default EmployeeCreate;
