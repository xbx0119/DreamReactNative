
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Button,
  View
} from 'react-native';

import { ImgSwiper } from '../components/ImgSwiper';

export class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ImgSwiper />
        <Text style={styles.welcome}>
          Home
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1
  },
  
});

