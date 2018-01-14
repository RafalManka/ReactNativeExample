import React from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import { Colors, Icons } from '../../../assets';

const RedButton = (props) => {
  const { children } = props;
  return (
    <TouchableHighlight
      style={style.button}
      underlayColor={Colors.emiratesRedPale}
      onPress={() => console.log('ouch!')}
    >
      <View style={style.container}>
        <Image style={style.boeing} source={Icons.boeing} />
        <Text style={style.text}>{children}</Text>
      </View>
    </TouchableHighlight>
  );
};

const style = {
  button: {
    borderRadius: 5,
    backgroundColor: Colors.emiratesRed,
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
    color: Colors.white,
    fontWeight: '600'
  }
};

export default RedButton;
