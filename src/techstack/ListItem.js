import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from '../common';
import * as actions from './actions';

class ListItem extends Component {
  render() {
    const { id, title } = this.props.data;
    console.log(this.props);
    return (
      <TouchableWithoutFeedback onPress={() => { this.props.didSelectLibrary(id); }}>
        <View>
          <CardSection>
            <Text style={style.title}>{title}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const style = {
  title: {
    fontSize: 18,
    paddingLeft: 10
  }
};

export default connect(null, actions)(ListItem);
