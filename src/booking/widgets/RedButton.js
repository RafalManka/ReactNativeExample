import React from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import assets from '../../../assets/Assets';

const RedButton = (props) => {
  const { children } = props;
  return (
    <TouchableHighlight
      style={style.button}
      underlayColor={assets.colors.emiratesRedPale}
      onPress={() => console.log('ouch!')}
    >
      <View style={style.container}>
        <Image style={style.boeing} source={assets.icons.boeing} />
        <Text style={style.text}>{children}</Text>
      </View>
    </TouchableHighlight>
  );
};

const style = {
  button: {
    borderRadius: 5,
    backgroundColor: assets.colors.emiratesRed,
    marginLeft: 15,
    marginRight: 15,
  },
  boeing: {
    height: 23,
    width: 23,
    marginRight: 10
  },
  container: {
    padding: 20,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    color: assets.colors.white,
    fontWeight: '600'
  }
};

export default RedButton;
