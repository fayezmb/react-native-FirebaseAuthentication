import React from 'react';

import { View, Text, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './button'

const albumdetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
return (
  <Card>
  <CardSection>
  <View style={styles.thumbnailContainerStyle}>
  <image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} /> </View>
  <View style={styles.headerContentStyle}>
  <Text style={styles.headerTextStyle}> {title} </Text>
  <Text>{artist}</Text>
  </View>
  </CardSection>
  <CardSection>
  <image style={styles.imageStyle} source={{ uri: image }} />
  </CardSection>
  <CardSection>
  <Button onPress={() => Linking.openURL(url)} >
  Buy Now
  </Button>
  </CardSection>
  </Card>
);
};
export default albumdetail;
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'

  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    width: null,
    flex: 1
  }
};
