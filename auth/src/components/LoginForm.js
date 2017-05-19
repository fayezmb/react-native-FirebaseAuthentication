import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: ''};
  render() {
    return (
      <Card>
      <CardSection>
      <Input
      placeholder="user@gmail.com"
      label="email"
      value={this.state.email}
      onChangeText= { email => this.setState({ email })}
        />
      </CardSection >
      <CardSection>
      <Input
      placeholder="password"
      label="Password"
      secureTextEntry
      value= {this.state.password}
      onChangeText={password => this.setState({password})}
      />
      </CardSection>
      <CardSection>
      <Button>
      dis Button
      </Button>
      </CardSection>
      </Card>
    );
  }
  }
export default LoginForm;
