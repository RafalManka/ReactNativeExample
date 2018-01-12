import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onClick, children }) => (
  <TouchableOpacity style={style.button} onPress={onClick} >
    <Text style={style.text}>{ children }</Text>
  </TouchableOpacity>
);

const style = {
    button: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#ffff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#007aff',
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 5
    },
    text: {
      alignSelf: 'center',
      color: '#007aff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
    }
};

export default Button;
