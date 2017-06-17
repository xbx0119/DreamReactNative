
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Button,
  View
} from 'react-native';


export class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

