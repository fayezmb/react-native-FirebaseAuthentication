import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { text: ''};
  render() {
    return (
      <Card>
      <CardSection>
      <Input
      value={this.state.text}
      onChangeText= { text => this.setState({ text })}
        />
      </CardSection >
      <CardSection />
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
