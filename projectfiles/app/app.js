import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Header} from './components/common';
import firebase from 'firebase';
class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      {
    apiKey: "AIzaSyDtE7Z_bH3j0UfsuLk19QuZ8LuIkSM_j0I",
    authDomain: "fir-authtest-c78fd.firebaseapp.com",
    databaseURL: "https://fir-authtest-c78fd.firebaseio.com",
    projectId: "fir-authtest-c78fd",
    storageBucket: "fir-authtest-c78fd.appspot.com",
    messagingSenderId: "619116072113"
  });
  }
  render(){
    return (
      <View>
      <Text> Hello </Text>
      </View>
    );
  }
}

export default App;
