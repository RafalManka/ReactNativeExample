import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import assets from '../../../assets/Assets';

class WhiteButton extends Component {

  compoundIcon() {
    switch (this.props.icon) {
      case 'car':
          return assets.icons.car;
      case 'hotel':
          return assets.icons.hotel;
      case 'attractions':
          return assets.icons.attractions;
      case 'transfers':
          return assets.icons.transfers;
      default:
          return null;
    }
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor={assets.colors.lightGray}
        style={style.button}
        onPress={() => console.log('ouch!')}
      >
        <View style={style.content}>
          <Image style={style.icon} source={this.compoundIcon()} />
          <Text style={style.text}>{this.props.children}</Text>
        </View>
      </TouchableHighlight>
    );
  }

}

const style = {
  button: {
    padding: 20,
    backgroundColor: assets.colors.white,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    borderRadius: 5,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  content: {
    flexDirection: 'row'
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: 10
  },
  text: {
    fontSize: 18,
    color: assets.colors.black,
    paddingTop: 4,
    paddingBottom: 4,
    marginLeft: 10,
    fontWeight: '200',
  }
};

export default WhiteButton;
