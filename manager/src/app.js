import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {View,Text} from 'react-native';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './common/LoginForm';
class app extends Component{
  componentWillMount(){
    const config = {
  apiKey: "AIzaSyCm3oOzgVPvL0kDre0uGDpoilJZlV4kkr4",
  authDomain: "manager-e563e.firebaseapp.com",
  databaseURL: "https://manager-e563e.firebaseio.com",
  projectId: "manager-e563e",
  storageBucket: "manager-e563e.appspot.com",
  messagingSenderId: "455979239315"
};
  }
  render()
  {
    return (
      <Provider store={createStore(reducers)}>
      <View>
      <Text>
      <LoginForm/>
      </Text>
      </View>
      </Provider>
    );
  }
}
