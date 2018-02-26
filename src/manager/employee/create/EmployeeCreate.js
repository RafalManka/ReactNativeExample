import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeForm } from '../../actions';
import { Card, CardSection, Input, Button } from '../../../common';

class EmployeeCreate extends Component {

  render() {
    const { name, phone } = this.props;
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label={name}
              placeholder="Jane"
              value={this.props.name}
              onChangeText={(value) => {
                this.props.employeeUpdate({ prop: 'name', value });
              }}
            />
          </CardSection>
        </Card>

        <Card>
          <CardSection>
            <Input
              label={phone}
              placeholder="555-555-555"
              value={this.props.phone}
              onChangeText={(value) => {
                this.props.employeeUpdate({ prop: 'phone', value });
              }}
            />
          </CardSection>

          <CardSection>
            <Text style={style.picker}>Shift</Text>
          </CardSection>
          <CardSection>
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.props.shift}
              onValueChanged={value => {
                this.props.employeeUpdate({ prop: 'shift', value });
              }}
            >
              <Picker.Item label="Monday" value="mon" />
              <Picker.Item label="Tuesday" value="tue" />
              <Picker.Item label="Wednesday" value="wed" />
              <Picker.Item label="Thursday" value="thu" />
              <Picker.Item label="Friday" value="fri" />
              <Picker.Item label="Saturday" value="sat" />
              <Picker.Item label="Sunday" value="sun" />
            </Picker>
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

const style = {
  picker: {
    fontSize: 18,
    paddingLeft: 20
  },
  pickerHolder: {
    flexDirection: 'column'
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeForm })(EmployeeCreate);
