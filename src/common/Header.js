import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.headerText}</Text>
  </View>
);

const styles = {
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  text: {
    // fontFamily: 'emiratesSM',
    color: 'white',
    fontSize: 18
  }
};

export { Header };
