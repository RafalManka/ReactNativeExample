import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card } from '../common';
import * as actions from './actions';

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { data, expanded } = this.props;
    if (expanded) {
      return (
        <Card>
          <Text>{data.description}</Text>
        </Card>
      );
    }
    return <View />;
  }

  render() {
    const { id, title } = this.props.data;
    console.log(this.props);
    return (
      <TouchableWithoutFeedback onPress={() => { this.props.selectLibrary(id); }}>
        <View>
          <CardSection>
            <Text style={style.title}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectLibraryId === ownProps.data.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
