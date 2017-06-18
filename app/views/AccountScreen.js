
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Button,
  View
} from 'react-native';


export class AccountScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Account
        </Text>
        <Button
          onPress={() => alert("记一笔")}
          title="记一笔"
          color="#426ab3"
        />
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

