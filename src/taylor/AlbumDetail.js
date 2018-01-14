import React from 'react';
import { Text, View, Image, Dimensions, Linking } from 'react-native';
import { Card, CardSection, Button } from '../common';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;

  return (
    <Card>
      <CardSection>
        <View style={style.thumbContainer}>
          <Image style={style.thumb} source={{ uri: thumbnail_image }} />
        </View>
        <View style={style.content}>
          <Text style={style.text}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{ uri: image }} style={style.image} />
      </CardSection>
      <Button onClick={() => Linking.openURL(album.url)} >
        Click me!
      </Button>
    </Card>
  );
};

const width = Dimensions.get('window').width;
const style = {
  content: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 18
  },
  thumb: {
    height: 50,
    width: 50
  },
  thumbContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  image: {
    height: width - 50,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
