import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Header from '../app/widgets/Header';
import RedButton from './widgets/RedButton';
import WhiteButton from './widgets/WhiteButton';
import assets from '../../assets/Assets';

const LandingScreen = () => (
  <ImageBackground
    source={assets.images.landingBackground}
    style={style.image}
  >
    <Header headerText={'Book'} />
    <View style={{ height: 43 }} />
    <RedButton>Book a flight</RedButton>
    <Text style={style.sectionTitle}>OTHER SERVICES</Text>
    <WhiteButton icon={'hotel'}>Hotels</WhiteButton>
    <WhiteButton icon={'car'}>Car Rental</WhiteButton>
    <WhiteButton icon={'transfers'}>Airport Transfer</WhiteButton>
    <WhiteButton icon={'attractions'}>Attractions</WhiteButton>
  </ImageBackground>
);

const style = {
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  sectionTitle: {
    paddingTop: 20,
    paddingBottom: 20,
    color: 'white',
    marginLeft: 15,
    marginRight: 15,
  }
};

export default LandingScreen;
