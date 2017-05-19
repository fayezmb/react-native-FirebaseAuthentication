
import React from 'react';
import {
  AppRegistry,

  View
} from 'react-native';
import AlbumList from './src/components/AlbumList';
// import Header from './src/components/header'
const App = () => (
<View style={{ flex: 1 }}>
  <AlbumList />
  </View>
);

AppRegistry.registerComponent('player', () => App);
