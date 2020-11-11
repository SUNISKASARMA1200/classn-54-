import React, { Component } from 'react';
import { Button, View, Text, TextInput } from 'react-native';

class AnyColourButton extends Component {
  displayAlert() {
    alert('I am a box');
  }
  render() {
    return (
      <Button
        color={this.props.color}
        title="click Me"
        onPress={this.displayAlert}>
      </Button>  
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 150, width: 150, marginLeft: 100 }}>
        <Text style={{ marginTop: 50 }}>My first App</Text>
        <AnyColourButton color="green" />
      </View>
    );
  }
}
